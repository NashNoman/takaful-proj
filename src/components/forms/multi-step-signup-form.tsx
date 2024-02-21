"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormInputField from "@/components/forms/ui/form-input-field";
import { useStateMachine } from "little-state-machine";
import { register } from "@/lib/actions/auth";
import { LoaderIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import dayjs from "dayjs";
import useMultiStepForm from "@/hooks/use-multi-step-form";
import { toast } from "sonner";

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
    fields: ["ssn", "phoneNumber", "email", "password", "confirmPassword"],
    form: CredentialsInfo,
  },
];

const updateProducts = (state: any, payload: any) => {
  return {
    ...state,
    formData: {
      ...state.formData,
      ...payload,
    },
  };
};

type FormField = keyof SignupInputs;

export default function MultiStepSignupForm() {
  // const [index, setIndex] = useState({
  //   current: 0,
  //   delta: true,
  // });
  // const [isLoading, setIsLoading] = useState(false);

  // const form = useForm<SignupInputs>({
  //   resolver: zodResolver(SignupSchema),
  // });

  // const {
  //   actions,
  //   state: { formData },
  // } = useStateMachine({ updateProducts });

  // const next = async () => {
  //   const fields = steps[index.current].fields;

  //   const output = await form.trigger(fields as FormField[]);

  //   const values = form.getValues();

  //   actions.updateProducts(values);

  //   if (!output) return;

  //   if (index.current < steps.length) {
  //     if (index.current === steps.length - 1) {
  //       if (values.password !== values.confirmPassword) {
  //         form.setError("confirmPassword", {
  //           type: "manual",
  //           message: "Passwords do not match",
  //         });
  //         return;
  //       }

  //       setIsLoading(true);

  //       await new Promise((resolve) => setTimeout(resolve, 2000));

  //       setIsLoading(false);

  //       try {
  //         const res = await register(formData);

  //         if (res?.error) {
  //           console.error(res.error);
  //           return;
  //         }

  //         console.log("successful");

  //         await signIn("credentials", {
  //           phoneOrEmail: formData.phoneNumber,
  //           password: formData.password,
  //           callbackUrl: "/signup/package",
  //         });
  //       } catch (error) {
  //         console.error(error);
  //       } finally {
  //         setIsLoading(false);
  //       }

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

  const onSubmit = async (values: SignupInputs) => {
    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    const res = await register(values);

    if (!res?.error) {
      await signIn("credentials", {
        phoneOrEmail: values.phoneNumber,
        password: values.password,
        callbackUrl: "/signup/package",
      });
      return;
    }

    console.error(res.error);

    if (Array.isArray(res.error)) {
      toast("An error occurred, please try again", {
        closeButton: true,
        className:
          "bg-destructive text-destructive-foreground border-destructive-foreground",
      });
    } else {
      toast(res.error as string, {
        closeButton: true,
        className:
          "bg-destructive text-destructive-foreground border-destructive-foreground",
      });
    }
  };

  const { currentIndex, next, prev, isLoading, delta, form, state } =
    useMultiStepForm<SignupInputs>({
      steps,
      onSubmit,
      schema: SignupSchema,
      updateState: (state, payload) => {
        return {
          ...state,
          formData: {
            ...state.formData,
            ...payload,
          },
        };
      },
    });

  const CurrentForm = steps[currentIndex].form;

  return (
    <>
      <div className="px-4 relative flex justify-center items-center">
        {currentIndex > 0 && (
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
            width={40}
            height={40}
            className="my-5"
          />
        </Link>
      </div>

      <div className="container text-center pb-10">
        <h1 className="font-bold text-3xl mb-5">{steps[currentIndex].title}</h1>
        <p className="text-black/70 text-sm">
          {steps[currentIndex].description}
        </p>
      </div>

      {/* Form Start */}

      <div className="container pb-5 overflow-x-hidden">
        <Form {...form}>
          <form className="flex flex-col gap-5">
            <motion.div
              key={currentIndex}
              initial={delta ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              <CurrentForm form={form} defaultValues={state.formData} />
            </motion.div>
          </form>
        </Form>
        <Button
          className="w-full max-w-[30rem] mt-6 mx-auto"
          size="lg"
          onClick={!isLoading ? next : () => {}}
          type="button"
          disabled={isLoading}
        >
          {isLoading ? <LoaderIcon className="animate-spin" /> : "Next"}
        </Button>
      </div>
    </>
  );
}

function ProductSelectForm({
  form,
  defaultValues,
}: {
  form: UseFormReturn<SignupInputs>;
  defaultValues: SignupInputs;
}) {
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
                            // actions.updateProducts({ [name]: checked });
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

function PersonalInfo({
  form,
  defaultValues,
}: {
  form: UseFormReturn<SignupInputs>;
  defaultValues: SignupInputs;
}) {
  return (
    <>
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        label="First Name"
        name="firstName"
        autoFocus
      />
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        label="Middle Name"
        name="middleName"
      />
      <FormInputField
        form={form}
        label="Last Name"
        name="lastName"
        defaultValue={defaultValues}
      />
    </>
  );
}

function PersonalInfoContd({
  form,
  defaultValues,
}: {
  form: UseFormReturn<SignupInputs>;
  defaultValues: SignupInputs;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        label="Date of Birth"
        name="dateOfBirth"
        render={(field: any) => (
          <MobileDatePicker
            className="w-full"
            {...field}
            value={dayjs(field.value || defaultValues.dateOfBirth)}
            defaultValue={dayjs(field.value || defaultValues.dateOfBirth)}
          />
        )}
      />
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        label="Gender"
        name="gender"
        render={(field: any) => (
          <Select
            onValueChange={field.onChange}
            // defaultValue={field.value || defaultValues.gender}
            defaultValue={defaultValues.gender}
          >
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
    </LocalizationProvider>
  );
}

function LocationInfo({
  form,
  defaultValues,
}: {
  form: UseFormReturn<SignupInputs>;
  defaultValues: SignupInputs;
}) {
  return (
    <>
      <FormInputField
        form={form}
        label="City"
        name="city"
        defaultValue={defaultValues}
        autoFocus
      />
      <FormInputField
        form={form}
        label="Street"
        name="street"
        defaultValue={defaultValues}
      />
    </>
  );
}

function OccupationInfo({
  form,
  defaultValues,
}: {
  form: UseFormReturn<SignupInputs>;
  defaultValues: SignupInputs;
}) {
  return (
    <>
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        label="Occupation"
        name="occupation"
        autoFocus
      />
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        label="Source of Income"
        name="sourceOfIncome"
        render={(field: any) => (
          <Select
            onValueChange={field.onChange}
            defaultValue={defaultValues.sourceOfIncome}
          >
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
        defaultValue={defaultValues}
        form={form}
        type="number"
        label="Average Income"
        name="avgIncome"
      />
    </>
  );
}

function CredentialsInfo({
  form,
  defaultValues,
}: {
  form: UseFormReturn<SignupInputs>;
  defaultValues: SignupInputs;
}) {
  return (
    <>
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        label="Social Security Number (SSN)"
        name="ssn"
        autoFocus
      />
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        label="Phone Number"
        name="phoneNumber"
        render={(field: any) => (
          <Input
            {...field}
            value={field.value || defaultValues.phoneNumber}
            onChange={(e) => {
              if (e.target.value && !e.target.value.startsWith("+967")) {
                form.setValue("phoneNumber", "+967" + e.target.value);
              }

              field.onChange(e.target.value);
            }}
            type="tel"
            autoComplete="off"
          />
        )}
      />
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        label="Email Address (optional)"
        name="email"
        type="email"
      />
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        type="password"
        label="Password"
        name="password"
      />
      <FormInputField
        defaultValue={defaultValues}
        form={form}
        type="password"
        label="Confirm Password"
        name="confirmPassword"
      />
    </>
  );
}
