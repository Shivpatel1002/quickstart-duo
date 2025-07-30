<<<<<<< HEAD
import { clsx, type ClassValue } from "clsx"
=======

import { type ClassValue, clsx } from "clsx"
>>>>>>> 3c2fbf34177ea51725a1f011d5616a8278f36b8a
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
