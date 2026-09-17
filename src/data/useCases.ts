import { animalWellbeingUseCase } from "./AnimalWellbeingUseCase";
import { cropsValidationUseCase } from "./CropsValidationUseCase";
import { netPigUseCase } from "./NetPigUseCase";
import { plantProtectionUseCase } from "./PlantProtectionUseCase";
import { precisionLivestockUseCase } from "./PrecisionLivestockUseCase";
import { sensorsUseCase } from "./SensorsUseCase";
import { soilTestsUseCase } from "./SoilTestsUseCase";
import type { UseCaseData } from "./AnimalWellbeingUseCase";

export interface UseCaseInfo {
  id: string;
  title: string;
  description: string;
  data: UseCaseData;
}

export const useCases: UseCaseInfo[] = [
  {
    id: "animal-wellbeing",
    title: "Animal Wellbeing",
    description: "Computer vision monitoring of pig behavior for animal welfare assessment",
    data: animalWellbeingUseCase,
  },
  {
    id: "crops-validation",
    title: "Crops Validation",
    description: "Independent validation of fruit-detection computer vision models",
    data: cropsValidationUseCase,
  },
  {
    id: "net-pig",
    title: "NetPig",
    description: "Network-based pig farming optimization using data spaces",
    data: netPigUseCase,
  },
  {
    id: "plant-protection",
    title: "Plant Protection",
    description: "Data-driven plant protection and pest management",
    data: plantProtectionUseCase,
  },
  {
    id: "precision-livestock",
    title: "Precision Livestock",
    description: "Precision livestock farming with sensor data integration",
    data: precisionLivestockUseCase,
  },
  {
    id: "sensors",
    title: "Sensors",
    description: "IoT sensor data integration for agricultural monitoring",
    data: sensorsUseCase,
  },
  {
    id: "soil-tests",
    title: "Soil Tests",
    description: "Soil analysis and testing for optimized crop management",
    data: soilTestsUseCase,
  },
];

export function getUseCaseById(id: string): UseCaseInfo | undefined {
  return useCases.find((uc) => uc.id === id);
}

export function getAllUseCaseIds(): string[] {
  return useCases.map((uc) => uc.id);
}