import "@/components/ui/Button/Button.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function Button({ children, className = "" }: ButtonProps) {
  return (
    <button className={`btn-primary text-button ${className}`.trim()}>
      {children}
    </button>
  );
}
