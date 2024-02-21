"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import React, { useState } from "react";
import useMultiStepForm from "@/hooks/use-multi-step-form";
import {
  HealthCareInputs,
  healthCareSchema,
} from "@/lib/zod/register-policy-schema";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import FormInputField from "@/components/forms/ui/form-input-field";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, LoaderIcon } from "lucide-react";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardContent } from "@mui/material";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { GlobalState } from "little-state-machine";

const steps = [
  {
    title: "Let's prepare your healthcare insurance!",
    description: "Let's get started with your healthcare plan",
    fields: ["medicalHistory"],
    form: MedicalHistoryForm,
  },
  {
    title: "Let's prepare your healthcare insurance!",

    description: "Let's get started with your healthcare plan",
    fields: ["hasDisability", "disability"],
    form: DisabilityForm,
  },
  {
    title: "Let's prepare your healthcare insurance!",

    description: "Let's get started with your healthcare plan",
    fields: ["hasAllergies", "allergies"],
    form: AllergiesForm,
  },
  {
    title: "Let's prepare your healthcare insurance!",

    description: "Let's get started with your healthcare plan",
    fields: ["hasChronicDisease", "chronicDisease", "yearOfDiagnosis"],
    form: ChronicDiseaseForm,
  },
  {
    title: "Let's prepare your healthcare insurance!",

    description: "Let's get started with your healthcare plan",
    fields: ["isSmoking", "numberOfDependents"],
    form: FamilyForm,
  },
  {
    title: "Almost done!",
    description: "Choose your preferred coverage",
    fields: [],
    form: ChoosePlanForm,
  },
];

const updateState = (state: any, payload: any) => {
  return {
    ...state,
    policies: {
      ...state.policies,
      healthcare: {
        ...state.policies.healthcare,
        ...payload,
      },
    },
  };
};

export default function HealthCareForm() {
  const router = useRouter();

  const onSubmit = async (data: GlobalState) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    localStorage.setItem("details", JSON.stringify(data));
    router.push("/app");
  };

  const { form, currentIndex, prev, next, isLoading, delta, state } =
    useMultiStepForm<HealthCareInputs>({
      steps,
      schema: healthCareSchema,
      onSubmit,
      updateState,
    });

  const CurrentForm = steps[currentIndex].form;

  return (
    <>
      <div className="px-4 py-4 mb-4 relative flex justify-center items-center">
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
        <p className="font-bold">Healthcare</p>
      </div>

      <div className="container text-center pb-10">
        <h1 className="font-bold text-3xl mb-5">{steps[currentIndex].title}</h1>
        <p className="text-black/70 text-sm">
          {steps[currentIndex].description}
        </p>
      </div>

      <div className="container">
        <Form {...form}>
          <form className="flex flex-col gap-5">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: delta ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {
                <CurrentForm
                  form={form}
                  defaultValues={state.policies.healthcare}
                />
              }
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

function MedicalHistoryForm({
  form,
  defaultValues,
}: {
  form: UseFormReturn<HealthCareInputs>;
  defaultValues: HealthCareInputs;
}) {
  return (
    <>
      <FormInputField
        form={form}
        label="Medical History"
        name="medicalHistory"
        defaultValue={defaultValues}
        description="Briefly list any existing or ongoing medical conditions."
        render={(field) => <Textarea className="resize-none" {...field} />}
      />
      <FormInputField
        form={form}
        label="Current Medication (Optional)"
        name="currentMedication"
        defaultValue={defaultValues}
        description="List any type of medications your are currently going through [if there are any]."
        render={(field) => <Textarea className="resize-none" {...field} />}
      />
    </>
  );
}

function DisabilityForm({
  form,
  defaultValues,
}: {
  form: UseFormReturn<HealthCareInputs>;
  defaultValues: HealthCareInputs;
}) {
  const [showTextarea, setShowTextarea] = useState(false);

  return (
    <>
      <FormInputField
        form={form}
        label="Do you suffer from any disabilities?"
        name="hasDisability"
        defaultValue={defaultValues}
        render={(field) => (
          <RadioGroup
            onValueChange={(data) => {
              setShowTextarea(data === "true");
              field.onChange(data === "true");
            }}
            value={
              field.value || defaultValues.hasDisability ? "true" : "false"
            }
          >
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="true" />
              </FormControl>
              <FormLabel className="font-normal">Yes</FormLabel>
            </FormItem>
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="false" />
              </FormControl>
              <FormLabel className="font-normal">No</FormLabel>
            </FormItem>
          </RadioGroup>
        )}
      />

      {showTextarea && (
        <FormInputField
          form={form}
          label="Disability"
          name="disability"
          defaultValue={defaultValues}
          description="Briefly describe your disability."
          render={(field) => <Textarea className="resize-none" {...field} />}
        />
      )}
    </>
  );
}

function AllergiesForm({
  form,
  defaultValues,
}: {
  form: UseFormReturn<HealthCareInputs>;
  defaultValues: HealthCareInputs;
}) {
  const [showTextarea, setShowTextarea] = useState(false);

  return (
    <>
      <FormInputField
        form={form}
        label="Do you suffer from any allergies?"
        name="hasAllergies"
        defaultValue={defaultValues}
        render={(field) => (
          <RadioGroup
            onValueChange={(data) => {
              setShowTextarea(data === "true");
              field.onChange(data === "true");
            }}
            value={field.value || defaultValues.hasAllergies ? "true" : "false"}
          >
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="true" />
              </FormControl>
              <FormLabel className="font-normal">Yes</FormLabel>
            </FormItem>
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="false" />
              </FormControl>
              <FormLabel className="font-normal">No</FormLabel>
            </FormItem>
          </RadioGroup>
        )}
      />

      {showTextarea && (
        <FormInputField
          form={form}
          label="Allergies"
          name="allergies"
          defaultValue={defaultValues}
          description="Briefly list any allergies you have."
          render={(field) => <Textarea className="resize-none" {...field} />}
        />
      )}
    </>
  );
}

function ChronicDiseaseForm({
  form,
  defaultValues,
}: {
  form: UseFormReturn<HealthCareInputs>;
  defaultValues: HealthCareInputs;
}) {
  const [showTextarea, setShowTextarea] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputField
        form={form}
        label="Do you suffer from any chronic diseases?"
        name="hasChronicDisease"
        defaultValue={defaultValues}
        render={(field) => (
          <RadioGroup
            onValueChange={(data) => {
              setShowTextarea(data === "true");
              field.onChange(data === "true");
            }}
            value={
              field.value || defaultValues.hasChronicDisease ? "true" : "false"
            }
          >
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="true" />
              </FormControl>
              <FormLabel className="font-normal">Yes</FormLabel>
            </FormItem>
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="false" />
              </FormControl>
              <FormLabel className="font-normal">No</FormLabel>
            </FormItem>
          </RadioGroup>
        )}
      />

      {showTextarea && (
        <>
          <FormInputField
            form={form}
            label="Chronic Disease"
            name="chronicDisease"
            defaultValue={defaultValues}
            description="Briefly list any chronic diseases you have."
            render={(field) => <Textarea className="resize-none" {...field} />}
          />
          <FormInputField
            defaultValue={defaultValues}
            form={form}
            label="Year of Diagnosis"
            name="yearOfDiagnosis"
            render={(field: any) => (
              <MobileDatePicker
                className="w-full"
                {...field}
                value={dayjs(field.value || defaultValues.yearOfDiagnosis)}
                defaultValue={dayjs(
                  field.value || defaultValues.yearOfDiagnosis,
                )}
              />
            )}
          />
        </>
      )}
    </LocalizationProvider>
  );
}

