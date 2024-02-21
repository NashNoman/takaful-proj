"use client";

import { StateMachineProvider, createStore } from "little-state-machine";

type Props = {
  children: React.ReactNode;
};

createStore(
  {
    formData: {
      products: {},
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "+967",
      password: "",
      confirmPassword: "",
      city: "",
      street: "",
      dateOfBirth: new Date(2000, 0),
      gender: "Male",
      occupation: "",
      sourceOfIncome: "Salary",
      avgIncome: 0,
      ssn: "",
    },
  },
  {
    persist: "beforeUnload",
    name: "signupForm",
  },
);

export default function SignupStateProvider({ children }: Props) {
  return <StateMachineProvider>{children}</StateMachineProvider>;
}
