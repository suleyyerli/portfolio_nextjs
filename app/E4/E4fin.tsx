import { Section } from "../_components/Section";

export type E4finProps = {};

export const E4fin = () => {
  return (
    <Section className="flex max-md:flex-col items items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">
          Merci à tous de m&apos;avoir écouté pendant cet oral.<br></br> Je suis
          maintenant prêt à répondre à vos questions. &#x1F44B;
        </h2>

        <p></p>
      </div>

      <div className="flex-[2] max-md:n-auto ml-auto">
        <div className="overflow-hidden rounded-full w-74 h-74">
          <img
            src="/salut.png"
            className="w-full h-auto max-w-xs max-md:w-56"
            alt="imgprofil"
          />
        </div>
      </div>
    </Section>
  );
};
