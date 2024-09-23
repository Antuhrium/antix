import { ReactNode } from "react";
import { TeamItem } from "../../../../mocdata";

export interface ContentProps {
  description: ReactNode;
  list: Array<TeamItem>;
}
