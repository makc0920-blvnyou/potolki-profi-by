import { CEILING_TYPES, CITIES, LIGHT_PRICE } from "./data";

export interface CalculatorParams {
  ceilingTypeId: string;
  area: number;
  lightsCount: number;
  cityId: string;
}

export function calculatePrice(params: CalculatorParams): number {
  const ceiling = CEILING_TYPES.find((t) => t.id === params.ceilingTypeId);
  const city = CITIES.find((c) => c.id === params.cityId);

  if (!ceiling || !city) return 0;

  const base = params.area * ceiling.pricePerM2 + params.lightsCount * LIGHT_PRICE;
  return Math.round(base * city.coefficient);
}
