import styles from "./Why.module.scss";

type WhyItemType = {
    boldText: string;
    text: string;
    index: number;
};

const WhyItem = ({ boldText, text, index }: WhyItemType) => {
    return (
        <div className={styles.item}>
            <p className={styles.text}>
                <span>{boldText}</span>{" "}
                {text}
            </p>
            <div className={styles.itemNumber}>0{index}</div>
        </div>
    );
};

const whyData: WhyItemType[] = [
    {
        boldText: "ANTIX tokens",
        text: "– stake and earn with every transaction on the platform.",
        index: 1,
    },
    {
        boldText: "Revolutionizing a $300 billion industry",
        text: "– accessible, profitable tech for everyone.",
        index: 2,
    },
    {
        boldText: "Make your digital twin earn for you.",
        text: "Create rent or sell on Antix platform.",
        index: 3,
    },
];

const Why = () => {
    return (
        <section className={styles.container}>
            {whyData.map((data) => (
                <WhyItem
                    key={data.index}
                    boldText={data.boldText}
                    text={data.text}
                    index={data.index}
                />
            ))}
        </section>
    );
};

export default Why;
