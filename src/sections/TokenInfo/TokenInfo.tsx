import React from 'react';
import styles from './TokenInfo.module.scss';

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
        <h3 className={styles.title}>{title}</h3>
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
    const TokenInfosLeft = [
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
    ];

    const TokenInfosRight = [
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
    ]

    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                {TokenInfosLeft.map((tokenInfo, index) => (
                    <TokenInfoCard key={index} {...tokenInfo} />
                ))}
            </div>

            <div className={styles.containerCenter}>
                <div className={styles.mark}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="314" viewBox="0 0 355 364" fill="none">
                        <path d="M32.937 0.942122L34.1888 0C60.3035 31.4076 134.701 116.715 177.486 116.715C210.535 116.715 229.566 66.7615 232.156 59.5442L233.664 60.0693C233.664 60.0693 209.927 126.314 232.236 143.768C254.174 160.929 346.494 131.956 354.396 129.46L354.846 130.961C354.846 130.961 248.757 163.159 242.016 193.846C237.196 215.78 264.826 246.751 272.202 254.697L271.091 255.764C271.091 255.764 238.985 219.843 215.089 229.884C179.556 244.823 159.24 349.29 156.78 364L155.213 363.706C155.213 363.706 177.505 245.985 121.67 219.582C90.3038 204.741 12.8856 223.679 0.603536 226.744L0.15332 225.207C0.15332 225.207 108.437 198.121 108.437 138.577C108.437 90.3823 32.937 0.942122 32.937 0.942122Z" fill="white" />
                    </svg>
                </div>
                <h1>ANTIX Token</h1>
                <div className={styles.buttons}>
                    <button>Whitepaper</button>
                    <button>Audit report</button>
                </div>
                <div className={styles.subheader}>
                    <span className={styles.subheaderBoldText}>
                        ANTIX is central to the Antix ecosystem.
                    </span>
                    {' '}
                    <span className={styles.subheaderText}>
                        Here's how the token creates value and drives demand within the platform
                    </span>
                </div>
            </div>

            <div className={styles.containerRight}>
                {TokenInfosRight.map((tokenInfo, index) => (
                    <TokenInfoCard key={index} {...tokenInfo} />
                ))}
            </div>
        </div>
    );
};

export default TokenInfo;