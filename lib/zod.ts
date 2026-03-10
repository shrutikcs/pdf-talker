import { z } from "zod";
import {
  MAX_FILE_SIZE,
  ACCEPTED_PDF_TYPES,
  MAX_IMAGE_SIZE,
  ACCEPTED_IMAGE_TYPES,
} from "@/lib/constants";

export const UploadSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters")
    .max(100, "Title must be less than 100 characters"),
  author: z
    .string()
    .min(2, "Author name must be at least 2 characters")
    .max(100, "Author name must be less than 100 characters"),
  persona: z.string().optional(),
  pdfFile: z
    .instanceof(File, { message: "Please upload a PDF file" })
    .refine((file) => file.size <= MAX_FILE_SIZE, "File must be less than 50MB")
    .refine(
      (file) => ACCEPTED_PDF_TYPES.includes(file.type),
      "Only PDF files are accepted",
    ),
  coverImage: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_IMAGE_SIZE,
      "Image must be less than 10MB",
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only JPEG, PNG, and WebP images are accepted",
    )
    .optional(),
});
