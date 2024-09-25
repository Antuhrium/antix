import { useEffect, useRef, useState } from "react";

import styles from "./Content.module.scss";
import { ContentProps } from "./types";
import { Card } from "../Card/Card";

export const Content = (props: ContentProps) => {
  const { list, description } = props;
  // Состояние для управления высотой элемента
  const [isCollapsed, setIsCollapsed] = useState(true);
  // ---
  const collapsedRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const firstElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (collapsedRef.current && contentRef.current && firstElementRef.current) {
      if (isCollapsed) {
        collapsedRef.current.style.height = `${firstElementRef.current?.offsetHeight}px`;
      } else {
        collapsedRef.current.style.height = `${contentRef.current.offsetHeight}px`;
      }
    } else {
      console.error("Что то пошло не так");
    }
  }, [isCollapsed]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>{description}</div>
      <div ref={collapsedRef} className={styles.collapsed}>
        <div ref={contentRef} className={styles.content}>
          {list.map((item) => {
            return <Card {...item} ref={firstElementRef} />;
          })}
        </div>
      </div>
      <button
        className={styles.actionBtn}
        onClick={() => setIsCollapsed((prevState) => !prevState)}
      >
        {isCollapsed ? <span>See more</span> : <span>Hide Details</span>}
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: !isCollapsed ? "rotate(180deg)" : "",
          }}
        >
          <rect
            x="0.533333"
            y="0.65931"
            width="30.9333"
            height="30.9333"
            rx="4.26667"
            stroke="url(#paint0_linear_1222_6100)"
            stroke-width="1.06667"
          />
          <g opacity="0.7">
            <path
              d="M8.53516 12.9259L16.0018 20.3926L23.4685 12.9259"
              stroke="#F0F0F0"
              stroke-width="1.06667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1222_6100"
              x1="-5.9871"
              y1="0.125976"
              x2="38.6948"
              y2="29.501"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#12FFF1" />
              <stop offset="1" stop-color="#0F0F0F" stop-opacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};
