/* eslint-disable @next/next/no-img-element */
import { CodeContour } from "./CodeContour";
import { Section } from "./Section";
import { VScodeIcon } from "./icons/VScodeIcon";
import { EtudeIcon } from "./icons/etudeIcon";

export type HeroProps = {};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Suleyman Yerli
        </h2>
        <h3 className="text-3xl font-caption"> Software developer</h3>
        <p className="text-muted-foreground">
          Salut, Je suis, étudiant en alternance en{" "}
          <CodeContour className="inline-flex items-center gap-2">
            <EtudeIcon size={15} className="inline" /> bts sio
          </CodeContour>
          spécialisé en SLAM, passionné d'informatique. Mon parcours m'a permis
          de combiner théorie et expérience professionnelle, avec des projets
          concrets en entreprise, incluant le developpement d'outil pour
          faciliter le travail en usine, maîtrise et développement sur{" "}
          <CodeContour>ERP</CodeContour>. Je souhaite approfondir mes
          compétences, et obtenr mon BTS pour poursuivre vers une license.
        </p>

        <p className="text-base pt-1">
          J'utilise personnellement{" "}
          <CodeContour className="inline-flex items-center gap-2">
            <VScodeIcon size={15} className="inline" /> VScode
          </CodeContour>
        </p>
      </div>
      <div className="flex-[2] max-md:n-auto ml-auto">
        <div className="overflow-hidden rounded-full w-74 h-74">
          <img
            src="/665e11803313a2d3-sticker.png"
            className="w-full h-auto max-w-xs max-md:w-56"
            alt="imgprofil"
          />
        </div>
      </div>
    </Section>
  );
};
