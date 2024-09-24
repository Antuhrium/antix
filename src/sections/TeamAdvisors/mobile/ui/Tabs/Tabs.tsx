import { useState } from "react";
import { TabsProps } from "./types";
import styles from "./Tabs.module.scss";

export const Tabs = (props: TabsProps) => {
  const { items } = props;
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {items.map((item) => (
          <button
            className={item.id === activeTab ? styles.activeTab : ""}
            key={item.id}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {items.map((item) => (item.id === activeTab ? item.children : null))}
      </div>
    </div>
  );
};
