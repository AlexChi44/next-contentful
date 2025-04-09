export const fontSize = {
  10: "0.625rem",
  12: "0.75rem",
  14: "0.875rem", // very conviniet... just font-12, font-14, font-16
  16: "1rem",
  18: "1.125rem",
  20: "1.25rem",
  28: "1.75rem",
  24: "1.5rem",
  32: "2rem",
  36: "2.25rem",
  40: "2.5rem",
  48: "3rem",
  56: "3.5rem",
  64: "4rem",
  72: "4.5rem",
  80: "5rem",
  88: "5.5rem",
  96: "6rem",
  104: "6.5rem",
  112: "7rem",
  128: "8rem",
} as const;

export const fontWeight = {
  light: "300",
  regular: "400",
  medium: "500",
  bold: "700",
} as const;

export const letterSpacing = {
  normal: "0",
  tight: "-0.02em",
} as const;

export const lineHeight = {
  normal: "1",
  body: "1.1",
} as const;

export const headingCopyProps = [
  {
    className: ".text-h1",
    fontSizes: [fontSize[48], fontSize[56], fontSize[64], fontSize[80]],
  },
  {
    className: ".text-h2",
    fontSizes: [fontSize[40], fontSize[48], fontSize[56], fontSize[64]],
  },
  {
    className: ".text-h3",
    fontSizes: [fontSize[32], fontSize[40], fontSize[48], fontSize[56]],
  },
  {
    className: ".text-h4",
    fontSizes: [fontSize[28], fontSize[32], fontSize[40], fontSize[48]],
  },
];

export const bodyCopyProps = [
  {
    className: ".text-body-xl",
    fontSizes: [fontSize[24], fontSize[28], fontSize[32], fontSize[36]],
  },
  {
    className: ".text-body-lg",
    fontSizes: [fontSize[20], fontSize[24], fontSize[28], fontSize[32]],
  },
  {
    className: ".text-body-md",
    fontSizes: [fontSize[18], fontSize[20], fontSize[24], fontSize[28]],
  },
  {
    className: ".text-body",
    fontSizes: [fontSize[16], fontSize[18], fontSize[20], fontSize[24]],
  },
  {
    className: ".text-body-sm",
    fontSizes: [fontSize[14], fontSize[16], fontSize[18], fontSize[20]],
  },
  {
    className: ".text-body-xs",
    fontSizes: [fontSize[12], fontSize[14], fontSize[16], fontSize[18]],
  },
  {
    className: ".text-body-xxs",
    fontSizes: [fontSize[10], fontSize[12], fontSize[14], fontSize[16]],
  },
];

export const eyebrowCopyProps = [
  {
    className: ".text-eyebrow-lg",
    fontSizes: [fontSize[20], fontSize[20], fontSize[24], fontSize[28]],
  },
  {
    className: ".text-eyebrow",
    fontSizes: [fontSize[18], fontSize[18], fontSize[20], fontSize[24]],
  },
  {
    className: ".text-eyebrow-sm",
    fontSizes: [fontSize[16], fontSize[16], fontSize[18], fontSize[20]],
  },
];

export const graphicalCopyProps = [
  {
    className: ".text-graphical-lg",
    fontSizes: [fontSize[88], fontSize[104], fontSize[112], fontSize[128]],
  },
  {
    className: ".text-graphical-sm",
    fontSizes: [fontSize[72], fontSize[88], fontSize[96], fontSize[112]],
  },
];

export const utilityCopyProps = [
  {
    className: ".text-utility-xs",
    fontSize: fontSize[12],
  },
  {
    className: ".text-utility-sm",
    fontSize: fontSize[14],
  },
  {
    className: ".text-utility",
    fontSize: fontSize[16],
  },
  {
    className: ".text-utility-lg",
    fontSize: fontSize[18],
  },
  {
    className: ".text-utility-xl",
    fontSize: fontSize[20],
  },
];
