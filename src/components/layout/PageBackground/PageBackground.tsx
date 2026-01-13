import "@/components/layout/PageBackground/PageBackground.css";

type PageBackgroundProps = {
  children: React.ReactNode;
};

export function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="page-bg">
      <div className="page-bg__art" aria-hidden="true" />
      <div className="page-bg__content">{children}</div>
    </div>
  );
}
