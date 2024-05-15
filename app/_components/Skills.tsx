import { Badge } from "@/components/ui/badge";
import { CodeContour } from "./CodeContour";
import { Section } from "./Section";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindcssIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="²border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ce que je fais ...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "9s" }}
          />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            Mon framework principal est <CodeContour>React</CodeContour> .
            J'utilise également
            <CodeContour>next.js</CodeContour> comme framework backend et
            frontend.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <TailwindIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "9s" }}
          />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            TailwindCSS
          </h3>
          <p className="text-sm text-muted-foreground">
            Avec <CodeContour>TailwindCSS</CodeContour>, je peux <u>styliser</u>{" "}
            rapidement et <i>directement</i>
            mes éléments HTML, ce qui simplifie la <u>conception</u> et me
            permet de me concentrer sur <i>l'expérience</i> utilisateur.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <JavascriptIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "9s" }}
          />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            JavaScript
          </h3>
          <p className="text-sm text-muted-foreground">
            Avec <CodeContour>JavaScript</CodeContour> , je dynamise mes projets
            en ajoutant des fonctionnalités avancées sans altérer le code de
            base. Cette agilité permet une personnalisation et une interactivité
            accrues, quelle que soit l'application ou le projet.TESTTT
          </p>
        </div>
      </div>
    </Section>
  );
};
