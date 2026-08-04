"use client";

import * as React from "react";
// next-themes v0.4 removed the "next-themes/dist/types" entry point and
// exports the props type from the package root instead.
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
