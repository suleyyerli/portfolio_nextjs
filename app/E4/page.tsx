import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../_components/Spacing";
import { E4 } from "./E4";
import { E4content } from "./E4content";
import { E4entreprise } from "./E4entreprise";
import { E4fin } from "./E4fin";
import { E4mestaches } from "./E4mestaches";
import { E4presentation } from "./E4presentation";

export default function oralE4() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <E4 />

      <Spacing size="md" />

      <E4content />

      <Spacing size="md" />

      <E4presentation />

      <Spacing size="md" />

      <E4entreprise />

      <Spacing size="md" />

      <E4mestaches />

      <Spacing size="md" />

      <E4fin />

      <Spacing size="md" />

      <Footer />
    </main>
  );
}
