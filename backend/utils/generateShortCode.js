import { nanoid } from "nanoid";

export const generateShortCode = () => {
  // Generate a unique short code using nanoid
  const shortCode = nanoid(8); 
  return shortCode;
}