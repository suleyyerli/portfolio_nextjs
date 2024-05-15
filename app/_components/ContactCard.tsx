/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string; // Changement du type de URL à string
}) => {
  return (
    <Link href={props.url}>
      <Card className="p-2 bg-accent/10 flex items-center gap-4 hover:bg-accent/50 transition-colors group">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="w-9 h-9 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
          size={16}
        />
      </Card>
    </Link>
  );
};
