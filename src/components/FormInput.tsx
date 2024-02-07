import React, { HTMLInputTypeAttribute } from "react";

type FormInputProps = {
  label: string;
  register: any;
  errors: any;
  name?: string;
  type?: HTMLInputTypeAttribute;
};

const validate = (label: string, name: string) => {
  if (label.indexOf(" ") > -1 && !name) {
    throw new Error("'name' prop is required if label contains space.");
  }
};

export default function FormInput({
  label,
  type,
  name,
  register,
  errors,
}: FormInputProps) {
  validate(label, name!);

  name = name || label.toLowerCase();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        className="p-1 outline outline-gray-300 outline-2 rounded-sm focus-within:outline-black"
        type={type || "text"}
        id={name}
        name={name}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="on"
        {...register(name)}
      />
      {errors[name]?.message && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}
