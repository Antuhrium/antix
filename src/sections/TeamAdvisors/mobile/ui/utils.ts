import { AdvisorPerson, TeamPerson } from "../mocdata";

export const isTeamPerson = (
  person: TeamPerson | AdvisorPerson
): person is TeamPerson => {
  if (!Object.keys(person).includes("info")) {
    return false;
  }
  if (!Object.keys(person).includes("subRole")) {
    return false;
  }
  return true;
};

export const isAdvisorPerson = (
  person: TeamPerson | AdvisorPerson
): person is AdvisorPerson => {
  if (Object.keys(person).includes("info")) {
    return false;
  }
  return true;
};
