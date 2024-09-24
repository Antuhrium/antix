import { PieChart, Pie, Cell } from "recharts";
// import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import styles from "./PieChart.module.scss";

// Interface for data structure
interface DataItem {
    name: string;
    value: number;
}

const data: DataItem[] = [
    { name: "Pre-sales", value: 26 },
    { name: "Ecosystem growth", value: 31.5 },
    { name: "Team & Advisors", value: 15 },
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
    "#86A3A1",
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) / 2; 
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const formattedPercent = (percent * 100).toFixed(1);

    return (
        <text
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            className={styles.chartsLabel}
            fill={index !== 1 ? "#fff" : "#032A28"}
        >
            {index < 6 ? `${formattedPercent}%` : ""}
        </text>
    );
};


// const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
//     if (active && payload && payload.length) {
//         const data = payload[0].payload;
//         return (
//             <div className={styles.customTooltip}>
//                 <p>{`${data.name}: ${data.value}%`}</p>
//             </div>
//         );
//     }
//     return null;
// };

const PieChartComponent: React.FC = () => {
    return (
        <div className={styles.chartWrapper}>
                <PieChart width={540} height={540}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={120}
                        outerRadius={270}
                        dataKey="value"
                        stroke="none"
                        label={renderCustomizedLabel}
                        labelLine={false}
                        isAnimationActive={true}
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    {/* <Tooltip content={<CustomTooltip />} /> */}
                </PieChart>
        </div>
    );
};

export default PieChartComponent;
