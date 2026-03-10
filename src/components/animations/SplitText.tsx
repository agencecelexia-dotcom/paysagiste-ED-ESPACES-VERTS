"use client";

import { motion, type Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.07,
      delayChildren: delay,
    },
  }),
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function SplitText({
  text,
  className = "",
  delay = 0,
  as: Tag = "h1",
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      custom={delay}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Tag className={`inline ${className}`}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
