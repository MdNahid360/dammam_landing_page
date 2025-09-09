import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options); // Output: "July 15, 2025"
}

export const API_ENDPOINTS = {
  services: `${process.env.NEXT_PUBLIC_BASE_URL}/api/public/services`,
  blogs: `${process.env.NEXT_PUBLIC_BASE_URL}/api/public/blogs`,
  domain: process.env.NEXT_PUBLIC_DOMAIN_NAME,
};

export const siteConfig = {
  phone: "+996540858851",
  email: "dammamathathmukayfat@gmail.com",
};
