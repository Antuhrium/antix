import React, { useState } from 'react';
import styles from './TokenInfo.module.scss';

import ArrowButton from "../../../assets/svg/statistics/arrovButtom.svg";

interface PersonProps {
    backgroundImage: string;
    image: string;
    title: string;
    boldDescription: string;
    description: string;
    boldFirst?: boolean;
}

const TokenInfoCard: React.FC<PersonProps> = ({ backgroundImage, image, title, boldDescription, description, boldFirst = true }) => (
    <div
        className={styles.tokenInfoCard}
        style={{
            backgroundImage: `url(${backgroundImage})`,
        }}
    >
        <h3 className={styles.tokenInfoTitle}>{title}</h3>
        <div className={styles.descriptionContainer}>
            {boldFirst ? (
                <>
                    <span className={styles.boldDescription}>{boldDescription}</span>
                    {" "}
                    <span className={styles.description}>{description}</span>
                </>
            ) : (
                <>
                    <span className={styles.description}>{description}</span>
                    {" "}
                    <span className={styles.boldDescription}>{boldDescription}</span>
                </>
            )}
        </div>
        <img src={image} alt={title} className={styles.cornerImage} />
    </div>
);

const TokenInfo = () => {

    const [showAll, setShowAll] = useState(false);
    const allTokenInfos = [
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/sub.png',
            title: 'Subscriptions',
            boldDescription: 'Unlock premium tools',
            description: 'for digital creation with ANTIX.',
            boldFirst: true,
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/nft.png',
            title: 'NFT Auction & Promos',
            boldDescription: 'Lend or sell avatars and assets.',
            description: 'Promote to earn more.',
            boldFirst: false,
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/governance.png',
            title: 'Governance',
            boldDescription: 'Vote on creators and rewards.',
            description: 'Shape the future with ANTIX.',
            boldFirst: false,
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/asset.png',
            title: 'Asset Tuning',
            boldDescription: 'Upgrade your digital assets —',
            description: 'keep them trendy and fresh.',
            boldFirst: true,
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/staking.png',
            title: 'Staking',
            boldDescription: 'Stake your tokens and boost your rewards.',
            description: 'Higher stake, higher earnings.',
            boldFirst: false,
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/marketplace.png',
            title: 'Marketplace',
            boldDescription: 'Trade and customize',
            description: 'your digital assets in the marketplace.',
            boldFirst: true,
        },
    ];

    const handleWhitepaper = () => {
        window.open('https://docs.google.com/document/d/1MUKsG4wRnH_TPJUsxytRzHjXMu0DKzNU/edit?rtpof=true&sd=true');
    }

    const handleAudit = () => {
        window.open('https://antix.io/audit.pdf', '_blank');
    }

    const handleShowAll = () => {
        setShowAll(!showAll);
    }

    return (
        <div className={styles.container} id='AboutTokens'>
            <div className={styles.title}>ANTIX Token</div>

            <div className={styles.subheader}>
                <span className={styles.subheaderBoldText}>
                    ANTIX is central to the Antix ecosystem.
                </span>
                {' '}
                <span className={styles.subheaderText}>
                    Here's how the token creates value and drives demand within the platform
                </span>
            </div>

            <div className={styles.buttons}>
                <button onClick={handleWhitepaper}>Whitepaper</button>
                <button onClick={handleAudit}>Audit report</button>
            </div>

            <div className={styles.gridWrapper}>
                <div className={`${styles.infosGrid} ${showAll ? styles.showAll : ''}`}>
                    {showAll
                        ? allTokenInfos.map((tokenInfo, index) => (
                            <TokenInfoCard key={index} {...tokenInfo} />
                        ))
                        : <TokenInfoCard {...allTokenInfos[0]} />
                    }
                </div>
            </div>

                <button className={styles.btn} onClick={handleShowAll}>
                    {!showAll ? (
                        <>
                            {"See more"}
                            <span>
                                <img src={ArrowButton} alt="" />
                            </span>
                        </>
                    ) : (
                        <>
                            {"Hide Details "}
                            <span>
                                <img
                                    src={ArrowButton}
                                    alt=""
                                    style={{ transform: "rotate(180deg)" }}
                                />
                            </span>
                        </>
                    )}
                </button>

            {/* {!showAll ? (
                <button className={styles.showAllButton} onClick={handleShowAll}>
                    Show All
                </button>
            ) : (
                <button className={styles.showAllButton} onClick={handleShowAll}>
                    Show Less
                </button>
            )} */}
        </div>
    );
};

export default TokenInfo;