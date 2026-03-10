"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { voiceOptions, voiceCategories, DEFAULT_VOICE } from "@/lib/constants";
import type { VoiceSelectorProps } from "@/types";

const VoiceSelector = ({
  disabled,
  className,
  value,
  onChange,
}: VoiceSelectorProps) => {
  const selectedVoice = value || DEFAULT_VOICE;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Male Voices */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-(--text-secondary) uppercase tracking-wide">
          Male Voices
        </h4>
        <div className="voice-selector-options">
          {voiceCategories.male.map((key) => {
            const voice = voiceOptions[key as keyof typeof voiceOptions];
            const isSelected = selectedVoice === key;

            return (
              <button
                key={key}
                type="button"
                disabled={disabled}
                onClick={() => onChange(key)}
                className={cn(
                  "voice-selector-option",
                  isSelected
                    ? "voice-selector-option-selected"
                    : "voice-selector-option-default",
                  disabled && "voice-selector-option-disabled",
                )}
              >
                <div className="text-left">
                  <p className="font-semibold text-(--text-primary)">
                    {voice.name}
                  </p>
                  <p className="text-xs text-(--text-secondary) mt-0.5 leading-tight">
                    {voice.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Female Voices */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-(--text-secondary) uppercase tracking-wide">
          Female Voices
        </h4>
        <div className="voice-selector-options">
          {voiceCategories.female.map((key) => {
            const voice = voiceOptions[key as keyof typeof voiceOptions];
            const isSelected = selectedVoice === key;

            return (
              <button
                key={key}
                type="button"
                disabled={disabled}
                onClick={() => onChange(key)}
                className={cn(
                  "voice-selector-option",
                  isSelected
                    ? "voice-selector-option-selected"
                    : "voice-selector-option-default",
                  disabled && "voice-selector-option-disabled",
                )}
              >
                <div className="text-left">
                  <p className="font-semibold text-(--text-primary)">
                    {voice.name}
                  </p>
                  <p className="text-xs text-(--text-secondary) mt-0.5 leading-tight">
                    {voice.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VoiceSelector;
