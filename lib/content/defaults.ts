import { carsContent } from "./cars";
import { contacto, home, modelos, sobre, visita } from "./pages";
import { site } from "./site";

export const defaultContent = {
  site,
  home,
  sobre,
  modelos,
  contacto,
  visita,
  cars: carsContent,
} as const;

