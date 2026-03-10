"use client";

import React from "react";
import Image from "next/image";

const steps = [
  "Uploading PDF...",
  "Processing content...",
  "Generating segments...",
];

const LoadingOverlay = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-shadow-wrapper bg-white">
        <div className="loading-shadow">
          <Image
            src="/assets/loader.png"
            alt="Loading"
            width={60}
            height={60}
            className="loading-animation"
          />

          <h2 className="loading-title">Synthesizing Your Book</h2>

          <div className="loading-progress">
            {steps.map((step) => (
              <div key={step} className="loading-progress-item">
                <span className="loading-progress-status" />
                <span className="text-(--text-secondary)">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
