import { ResumeProvider } from "@/contexts/resume-context";

export default function ResumeBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResumeProvider>{children}</ResumeProvider>;
}
