/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <>
      <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Curriculum vitae</Badge>
        <h2 className="text-3xl font-semibold">Heyy ! &#x1F44B;</h2>
        <h2 className="²border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Je serai heureux de travailler avec vous.
        </h2>
        <p className="text-lg text-muted-foreground flex justify-center">
          Téléchargez mon CV !
        </p>
        <div className="flex[5] w-full"></div>
      </Section>
      <Section className="flex flex-col items-center gap-4">
        <Card className="w-full max-w-md p-4">
          <div className="flex justify-center items-center">
            <img className="w-40 rounded-sm " src="/CV.png" alt="imgprofil" />
          </div>
          <div className="p-4 flex justify-center items-center">
            <a
              href="/YERLI SÜLEYMAN CV.pdf"
              download="YERLI SÜLEYMAN CV.pdf"
              className="flex justify-center items-center p-2"
            >
              <Button>Télécharger</Button>
            </a>
          </div>
        </Card>
      </Section>
    </>
  );
};
