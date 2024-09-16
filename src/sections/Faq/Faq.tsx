import { useState } from 'react';
import styles from './Faq.module.scss';

// SVG components for Plus and X icons
const PlusIcon = ({ className }: { className?: string }) => (
    <svg className={className} style={{ display: 'block' }} width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0.800781V40.8008M40 20.8008L0 20.8008" stroke="black" />
        <path d="M20 0.800781V40.8008M40 20.8008L0 20.8008" stroke="url(#paint0_linear_358_6816)" />
        <defs>
            <linearGradient id="paint0_linear_358_6816" x1="40" y1="20.6137" x2="41.2954" y2="21.3177" gradientUnits="userSpaceOnUse">
                <stop stop-color="#12FFF1" />
                <stop offset="1" stop-color="#12FFF1" stop-opacity="0.4" />
            </linearGradient>
        </defs>
    </svg>

);

const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} style={{ display: 'block' }} width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.1421 0.65776L0.857865 28.942M29.1421 28.942L0.857866 0.657759" stroke="black" />
        <path d="M29.1421 0.65776L0.857865 28.942M29.1421 28.942L0.857866 0.657759" stroke="url(#paint0_linear_358_6811)" />
        <defs>
            <linearGradient id="paint0_linear_358_6811" x1="29.2744" y1="28.8097" x2="29.6925" y2="30.2235" gradientUnits="userSpaceOnUse">
                <stop stop-color="#12FFF1" />
                <stop offset="1" stop-color="#12FFF1" stop-opacity="0.4" />
            </linearGradient>
        </defs>
    </svg>
);


const PlusIconMobile = ({ className }: { className?: string }) => (
    <svg className={className} width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0.800781V40.8008M40 20.8008L0 20.8008" stroke="black" />
        <path d="M20 0.800781V40.8008M40 20.8008L0 20.8008" stroke="url(#paint0_linear_358_6816)" />
        <defs>
            <linearGradient id="paint0_linear_358_6816" x1="40" y1="20.6137" x2="41.2954" y2="21.3177" gradientUnits="userSpaceOnUse">
                <stop stop-color="#12FFF1" />
                <stop offset="1" stop-color="#12FFF1" stop-opacity="0.4" />
            </linearGradient>
        </defs>
    </svg>

);

const XIconMobile = ({ className }: { className?: string }) => (
    <svg className={className} width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.1421 0.65776L0.857865 28.942M29.1421 28.942L0.857866 0.657759" stroke="black" />
        <path d="M29.1421 0.65776L0.857865 28.942M29.1421 28.942L0.857866 0.657759" stroke="url(#paint0_linear_358_6811)" />
        <defs>
            <linearGradient id="paint0_linear_358_6811" x1="29.2744" y1="28.8097" x2="29.6925" y2="30.2235" gradientUnits="userSpaceOnUse">
                <stop stop-color="#12FFF1" />
                <stop offset="1" stop-color="#12FFF1" stop-opacity="0.4" />
            </linearGradient>
        </defs>
    </svg>
);

const faqData = [
    {
        question: "What is Antix?",
        answer: "Antix is an AI-powered SaaS platform that creates hyper-realistic and intelligent digital human avatars for digital interactions."
    },
    {
        question: "What problem does Antix solve?",
        answer: "Antix solves the problem of creating lifelike digital avatars for various digital interactions and applications."
    },
    {
        question: "Who is the target audience for Antix?",
        answer: "The target audience for Antix includes businesses and developers looking to integrate realistic digital humans into their applications or services."
    },
    {
        question: "What are digital humans?",
        answer: "Digital humans are AI-powered virtual beings that can interact with users in a human-like manner, often used in customer service, education, or entertainment applications."
    },
    {
        question: "How does Antix differ from other digital human platforms?",
        answer: "Antix differentiates itself through its advanced AI capabilities, hyper-realistic avatars, and flexible SaaS platform, allowing for easy integration and customization."
    }
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }: { question: string, answer: string, isOpen: boolean, toggleOpen: () => void }) => (
    <div className={styles.faqItemContainer} onClick={toggleOpen}>
        <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
            <button className={styles.questionButton}>
                <span className={styles.question}>{question}</span>
                {isOpen ? <XIconMobile className={styles.mobileIcon} /> : <PlusIconMobile className={styles.mobileIcon} />}
            </button>
            <div className={styles.answerContainer}>
                <p className={styles.answer}>{answer}</p>
            </div>
        </div>
        <div className={styles.icon}>
            {isOpen ? <XIcon className={styles.desktopIcon} /> : <PlusIcon className={styles.desktopIcon} />}
        </div>
    </div>
);

const FAQ = () => {
    const [openItemIndex, setOpenItemIndex] = useState<number>(0);

    const toggleItem = (index: number) => {
        setOpenItemIndex(prevIndex => prevIndex === index ? -1 : index);
    };

    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.faqTitle}>FAQ</h2>
            <div className={styles.faqList}>
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openItemIndex === index}
                        toggleOpen={() => toggleItem(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;