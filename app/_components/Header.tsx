import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { DiscordIcon } from "./icons/DiscordIcon";
import { GithubIcon } from "./icons/Githubicon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">suley.com</h1>

        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link href="http://localhost:3000/">
            <p className="text-primary">/Accueil</p>
          </Link>

          <Link href="/blog">
            <p className="text-primary">/blog</p>
          </Link>
          <Link
            href="https://github.com/"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <GithubIcon size={21} className="text-foreground" />
          </Link>

          <Link
            href="https://fr.linkedin.com/"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <LinkedinIcon size={17} className="text-foreground" />
          </Link>

          <Link
            href="https://discord.com/"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <DiscordIcon size={17} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
