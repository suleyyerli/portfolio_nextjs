import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../_components/Spacing";
import { GridVeilleTechno } from "./GridVeilleTechno";

export default function blog() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <GridVeilleTechno />

      <Spacing size="md" />

      <Footer />
    </main>
  );
}
