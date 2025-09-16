"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedDivProps {
  children: React.ReactNode;
}

export default function AnimatedDiv({ children }: AnimatedDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
