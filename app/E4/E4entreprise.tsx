import { Section } from "../_components/Section";
import { LayoutGridEntreprise0 } from "./E4component/LayoutGridEntreprise0"; // Assurez-vous que le chemin est correct
import { LayoutGridEntreprise1 } from "./E4component/LayoutGridEntreprise1";

export type E4entrepriseProps = {};

export const E4entreprise = () => {
  return (
    <Section className="flex max-md:flex-col items items-start gap-4 text-muted-foreground">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <hr className="my-1" />
        <div>
          <h4 className="text-xl font-caption font-bold">
            mes tâches en entreprises
          </h4>
          <p className="pt-4">
            <strong>
              Gestion du matériel (PC, téléphone, imprimante) et des
              utilisateurs(ticketing,mail,ad)
            </strong>
            <br></br>
            Pour la gestion du matériel, nous n'utilisons pas d'application
            comme GLPI ou autres. À la place, nous procédons de la manière
            suivante : nous établissons différents fichiers Excel avec des
            filtres qui nous permettent de gérer notre matériel. Comme vous
            pouvez le voir sur les captures d'écran ci-jointes.
            <br></br>
            <strong>Pour la gestion des utilisateurs,</strong> nous utilisons
            l'application Microsoft pour les boîtes mail et Active Directory de
            windows pour les utilisateurs ou les différents serveurs.
            <strong> Pour le ticketing</strong> nous utilisons l'application
            Atera.
          </p>
          <LayoutGridEntreprise0 />{" "}
          {/* Ajoutez cette ligne pour afficher le composant */}
          <p className="pt-4">
            <strong>Gestion de projet de A à Z en entreprise.</strong>
            <br></br>
            L'un des projets que j'ai dû mener seul était la
            <strong> migration des serveurs vers Dropbox</strong> , suite à une
            demande de notre direction.
            <br></br>
            Je vais vous expliquer la mise en œuvre de ce projet et comment je
            l'ai réalisé avec ses contraintes.
            <br></br>
            En réalisant ce projet, j'ai compris{" "}
            <strong>
              que la communication est cruciale dans les métiers de
              l'informatique.
            </strong>
          </p>
          <LayoutGridEntreprise1 />{" "}
          {/* Ajoutez cette ligne pour afficher le composant */}
          <hr className="my-4" />
        </div>
      </div>
    </Section>
  );
};
