import { SignupInputs } from "@/lib/zod/signup-schema";

interface Window {
  recaptchaVerifier: RecaptchaVerifier | undefined;
  confirmationResult: ConfirmationResult | undefined;
}

declare module "little-state-machine" {
  interface GlobalState {
    formData: SignupInputs;
  }
}

type User = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  role: string;
};
