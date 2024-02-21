import { createContext } from "react";

export const HeaderTitleContext = createContext<
  [string, (title: string) => void]
>(["", (title: string) => {}]);
