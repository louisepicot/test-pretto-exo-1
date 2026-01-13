import "@/index.css";
import { Container } from "@/components/layout/Container";
import { PageBackground } from "@/components/layout/PageBackground";
import { CreditSimulationSection } from "@/components/sections/CreditSimulationSection";
import { Section } from "@/components/sections/Section";
import { FinancingCertificateSection } from "@/components/sections/FinancingCertificateSection";
import { Header } from "@/components/layout/Header";


function App() {
  return (
    <>
      <Header />
      <PageBackground>
        <Container>
          <Section>
            <CreditSimulationSection />
          </Section>
          <Section>
            <FinancingCertificateSection />
          </Section>
        </Container>
      </PageBackground>
    </>
  );
}

export default App;
