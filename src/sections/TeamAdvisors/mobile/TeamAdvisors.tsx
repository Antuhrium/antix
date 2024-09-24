import { FadeInNew } from "../../../components/FadeInNew/FadeInNew";
import { tabs } from "../mocdata";
import styles from "./TeamAdvisors.module.scss";
import { Tabs } from "./ui/Tabs/Tabs";

const TeamAdvisors = () => {
  return (
    <FadeInNew direction="right" distance={"50%"}>
      <div className={styles.wrapper}>
        <Tabs items={tabs} />
      </div>
    </FadeInNew>
  );
};

export default TeamAdvisors;