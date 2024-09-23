import { ReactNode } from "react";

export interface TabsProps {
  items: {
    id: string | number;
    label: string;
    children: ReactNode;
  }[];
}
