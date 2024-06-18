import { Section } from "../_components/Section";

export type E4presentationprops = {};

export const E4presentation = () => {
  return (
    <Section className="flex max-md:flex-col items items-start gap-4 text-muted-foreground">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <hr className="my-1" />
        <div>
          <h4 className="text-xl font-caption font-bold">
            présentation personnelle
          </h4>
          <p className="pt-4">
            Bonjour ! Je m'appelle <strong>Suleyman</strong>. Je suis
            <strong> développeur junior</strong> fullstack et passionné par
            l'informatique. J'habite à Weyersheim, un petit village situé à 10
            km du centre de Strasbourg. Mon parcours est assez particulier.
            <br></br>
            <div className="pt-4">
              J'ai obtenu mon bac Scientifique (session 2019) au Lycée Kléber de
              Strasbourg. Après avoir obtenu mon bac, ne sachant pas trop quoi
              faire, je me suis orienté vers l'apprentissage du métier de
              plâtrier chez les Compagnons du Devoir. Cependant, je ne me voyais
              pas faire cela toute ma vie, c'est pourquoi je suis ici devant
              vous aujourd'hui.
            </div>
            <br></br> <strong>Pourquoi ai-je choisi l'informatique ?</strong>{" "}
            D'une part, par passion pour l'informatique, motivé par l'envie de
            découvrir et d'apprendre de nouvelles choses dans ce domaine.
            D'autre part, plusieurs membres de ma famille travaillent dans ce
            secteur, ce qui a influencé mon choix.
          </p>
          <hr className="my-4" />
        </div>
      </div>
    </Section>
  );
};
