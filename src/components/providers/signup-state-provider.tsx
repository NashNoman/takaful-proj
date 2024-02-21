"use client";

import { StateMachineProvider, createStore } from "little-state-machine";

const storage = {};

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
    policies: {
      healthcare: {
        medicalHistory: "",
        currentMedication: "",
        hasChronicDisease: false,
        chronicDisease: "",
        yearOfDiagnosis: undefined,
        hasDisability: false,
        disability: "",
        hasAllergies: false,
        allergies: "",
        isSmoking: false,
        numberOfDependents: 0,
      },
      motorcycle: {
        make: "",
        model: "",
        year: 0,
        vin: "",
        licensePlate: "",
        yearsOfExperience: 0,
        primaryUse: "commute",
        averageDailyDistance: 0,
        hasTrafficHistory: false,
        yearsOfOwnership: 0,
      },
      miniVan: {
        make: "",
        model: "",
        year: 0,
        vin: "",
        licensePlate: "",
        yearsOfExperience: 0,
        primaryUse: "commute",
        averageDailyDistance: 0,
        hasTrafficHistory: false,
        yearsOfOwnership: 0,
        engineSize: 0,
      },
      miniTruck: {
        make: "",
        model: "",
        year: 0,
        vin: "",
        licensePlate: "",
        registrationNumber: "",
        carryingCapacity: 0,
        typeOfGoods: "",
        yearsOfExperience: 0,
        engineSize: 0,
        primaryUse: "commute",
      },
    },
  },
  {
    name: "signupForm",
  },
);

export default function SignupStateProvider({ children }: Props) {
  return <StateMachineProvider>{children}</StateMachineProvider>;
}