function FamilyForm({
  form,
  defaultValues,
}: {
  form: UseFormReturn<HealthCareInputs>;
  defaultValues: HealthCareInputs;
}) {
  return (
    <>
      <FormInputField
        form={form}
        label="Do you smoke?"
        name="isSmoking"
        defaultValue={defaultValues}
        render={(field) => (
          <RadioGroup
            onValueChange={field.onChange}
            value={field.value || defaultValues.hasAllergies ? "true" : "false"}
          >
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="true" />
              </FormControl>
              <FormLabel className="font-normal">Yes</FormLabel>
            </FormItem>
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="false" />
              </FormControl>
              <FormLabel className="font-normal">No</FormLabel>
            </FormItem>
          </RadioGroup>
        )}
      />

      <FormInputField
        form={form}
        label="Number of Dependents"
        name="numberOfDependents"
        type="number"
        description="How many dependents do you have in your family?"
        defaultValue={defaultValues}
      />
    </>
  );
}

function ChoosePlanForm({
  form,
  defaultValues,
}: {
  form: UseFormReturn<HealthCareInputs>;
  defaultValues: HealthCareInputs;
}) {
  const [additionalCoverage, setAdditionalCoverage] = useState([
    {
      id: 1,
      name: "Hospitalization coverage",
      desc: "Covers hospital stays and surgeries up to 50% only.",
      isChecked: false,
      price: 5,
    },
    {
      id: 2,
      name: "Medication",
      desc: "Any medications are 50% covered.",
      isChecked: false,
      price: 5,
    },
  ]);

  const handleSelect = (id: number) => {
    const updatedCoverage = additionalCoverage.map((cov) => {
      if (cov.id === id) {
        cov.isChecked = !cov.isChecked;
      }
      return cov;
    });
    setAdditionalCoverage(updatedCoverage);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex justify-between">
            <span>Basic Plan</span>
            <span className="font-thin text-base">$10/MO</span>
          </CardTitle>
          <CardDescription>
            The following is the basic coverage plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc ml-5 flex flex-col gap-2">
            <li>
              <span className="font-bold">Outpatient coverage:</span> Covers
              doctors consultations, medications, and diagnostic tests.
            </li>
            <li>
              <span className="font-bold">Accident insurance:</span> Provides
              lump sum payouts in case of accidental injuries.
            </li>
            <li>
              <span className="font-bold">Critical illness coverage:</span>{" "}
              Offers financial support in case of diagnosed critical illness.
            </li>
          </ul>
        </CardContent>
      </Card>
      <h3 className="mt-4 font-semibold">Additional coverage:</h3>
      {additionalCoverage.map((cov) => {
        return (
          <Card
            key={cov.id}
            className={
              cov.isChecked ? "border-primary" : "bg-gray-200 text-gray-500"
            }
            // onClick={() => handleSelect(cov.id)}
          >
            <CardHeader>
              <CardTitle className="text-base">
                <div className="flex gap-3 items-start">
                  <Checkbox
                    checked={cov.isChecked}
                    onClick={() => handleSelect(cov.id)}
                  />
                  <p>
                    {cov.name}: <span className="font-normal">{cov.desc}</span>
                  </p>
                  <p>+${cov.price}/MO</p>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        );
      })}
      {/* <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            Healthcare{" "}
            <span className="text-sm font-normal float-end">$5/MO</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2 font-medium">
            <li className="flex gap-1 items-center">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <p>Outpatient coverage</p>
            </li>
            <li className="flex gap-1 items-center">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <p>Accident insurance</p>
            </li>
          </ul>
        </CardContent>
      </Card> */}
    </>
  );
}
