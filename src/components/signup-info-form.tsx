import FormInput from "@/components/FormInput";
import { Controller } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type InfoFormProps = {
  register: any;
  errors: any;
  controller?: any;
};

export function PersonalInfo({ register, errors }: InfoFormProps) {
  return (
    <>
      <FormInput
        label="First Name"
        name="firstName"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Middle Name"
        name="middleName"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Last Name"
        name="lastName"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Date of Birth"
        type="date"
        name="dateOfBirth"
        register={register}
        errors={errors}
      />
      <div className="flex flex-col gap-1">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          className="outline rounded-sm outline-gray-300 p-1 focus:outline-black"
          {...register("gender")}
        >
          <option>Select gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        {errors.gender?.message && (
          <p className="text-red-500 text-sm">Please specify your gender</p>
        )}
      </div>
    </>
  );
}

export function LocationInfo({ register, errors }: InfoFormProps) {
  return (
    <>
      <FormInput label="Governorate" register={register} errors={errors} />
      <FormInput label="City" register={register} errors={errors} />
      <FormInput label="Street" register={register} errors={errors} />
    </>
  );
}

export function CredentialsInfo({
  register,
  errors,
  controller,
}: InfoFormProps) {
  return (
    <>
      <PhoneNumberInput errors={errors} controller={controller} />
      <FormInput
        label="Email Address (optional)"
        name="email"
        type="email"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Password"
        type="password"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        register={register}
        errors={errors}
      />
    </>
  );
}

export function PhoneNumberInput({
  errors,
  controller,
}: {
  errors: any;
  controller: any;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="phone">Phone Number</label>
      <Controller
        control={controller}
        name="phone"
        render={({ field }) => (
          <PhoneInput
            {...field}
            country="ye"
            containerClass="w-full"
            inputClass="!w-full"
          />
        )}
      />
      {errors.phone?.message && (
        <p className="text-red-500 text-sm">{errors.phone.message}</p>
      )}
    </div>
  );
}
