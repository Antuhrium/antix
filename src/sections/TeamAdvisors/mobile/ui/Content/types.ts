import { ReactNode } from "react";
import { AdvisorPerson, TeamPerson } from "../../mocdata";

export interface ContentProps {
  description: ReactNode;
  list: Array<TeamPerson | AdvisorPerson>;
}
