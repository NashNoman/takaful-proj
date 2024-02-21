import { z } from "zod";

export const healthCareSchema = z
  .object({
    medicalHistory: z.string().min(1, "Required"),
    currentMedication: z.string().optional(),
    hasDisability: z.boolean(),
    disability: z.string().min(1, "Required").optional(),
    hasAllergies: z.boolean(),
    allergies: z.string().min(1, "Required").optional(),
    isSmoking: z.boolean(),
    numberOfDependents: z.coerce.number().int().min(0),
    hasChronicDisease: z.boolean(),
    chronicDisease: z.string().min(1, "Required").optional(),
    yearOfDiagnosis: z.date().optional(),
  })
  .superRefine((data) => {
    if (data.hasChronicDisease === false) {
      return {
        chronicDisease: z.string().optional(),
        yearOfDiagnosis: z.coerce.number().int().optional(),
      };
    }
    if (data.hasDisability === false) {
      return {
        disability: z.string().optional(),
      };
    }
    if (data.hasAllergies === false) {
      return {
        allergies: z.string().optional(),
      };
    }
    return {};
  });

export type HealthCareInputs = z.infer<typeof healthCareSchema>;

export const motorcycleSchema = z.object({
  make: z.string().min(1, "Required"),
  model: z.string().min(1, "Required"),
  year: z.coerce.number().int().min(1900).max(2023),
  vin: z.string().min(1, "Required"),
  licensePlate: z.string().min(1, "Required"),
  yearsOfExperience: z.coerce.number().int().min(0),
  primaryUse: z.enum(["commute", "pleasure", "business"]),
  averageDailyDistance: z.coerce.number().int().min(0),
  hasTrafficHistory: z.boolean(),
  yearsOfOwnership: z.coerce.number().int().min(0),
});

export type MotorcycleInputs = z.infer<typeof motorcycleSchema>;

export const miniVanSchema = z.object({
  make: z.string().min(1, "Required"),
  model: z.string().min(1, "Required"),
  year: z.coerce.number().int().min(1900).max(2023),
  vin: z.string().min(1, "Required"),
  licensePlate: z.string().min(1, "Required"),
  yearsOfExperience: z.coerce.number().int().min(0),
  engineSize: z.coerce.number().int().min(0),
  primaryUse: z.enum(["commute", "pleasure", "business", "school"]),
  averageDailyDistance: z.coerce.number().int().min(0),
  hasTrafficHistory: z.boolean(),
  yearsOfOwnership: z.coerce.number().int().min(0),
});

export type MiniVanInputs = z.infer<typeof miniVanSchema>;

export const miniTruckSchema = z.object({
  make: z.string().min(1, "Required"),
  model: z.string().min(1, "Required"),
  year: z.coerce.number().int().min(1900).max(2023),
  vin: z.string().min(1, "Required"),
  licensePlate: z.string().min(1, "Required"),
  registrationNumber: z.string().min(1, "Required"),
  carryingCapacity: z.coerce.number().int().min(0),
  typeOfGoods: z.string().min(1, "Required"),
  yearsOfExperience: z.coerce.number().int().min(0),
  engineSize: z.coerce.number().int().min(0),
  primaryUse: z.enum(["commute", "pleasure", "business", "school"]),
  averageDailyDistance: z.coerce.number().int().min(0),
  hasTrafficHistory: z.boolean(),
  yearsOfOwnership: z.coerce.number().int().min(0),
});

export type MiniTruckInputs = z.infer<typeof miniTruckSchema>;
