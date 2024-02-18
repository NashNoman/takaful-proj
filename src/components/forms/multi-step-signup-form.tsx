"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PRODUCTS } from "@/constants/products";
import { SignupInputs, SignupSchema } from "@/lib/zod/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormInputField from "@/components/forms/ui/form-input-field";
import { toast } from "sonner";
import { subYears } from "date-fns";

const steps = [
  {
    title: "What type of insurance are you looking for?",
    description: "Include multiple products to benefit from package discounts",
    fields: ["products"],
    form: ProductSelectForm,
  },
  {
    title: "Let's get to know you!",
    description:
      "Please write your details as it appears on your government ID card or driver's license",
    fields: ["firstName", "middleName", "lastName"],
    form: PersonalInfo,
  },
  {
    title: "Let's get to know you!",
    description:
      "Please write your details as it appears on your government ID card or driver's license",
    fields: ["dateOfBirth", "gender"],
    form: PersonalInfoContd,
  },
  {
    title: "Where do you live?",
    description: "Make sure to provide the location of your primary residence",
    fields: ["city", "street"],
    form: LocationInfo,
  },
  {
    title: "Tell us about your work",
    description: "Please provide your occupation and source of income",
    fields: ["occupation", "sourceOfIncome", "avgIncome"],
    form: OccupationInfo,
  },
  {
    title: "Help us verify its You!",
    description: "Make sure to enter your primary phone number and email",
    fields: ["phoneNumber", "email", "password", "confirmPassword"],
    form: CredentialsInfo,
  },
];

type FormField = keyof SignupInputs;

export default function MultiStepSignupForm() {
  const [index, setIndex] = useState({
    current: 0,
    delta: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignupInputs>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (data: SignupInputs) => {
    console.log(data);
    setIsLoading(false);
  };

  const next = async () => {
    const fields = steps[index.current].fields;

    const output = await form.trigger(fields as FormField[]);

    if (!output) return;

    if (index.current < steps.length - 1) {
      if (index.current === steps.length - 1) {
        setIsLoading(true);
        form
          .handleSubmit(onSubmit)()
          .then(() => {
            // setIsLoading(false);
          })
          .catch(() => {
            toast("Something went wrong", {
              className: "bg-red-500 text-white",
            });
          })
          .finally(() => {
            setIsLoading(false);
          });
      }

      setIndex((prev) => ({
        current: prev.current + 1,
        delta: true,
      }));
    }
  };

  const prev = () => {
    if (index.current > 0) {
      setIndex((prev) => ({
        current: prev.current - 1,
        delta: false,
      }));
    }
  };

  const CurrentForm = steps[index.current].form;

  return (
    <>
      <div className="px-4 relative flex justify-center items-center">
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
      </div>

      {/* Form Start */}

      <div className="container pb-5 overflow-x-hidden">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <motion.div
              key={index.current}
              initial={
                index.delta ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }
              }
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              <CurrentForm form={form} />
            </motion.div>
          </form>
          <Button
            className="w-full max-w-[30rem] mt-6 mx-auto"
            size="lg"
            onClick={!isLoading ? next : () => {}}
            type="button"
            // disabled={index.current === steps.length - 1}
          >
            Next
          </Button>
        </Form>
      </div>
    </>
  );
}

function ProductSelectForm({ form }: { form: UseFormReturn<SignupInputs> }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 pt-1">
        {PRODUCTS.map(({ image, name, id }) => (
          <FormField
            key={id}
            control={form.control}
            name="products"
            render={({ field }) => (
              <FormItem key={id}>
                <FormLabel htmlFor={`products.${name}`}>
                  <FormControl>
                    <Card
                      className={cn(
                        "shadow-md cursor-pointer opacity-50 border-none outline outline-border transition-all",
                        field.value?.[name as keyof typeof field.value] &&
                          "opacity-100 outline-primary outline-[3px]",
                      )}
                    >
                      <CardContent className="flex flex-col items-center justify-center gap-3 pt-4">
                        <Image
                          src={image}
                          alt="product"
                          width={120}
                          height={120}
                        />
                        <p className="font-semibold text-lg">{name}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-center">
                        <Checkbox
                          className="h-5 w-5"
                          id={`products.${name}`}
                          checked={
                            field.value?.[name as keyof typeof field.value]
                          }
                          onCheckedChange={(checked: boolean) => {
                            field.onChange({
                              ...field.value,
                              [name]: checked,
                            });
                          }}
                        />
                      </CardFooter>
                    </Card>
                  </FormControl>
                </FormLabel>
              </FormItem>
            )}
          />
        ))}
      </div>
      {form.formState.errors.products?.message && (
        <p className="text-red-500 text-sm text-center mt-2">
          Please select at least one product
        </p>
      )}
    </>
  );
}

function PersonalInfo({ form }: { form: UseFormReturn<SignupInputs> }) {
  return (
    <>
      <FormInputField
        form={form}
        label="First Name"
        name="firstName"
        autoFocus
      />
      <FormInputField form={form} label="Middle Name" name="middleName" />
      <FormInputField form={form} label="Last Name" name="lastName" />
    </>
  );
}

function PersonalInfoContd({ form }: { form: UseFormReturn<SignupInputs> }) {
  return (
    <>
      <FormInputField
        form={form}
        label="Date of Birth"
        name="dateOfBirth"
        render={(field) => (
          <DatePicker
            className="w-full"
            value={field.value}
            onChange={(date) => {
              field.onChange(date);
            }}
          />
        )}
      />
      <FormInputField
        form={form}
        label="Gender"
        name="gender"
        render={(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"Male"}>Male</SelectItem>
              <SelectItem value={"Female"}>Female</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
    </>
  );
}

function LocationInfo({ form }: { form: UseFormReturn<SignupInputs> }) {
  return (
    <>
      <FormInputField form={form} label="City" name="city" autoFocus />
      <FormInputField form={form} label="Street" name="street" />
    </>
  );
}

function OccupationInfo({ form }: { form: UseFormReturn<SignupInputs> }) {
  return (
    <>
      <FormInputField
        form={form}
        label="Occupation"
        name="occupation"
        autoFocus
      />
      <FormInputField
        form={form}
        label="Source of Income"
        name="sourceOfIncome"
        render={(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Select source of income" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"Salary"}>Salary</SelectItem>
              <SelectItem value={"Business"}>Business</SelectItem>
              <SelectItem value={"Other"}>Other</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      <FormInputField
        form={form}
        type="number"
        label="Average Income"
        name="avgIncome"
      />
    </>
  );
}

function CredentialsInfo({ form }: { form: UseFormReturn<SignupInputs> }) {
  return (
    <>
      <FormInputField
        form={form}
        label="Social Security Number (SSN)"
        name="ssn"
        autoFocus
      />
      <FormInputField form={form} label="Phone Number" name="phoneNumber" />
      <FormInputField
        form={form}
        label="Email Address (optional)"
        name="email"
        render={(field) => <Input {...field} type="email" />}
      />
      <FormInputField form={form} label="Password" name="password" />
      <FormInputField
        form={form}
        label="Confirm Password"
        name="confirmPassword"
      />
    </>
  );
}
