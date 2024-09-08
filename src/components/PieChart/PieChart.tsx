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
    "#0AD4C9",
    "#FFFFFF",
    "#032A28",
    "#055550",
    "#0A8078",
    "#0DAAA1",
    "#61ADB1",
    "#FFFFFF",
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    name,
}: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
    name: string;
}) => {
    const radius = innerRadius + outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const textAnchor = x > cx ? "start" : "end";

    return (
        <text
            x={x}
            y={y}
            fill="#575757"
            // fill={COLORS[index]}
            textAnchor={textAnchor}
            dominantBaseline="central"
            className={styles.chartsLabel}
        >
            {name}
        </text>
    );
};

const renderCustomizedLabelLine = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
}: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    index: number;
}) => {
    const radius = innerRadius + outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN) + 14;
    const xEnd = cx + outerRadius * Math.cos(-midAngle * RADIAN);
    const yEnd = cy + outerRadius * Math.sin(-midAngle * RADIAN);

    return (
        <line
            x1={x}
            y1={y}
            x2={xEnd}
            y2={yEnd}
            stroke="#575757"
            // stroke={COLORS[index]}
            strokeWidth={2}
        />
    );
};

const PieChartComponent: React.FC = () => {
    return (
        <PieChart width={1300} height={1000}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={130}
                outerRadius={280}
                dataKey="value"
                stroke="none"
                label={renderCustomizedLabel}
                labelLine={renderCustomizedLabelLine}
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
    );
};

export default PieChartComponent;
