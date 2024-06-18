/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Code, Database, LucideIcon, Share, Share2 } from "lucide-react";
import Link from "next/link";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items items-start gap-4">
      {/*<Card className="flex-[3] w-full p-4 flex flex-col gap-2">
        Side project
      </Card>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">Work</Card>
        <Card className="p-4 flex-1">Contact me</Card>
  </div>*/}
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4 h-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Experience</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-2 flex flex-col h-full gap-1">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="mailto:suleyyerli@gmail.com"
            name="@Suleyman Yerli"
            image="/yoo.png"
            mediumImage="/gmail-icon-free-png.webp"
            description="Hello world"
          />

          <ContactCard
            url="/"
            name="@Suleyman Yerli"
            image="/yoo.png"
            mediumImage="/LinkedIn_icon.svg.png"
            description="Hello world"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Mon portfolio",
    description:
      "Le developpement de mon portfolio en Next.JS, React.JS et TailwindCSS.",
    url: "https://github.com/suleyyerli/portfolio_nextjs",
  },

  {
    Logo: Database,
    title: "Projet gsb",
    description:
      "Le developpement d'une application de gestion de comptabilité.",
    url: "https://github.com/suleyyerli/gsb",
  },

  {
    Logo: Share2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    url: "/",
  },

  {
    Logo: Share,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    url: "/",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    image: "/logoclestra.jpg",
    title: "Clestra",
    role: "Alternant développeur",
    date: "2023/2025",
    url: "https://www.clestra.com/",
    goodexperience: true,
  },

  {
    image: "/logoclestra.jpg",
    title: "Clestra",
    role: "Alternant développeur",
    date: "2023/2025",
    url: "https://www.clestra.com/",
  },

  {
    image: "/logoclestra.jpg",
    title: "Clestra",
    role: "Alternant développeur",
    date: "2023/2025",
    url: "https://www.clestra.com/",
  },
];
