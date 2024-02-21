import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useState } from "react";
import { FieldValues, Path, useForm } from "react-hook-form";
import { toast } from "sonner";
import { ZodSchema } from "zod";

type Step = {
  title: string;
  description: string;
  fields: string[];
};

export default function useMultiStepForm<T extends FieldValues>({
  steps,
  schema,
  updateState,
  onSubmit,
}: {
  steps: Step[];
  schema: ZodSchema;
  updateState: (state: any, payload: Partial<T>) => any;
  onSubmit: (data: T) => void;
}) {
  const [index, setIndex] = useState({
    current: 5,
    delta: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<T>({
    resolver: zodResolver(schema),
  });
  const { state, actions } = useStateMachine({ updateState });

  const next = async () => {
    if (isLoading) return;

    console.log(steps[index.current].fields as Path<T>[]);

    const isValid = await form.trigger(
      steps[index.current].fields as Path<T>[],
    );

    console.log(isValid);

    if (!isValid) return;

    const values = form.getValues();

    actions.updateState(values);

    if (index.current === steps.length - 1) {
      setIsLoading(true);
      try {
        await onSubmit({ ...state, ...values });
      } catch (error) {
        toast("An error occurred, please try again", {
          closeButton: true,
          className:
            "bg-destructive text-destructive-foreground border-destructive-foreground",
        });
        console.error(error);
      } finally {
        setIsLoading(false);
      }

      return;
    }

    setIndex((prev) => ({
      current: prev.current + 1,
      delta: true,
    }));
  };

  const prev = () => {
    if (index.current > 0)
      setIndex((prev) => ({
        current: prev.current - 1,
        delta: false,
      }));
  };

  return {
    state,
    form,
    isLoading,
    delta: index.delta,
    next,
    prev,
    currentIndex: index.current,
    setCurrentIndex: (i: number) =>
      setIndex((prev) => ({ current: i, delta: i > prev.current })),
  };
}
