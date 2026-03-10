"use client";

import React, { useRef, useCallback } from "react";
import { useController, type FieldValues } from "react-hook-form";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FileUploadFieldProps } from "@/types";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const FileUploader = <T extends FieldValues>({
  control,
  name,
  label,
  acceptTypes,
  disabled,
  icon: Icon,
  placeholder,
  hint,
}: FileUploadFieldProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ control, name });

  const file = value as File | undefined;

  const handleClick = useCallback(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.files?.[0];
      if (selected) onChange(selected);
    },
    [onChange],
  );

  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange(undefined);
      if (inputRef.current) inputRef.current.value = "";
    },
    [onChange],
  );

  return (
    <FormItem>
      <FormLabel className="form-label">{label}</FormLabel>
      <FormControl>
        <div>
          <input
            ref={inputRef}
            type="file"
            accept={acceptTypes.join(",")}
            className="hidden"
            onChange={handleFileChange}
            disabled={disabled}
          />

          <div
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleClick();
            }}
            role="button"
            tabIndex={0}
            className={cn(
              "upload-dropzone",
              file && "upload-dropzone-uploaded",
              disabled && "opacity-50 cursor-not-allowed",
              error && "border-red-400",
            )}
            style={{
              border: "2px dashed",
              borderColor: error
                ? "#f87171"
                : file
                  ? "#8B7355"
                  : "rgba(33, 42, 59, 0.2)",
            }}
          >
            {file ? (
              <div className="flex items-center gap-3">
                <Icon className="upload-dropzone-icon mb-0! w-6! h-6!" />
                <span className="upload-dropzone-text text-base! font-semibold truncate max-w-[200px]">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="upload-dropzone-remove"
                  aria-label="Remove file"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <Icon className="upload-dropzone-icon" />
                <p className="upload-dropzone-text">{placeholder}</p>
                <p className="upload-dropzone-hint">{hint}</p>
              </>
            )}
          </div>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default FileUploader;
