"use client";

import FormWrapper from "@/components/FormWrapper";
import {
  CredentialsInfo,
  LocationInfo,
  PersonalInfo,
} from "@/components/signup-info-form";
import { useEffect, useRef, useState } from "react";
import { SignupInputs, SignupSchema } from "@/lib/signup-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "@/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OtpInput from "react-otp-input";
import { set } from "firebase/database";

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

export default function Signup() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    control,
    formState: { errors },
  } = useForm<SignupInputs>({
    resolver: zodResolver(SignupSchema),
  });

  // useEffect(() => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     auth,
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //       callback: (response: string) => {
  //         console.log(response);
  //         // onSignup();
  //       },
  //       "expire-callback": () => {},
  //     },
  //   );

  //   return () => {
  //     window.recaptchaVerifier.clear();
  //   };
  // }, []);

  const next = async () => {
    const fields = steps[currentIndex].fields;
    const isValid = await trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    // if (!isValid) return;

    if (currentIndex === 2) {
      onSignup();
      return;
    }

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

  const onSignup = () => {
    if (!window.recaptchaVerifier)
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response: string) => {
            console.log(response);
            // onSignup();
          },
          "expire-callback": () => {},
        },
      );

    setLoading(true);
    const { phone } = getValues();
    const phoneNumber = `+${phone}`;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("Success");
        setShowOTP(true);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onOTPVerify = () => {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result: any) => {
        console.log(result);
        setShowOTP(false);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  if (otp.length === 6) {
    onOTPVerify();
  }

  const Form = steps[currentIndex].form;

  return (
    <main>
      <FormWrapper
        title={steps[currentIndex].title}
        description={steps[currentIndex].description}
      >
        {showOTP ? (
          <>
            <OtpInput
              onChange={setOtp}
              value={otp}
              numInputs={6}
              inputStyle={{
                width: "50px",
                height: "50px",
                margin: "0 10px",
                fontSize: "24px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                color: "black",
              }}
              renderInput={(props) => <input {...props} />}
            />
          </>
        ) : (
          <Form register={register} errors={errors} controller={control} />
        )}
        <div id="recaptcha-container"></div>
        <button
          type="button"
          className="fixed bottom-5 rounded-md w-52 right-5 bg-gray-600 text-white p-3"
          onClick={next}
          disabled={loading}
          id={currentIndex === 2 ? "finish-button" : ""}
        >
          {loading
            ? "Loading"
            : currentIndex < steps.length - 1
              ? "Next"
              : "Finish"}
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
