/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { BentoGrid, BentoGridItem } from "../_components/bento-grid";

export function GridVeilleTechno() {
  return (
    <div className="flex flex-col items-start gap-4 max-w-3xl pxl m-auto">
      <Badge variant={"outline"}>Actualités</Badge>
      <h2 className="²border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Veille Technologique
      </h2>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon} // Remplacer par une balise img avec la source de l'image
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Chaine Youtube _Underscore",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <img src="/underscore.png" alt="Image" className="w-full h-full" />, // Remplacer "url_de_votre_image_ici" par l'URL de votre image
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <img
        src="url_de_votre_image_ici"
        alt="Image"
        className="h-4 w-4 text-neutral-500"
      />
    ),
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <img
        src="url_de_votre_image_ici"
        alt="Image"
        className="h-4 w-4 text-neutral-500"
      />
    ),
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: (
      <img
        src="url_de_votre_image_ici"
        alt="Image"
        className="h-4 w-4 text-neutral-500"
      />
    ),
  },
];
