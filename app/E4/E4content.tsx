import { Section } from "../_components/Section";

export type E4contentprops = {};

export const E4content = () => {
  return (
    <Section className="flex max-md:flex-col items items-start gap-4 text-muted-foreground">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h3 className="text-3xl font-caption font-bold"> Partie 1: </h3>
        <p></p>
        <hr className="my-1" />
        <div>
          <h4 className="text-xl font-caption font-bold">mon plan</h4>
          <p className="italic">Présentation personnelle</p>

          <ul className="list-disc pl-5">
            <li>Vie / Parcours</li>
            <li>Pourquoi le BTS SIO SLAM</li>
          </ul>
          <p className="italic pt-4">Mes tâches en entreprise</p>

          <ul className="list-disc pl-5">
            <li>
              Gestion de parc informatique, utilisateur(ticketing), serveur
            </li>
            <li>Gestion de projet de A à Z</li>
          </ul>

          <p className="italic pt-4">Mes réalisations</p>

          <ul className="list-disc pl-5">
            <li>Tp dhcp/dns</li>
            <li>Installation GLPI</li>
            <li>Portfolio (js)</li>
          </ul>
        </div>
        <hr className="my-4" />
      </div>
    </Section>
  );
};
