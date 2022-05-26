import React from "react";

export const PageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.25,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.25,
    },
  },
};

export const TitleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const Fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const PhotoAnim = {
  hidden: { opacity: 0, scale: 1.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
