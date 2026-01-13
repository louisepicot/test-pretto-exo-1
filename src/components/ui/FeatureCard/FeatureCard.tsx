import "@/components/ui/FeatureCard/FeatureCard.css";
import { CheckIcon } from "@/components/ui/icons";

export type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-card-header">
        <CheckIcon size={16} color="var(--color-accent)" />
        <h3 className="text-card-title">{title}</h3>
      </div>
      <p className="text-caption">{description}</p>
    </div>
  );
}
