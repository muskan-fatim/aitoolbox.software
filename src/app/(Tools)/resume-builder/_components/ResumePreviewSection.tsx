import { ResumeValues } from "@/lib/resume/validation";
import ResumePreview from "./ResumePreview";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { initialResumeValues, resumeValue } from "../constant";
import { ResumeFormData } from "@/types/types";
import { OptionMenu } from "./OptionMenu";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface ResumePreviewSectionProps {
  resumeData: ResumeValues;
  setResumeData?: (data: ResumeValues) => void;
  className?: string;
  contentRef?: React.Ref<HTMLDivElement>;
}

export default function ResumePreviewSection({
  resumeData,
  setResumeData,

  className,
}: ResumePreviewSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    localStorage.removeItem("resumeData");
    if (setResumeData) {
      setResumeData(initialResumeValues);
    }
  };

  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: resumeData.title || "Resume",
  });
  return (
    <div className={cn("w-full relative", className)}>
      {setResumeData && (
        <div>
          <OptionMenu
            onPrintClick={reactToPrintFn}
            handleDelete={handleReset}
          />
        </div>
      )}
      <div className="flex w-full justify-center overflow-y-auto">
        <ResumePreview
          contentRef={contentRef}
          resumeData={resumeData}
          className="max-w-2xl shadow-md"
        />
      </div>
    </div>
  );
}
