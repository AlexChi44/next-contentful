import type { Config } from "tailwindcss";
import type { CSSRuleObject, PluginCreator } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";
import {
  bodyCopyProps,
  fontSize,
  headingCopyProps,
  letterSpacing,
  lineHeight,
  utilityCopyProps,
} from "./styles/typography";

const remapUtility = (
  prefix: string,
  property: string | null,
  values: CSSRuleObject | CSSRuleObject[]
): PluginCreator => {
  return ({ addUtilities }) => {
    const utilities = Object.entries(values).reduce<CSSRuleObject>(
      (acc, [key, value]) => {
        acc[`.${prefix}-${key}`] = property ? { [property]: value } : value;
        return acc;
      },
      {}
    );

    addUtilities(utilities, { respectPrefix: false, respectImportant: false });
  };
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 11px 13px 0 rgb(0 0 0 / 0.3), 0 1px 12px -11px rgb(0 0 0 / 0.1)",
      },
      colors: {
        customPurple: "#6b5b95",
        "test-red": "#f163be",
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
      },
      animation: {
        // custom loop animation
        "loop-scroll": "loop-scroll 7s forwards infinite", //loop-scroll 10s linear infinite
      },
      keyframes: {
        "loop-scroll": {
          "25%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20%)" },
          "75%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(-80%)" },
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  // corePlugins: {
  //   fontWeight: false,
  //   fontSize: false,
  //   letterSpacing: false,
  //   lineHeight: false,
  // },
  plugins: [
    remapUtility("text", "fontSize", fontSize),
    plugin(({ addUtilities, addComponents, theme }) => {
      const createTypographyComponentRules = (
        props: { className: string; fontSizes: string[] }[],
        defaultRules?: CSSRuleObject
      ) =>
        props.reduce<CSSRuleObject>((acc, item) => {
          acc[item.className] = {
            ...defaultRules,
            fontSize: item.fontSizes[0],
            [`@media (min-width: ${theme("screens.md")})`]: {
              fontSize: item.fontSizes[1],
            },
            [`@media (min-width: ${theme("screens.lg")})`]: {
              fontSize: item.fontSizes[2],
            },
            [`@media (min-width: ${theme("screens.xl")})`]: {
              fontSize: item.fontSizes[3],
            },
          } as CSSRuleObject;
          return acc;
        }, {});

      const utilityRules = utilityCopyProps.reduce<CSSRuleObject>(
        (acc, item) => {
          acc[item.className] = {
            lineHeight: lineHeight.body,
            letterSpacing: letterSpacing.normal,
            fontSize: item.fontSize,
            fontFamily: theme("fontFamily.sans"),
          } as CSSRuleObject;
          return acc;
        },
        {}
      );

      addComponents({
        ...createTypographyComponentRules(headingCopyProps, {
          lineHeight: lineHeight.normal,
          letterSpacing: letterSpacing.tight,
        }),
        ...createTypographyComponentRules(bodyCopyProps),
      });
      addUtilities(utilityRules);
    }),
  ],
};
export default config;
