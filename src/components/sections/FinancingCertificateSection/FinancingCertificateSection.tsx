import "@/components/sections/FinancingCertificateSection/FinancingCertificateSection.css";
import { Title } from "@/components/ui/Title";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/Button";
import certificateImgDesktop from "@/assets/images/bottom-section-img.png";
import certificateImgMobile from "@/assets/images/Img.png";

export function FinancingCertificateSection() {
  return (
    <div className="financing-certificate-section">
      <div className="financing-certificate-left">
        <Title>Votre attestation de financement</Title>
        <p className="text-body">
          Les biens de qualité reçoivent beaucoup d'offres. L'attestation de
          financement Pretto certifie au vendeur de votre capacité d'achat. De
          quoi le rassurer et mettre toutes les chances de votre côté.
        </p>
        <div className="financing-certificate-features">
          <FeatureCard
            title="Gratuite"
            description="Elle est incluse dans notre pack d'outils et services gratuits, et sans engagement !"
          />
          <FeatureCard
            title="Rapide"
            description="Recevez votre attestation en 24h, après dépôt des vos justificatifs et échange avec votre courtier."
          />
          <FeatureCard
            title="Rassurante"
            description="Destinée au vendeur, elle détaille de façon transparente votre projet de financement."
          />
        </div>
        <Button>Obtenir mon attestation</Button>
      </div>
      <div className="financing-certificate-right">
        <picture>
          <source media="(min-width: 1440px)" srcSet={certificateImgDesktop} />
          <img
            src={certificateImgMobile}
            alt="Attestation de financement Pretto"
            loading="lazy"
            width={250}
            height="auto"
          />
        </picture>
      </div>
    </div>
  );
}
