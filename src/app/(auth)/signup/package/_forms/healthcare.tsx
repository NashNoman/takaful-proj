"use client";

import { Form, FormField } from "@/components/ui/form";
import { SignupInputs, SignupSchema } from "@/lib/zod/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { LoaderIcon } from "lucide-react";

const steps = [
  {
    title: "Healthcare",
    description: "Let's get started with your healthcare plan",
    fields: ["products", ""],
  },
];

type FormField = keyof SignupInputs;

export default function page() {
  // const [index, setIndex] = useState({
  //   current: 0,
  //   delta: true,
  // });
  // const [isLoading, setIsLoading] = useState(false);

  // const form = useForm<SignupInputs>({
  //   resolver: zodResolver(SignupSchema),
  // });

  // const { actions, state } = useStateMachine();

  // const next = async () => {
  //   const fields = steps[index.current].fields;

  //   const output = await form.trigger(fields as FormField[]);

  //   const values = form.getValues();

  //   actions.updateProducts(values);

  //   if (!output) return;

  //   if (index.current < steps.length) {
  //     if (index.current === steps.length - 1) {
  //       setIsLoading(true);

  //       await new Promise((resolve) => setTimeout(resolve, 2000));

  //       setIsLoading(false);

  //       // try {
  //       //   await register(state);
  //       //   console.log("successful");
  //       // } catch (error) {
  //       //   console.error(error);
  //       // } finally {
  //       //   setIsLoading(false);
  //       // }

  //       return;
  //     }

  //     setIndex((prev) => ({
  //       current: prev.current + 1,
  //       delta: true,
  //     }));
  //   }
  // };

  // const prev = () => {
  //   if (index.current > 0) {
  //     setIndex((prev) => ({
  //       current: prev.current - 1,
  //       delta: false,
  //     }));
  //   }
  // };

  // const CurrentForm = steps[index.current].form;

  return (
    <main>
      {/* <div className="px-4 relative flex justify-center items-center">
        {index.current > 0 && (
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 left-4"
            onClick={prev}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
        )}
        <Link href="/">
          <Image
            src="/Takaful-logo.png"
            alt="Takaful Logo"
            width={50}
            height={50}
            className="my-5"
          />
        </Link>
      </div>

      <div className="container text-center pb-10">
        <h1 className="font-bold text-3xl mb-5">
          {steps[index.current].title}
        </h1>
        <p className="text-black/70 text-sm">
          {steps[index.current].description}
        </p>
      </div> */}

      {/* <div className="container pb-5 overflow-x-hidden">
        <Form {...form}>
          <form className="flex flex-col gap-5">
            <motion.div
              key={index.current}
              initial={
                index.delta ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }
              }
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              <CurrentForm form={form} defaultValues={state} />
              <div />
            </motion.div>
            <Button
              className="w-full max-w-[30rem] mt-6 mx-auto"
              size="lg"
              onClick={!isLoading ? next : () => {}}
              type="button"
              disabled={isLoading}
            >
              {isLoading ? <LoaderIcon className="animate-spin" /> : "Next"}
            </Button>
          </form>
        </Form>
      </div> */}
    </main>
  );
}
