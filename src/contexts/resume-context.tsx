// contexts/resume-context.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {  ResumeValues } from "@/lib/resume/validation";
import { initialResumeValues } from "@/app/(Tools)/resume-builder/constant";

type ResumeContextType = {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
  isLoaded: boolean; // Add loading state
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{
    data: ResumeValues;
    isLoaded: boolean;
  }>({
    data: initialResumeValues,
    isLoaded: false // Initial loading state
  });

  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    setState({
      data: savedData ? JSON.parse(savedData) : initialResumeValues,
      isLoaded: true
    });
  }, []);

  const setResumeData = (data: ResumeValues) => {
    setState(prev => ({ ...prev, data }));
    localStorage.setItem("resumeData", JSON.stringify(data));
  };

  return (
    <ResumeContext.Provider value={{
      resumeData: state.data,
      setResumeData,
      isLoaded: state.isLoaded
    }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}
