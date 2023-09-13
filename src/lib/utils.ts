import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const serializeParams = (obj: Record<string, string>) => {
  return new URLSearchParams(obj).toString()
}
