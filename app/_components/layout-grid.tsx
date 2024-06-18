"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "shadow-md")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden shadow-md",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-full w-full m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      {selected && (
        <motion.div
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
        >
          {/* No image needed here */}
        </motion.div>
      )}
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-contain absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};
