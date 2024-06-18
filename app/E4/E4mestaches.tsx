import { Section } from "../_components/Section";

export type E4mestachesprops = {};

export const E4mestaches = () => {
  return (
    <Section className="flex max-md:flex-col items items-start gap-4 text-muted-foreground">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <hr className="my-1" />
        <div>
          <h4 className="text-xl font-caption font-bold"> mes réalisations</h4>
          <p className="pt-4">
            <br></br>
            <strong>
              <a
                href="/tddhcp-dns.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tp DHCP/DNS
              </a>
            </strong>
            <br></br>
            DHCP (Dynamic Host Configuration Protocol) Le DHCP attribue
            automatiquement des adresses IP aux appareils sur un réseau,
            simplifiant ainsi leur configuration et gestion. DNS (Domain Name
            System) Le DNS traduit les noms de domaine en adresses IP,
            permettant aux utilisateurs d&apos;accéder facilement aux sites web.
            <br></br>
            <strong>
              <a href="/tdglpi.pdf" target="_blank" rel="noopener noreferrer">
                Tp GLPI
              </a>
            </strong>
            <br></br>
            GLPI (Gestion Libre de Parc Informatique) GLPI est un logiciel open
            source de gestion des services informatiques (ITSM). Il permet de
            gérer l&apos;inventaire des équipements informatiques, le suivi des
            incidents, la gestion des demandes et la planification des
            interventions. GLPI aide les entreprises à améliorer
            l&apos;efficacité de leur support informatique et à optimiser la
            gestion de leurs ressources technologiques.
            <br></br>
          </p>
          <hr className="my-4" />
        </div>
      </div>
    </Section>
  );
};
