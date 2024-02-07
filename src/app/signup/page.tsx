"use client";

import FormWrapper from "@/components/FormWrapper";
import {
  CredentialsInfo,
  LocationInfo,
  PersonalInfo,
} from "@/components/signup-info-form";
import { useState } from "react";
import { SignupInputs, SignupSchema } from "@/lib/signup-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const steps = [
  {
    title: "Let's get to know you better!",
    description:
      "Please write your data as it appears on your government ID card or driver's license",
    form: PersonalInfo,
    fields: ["firstName", "middleName", "lastName", "dateOfBirth", "gender"],
  },
  {
    title: "Let's get to know you better!",
    description: "Please supply the location of your primary residence",
    form: LocationInfo,
    fields: ["city", "governance", "street"],
  },
  {
    title: "Help us verify it's you",
    description: "Make sure to provide your primary phone number",
    form: CredentialsInfo,
    fields: ["phone", "email", "password", "confirmPassword"],
  },
];

type FieldName = keyof SignupInputs;

export default function page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<SignupInputs>({
    resolver: zodResolver(SignupSchema),
  });

  const next = async () => {
    const fields = steps[currentIndex].fields;
    const isValid = await trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!isValid) return;

    if (currentIndex < steps.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleSubmit((data) => {
        console.log(data);
      })();
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const Form = steps[currentIndex].form;

  return (
    <main>
      <FormWrapper
        title={steps[currentIndex].title}
        description={steps[currentIndex].description}
      >
        <Form register={register} errors={errors} />
        <button
          type="button"
          className="fixed bottom-5 rounded-md w-52 right-5 bg-gray-600 text-white p-3"
          onClick={next}
        >
          {currentIndex < steps.length - 1 ? "Next" : "Finish"}
        </button>
        {currentIndex > 0 && (
          <button
            type="button"
            className="fixed bottom-5 rounded-md w-52 left-5 bg-gray-200 p-3"
            onClick={prev}
          >
            Back
          </button>
        )}
      </FormWrapper>
    </main>
  );
}
