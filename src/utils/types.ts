export type ObjectValues<T> = T[keyof T]
export const FontWeight = {
  Thin: "100",
  "Extra Light": "200",
  Light: "300",
  Regular: "400",
  Medium: "500",
  "Semi Bold": "600",
  Bold: "700",
  "Extra Bold": "800",
  Black: "900",
} as const
