// RunLine.tsx
import React, { useRef, useEffect } from "react";
import styles from "./RunLine.module.scss";

interface RunLineProps {
  children: React.ReactNode;
  showElements?: number; // Количество видимых элементов
}

export const RunLine: React.FC<RunLineProps> = ({
  children,
  showElements = 5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Дублируем элементы для создания бесконечной строки
  const duplicateChildren = React.Children.toArray(children);

  // Функция для расчёта общей ширины всех элементов, включая gap
  const calculateTotalWidth = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const childrenArray = Array.from(container.children) as HTMLElement[];

      // Суммируем ширину каждого элемента + gap
      const totalWidth = childrenArray.reduce(
        (acc, child) => acc + child.offsetWidth,
        0
      );

      const windowWidth = window.innerWidth < 680 ? 1000 : 100
      const animationTime = totalWidth / windowWidth;

      // Устанавливаем скорость анимации в зависимости от полной ширины
      container.style.setProperty("--animation-duration", `${animationTime}s`);
    }
  };

  useEffect(() => {
    calculateTotalWidth();
    window.addEventListener("resize", calculateTotalWidth); // Пересчитываем при изменении размера экрана

    return () => window.removeEventListener("resize", calculateTotalWidth);
  }, [children]);

  return (
    <div className={styles.runLineWrapper}>
      <div
        className={styles.runLine}
        ref={containerRef}
        style={{
          gridTemplateColumns: `repeat(${showElements * 2}, 1fr)`,
        }}
      >
        {/* Оригинальные элементы */}
        {children}

        {/* Дубликаты для бесконечной строки */}
        {duplicateChildren}
        {duplicateChildren}
        {duplicateChildren}
      </div>
    </div>
  );
};
