import "@/components/sections/Section/Section.css";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return <div className={`section ${className}`.trim()}>{children}</div>;
}
