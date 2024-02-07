import FormInput from "@/components/FormInput";

type InfoFormProps = {
  register: any;
  errors: any;
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

export function CredentialsInfo({ register, errors }: InfoFormProps) {
  return (
    <>
      <FormInput
        label="Phone Number"
        name="phone"
        type="number"
        register={register}
        errors={errors}
      />
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
        type="password"
        name="confirmPassword"
        register={register}
        errors={errors}
      />
    </>
  );
}
