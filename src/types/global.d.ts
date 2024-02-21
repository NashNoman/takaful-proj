import {
  HealthCareInputs,
  MiniVanInputs,
  MotorcycleInputs,
} from "@/lib/zod/register-policy-schema";
import { SignupInputs } from "@/lib/zod/signup-schema";

interface Window {
  recaptchaVerifier: RecaptchaVerifier | undefined;
  confirmationResult: ConfirmationResult | undefined;
}

declare module "little-state-machine" {
  interface GlobalState {
    formData: SignupInputs;
    policies: {
      healthcare: HealthCareInputs;
      motorcycle: MotorcycleInputs;
      miniVan: MiniVanInputs;
      miniTruck: MiniTruckInputs;
    };
  }
}

type User = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  role: string;
};
