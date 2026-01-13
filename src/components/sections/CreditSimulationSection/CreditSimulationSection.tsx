import "@/components/sections/CreditSimulationSection/CreditSimulationSection.css";
import { ActionCard } from "@/components/ui/ActionCard";
import { Title } from "@/components/ui/Title";
import CalculatorIcon from "@/assets/svg/Calculator.svg?react";
import CoinsIcon from "@/assets/svg/Coins.svg?react";
import topSectionImg from "@/assets/images/top-section-img.png";

export function CreditSimulationSection() {
  return (
    <div className="credit-simulation-section">
      <Title className="pb-2">Préparez votre projet en toute facilité</Title>
      <div className="credit-simulation-content">
        <div className="credit-simulation-left">
          <p className="text-body">
            Vous aimeriez savoir quel crédit vous pourriez obtenir pour votre
            projet ? Nos simulateurs sont connectés à un algorithme unique sur
            le marché nous permettant de connaître avec précision les offres des
            banques et d'identifier la meilleure pour vous.
          </p>
          <div className="credit-simulation-cards">
            <ActionCard
              icon={<CalculatorIcon width={24} height={24} />}
              label="Simuler mon prêt"
            />
            <ActionCard
              icon={<CoinsIcon width={24} height={24} />}
              label="Simuler mon rachat"
            />
          </div>
        </div>
        <div className="credit-simulation-right">
          <img
            src={topSectionImg}
            alt="Illustration du projet de crédit"
            loading="lazy"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
