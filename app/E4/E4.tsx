import { Section } from "../_components/Section";

export type E4Props = {};

export const E4 = () => {
  return (
    <Section className="flex max-md:flex-col items items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Epreuve oral E4
        </h2>
        <h3 className="text-3xl font-caption font-bold">
          {" "}
          BTS SIO OPTION SLAM
        </h3>
        <p></p>
      </div>

      <div className="flex-[2] max-md:n-auto ml-auto">
        <div className="overflow-hidden rounded-full w-74 h-74"></div>
      </div>
    </Section>
  );
};
