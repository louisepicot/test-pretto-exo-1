import "@/components/ui/ActionCard/ActionCard.css";

export type ActionCardProps = {
  label: string;
  icon?: React.ReactNode;
};

export function ActionCard({ label, icon }: ActionCardProps) {
  return (
    <button className="action-card">
      <div className="action-card-header">
        {icon && <div className="action-card-header__icon">{icon}</div>}
        <span className="text-body-strong">{label}</span>
      </div>
      <span className="action-card__chevron">›</span>
    </button>
  );
}
