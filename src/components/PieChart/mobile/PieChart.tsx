import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from "./PieChart.module.scss";

// Interface for data structure
interface DataItem {
    name: string;
    value: number;
}

const data: DataItem[] = [
    { name: "Team & Advisors", value: 15 },
    { name: "Ecosystem growth", value: 31.5 },
    { name: "Pre-sales", value: 26 },
    { name: "Liquidity", value: 8 },
    { name: "Community rewards", value: 14 },
    { name: "Airdrop", value: 2.5 },
    { name: "Public round", value: 2 },
    { name: "KOL round", value: 1 },
];

const COLORS: string[] = [
    "#0DFFF1",
    "#032A28",
    "#055550",
    "#0A8078",
    "#0DAAA1",
    "#61ADB1"
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
}: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    value: number;
}) => {
    const radius = (innerRadius + outerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="#FFFFFF"
            textAnchor="middle"
            dominantBaseline="central"
            className={styles.chartsLabel}
        >
            {`${value}%`}
        </text>
    );
};

const PieChartComponent: React.FC = () => {
    return (
        <div className={styles.pieChartContainer}>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={60}
                    outerRadius={120}
                    dataKey="value"
                    stroke="none"
                >
                    {data.map((_, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
            <div className={styles.legend}>
                {data.map((entry, index) => (
                    <div key={`legend-${index}`} className={styles.legendItem}>
                        <span
                            className={styles.legendColor}
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className={styles.legendText}>{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartComponent;
