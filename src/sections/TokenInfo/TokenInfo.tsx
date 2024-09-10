import React, { useEffect, useRef } from 'react';
import styles from './TokenInfo.module.scss';

interface PersonProps {
    backgroundImage: string;
    image: string;
    title: string;
    boldDescription: string;
    description: string;
}

const TokenInfoCard: React.FC<PersonProps> = ({ backgroundImage, image, title, boldDescription, description }) => (
    <div
        className={styles.tokenInfoCard}
        style={{
            backgroundImage: `url(${backgroundImage})`,
        }}
    >
        <div className={styles.imageContainer}>
            <img src={image} alt={title} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.boldDescription}>{boldDescription}</p>
        <p className={styles.description}>{description}</p>
    </div >
);

const TokenInfo = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const TokenInfos = [
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/1.png',
            title: 'Subscriptions',
            boldDescription: 'Unlock premium tools',
            description: 'for digital creation with ANTIX.',
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/2.png',
            title: 'Marketplace',
            boldDescription: 'Trade and customize',
            description: 'your digital assets in the marketplace.',
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/3.png',
            title: 'Staking',
            boldDescription: 'Stake your tokens and boost your rewards.',
            description: 'Higher stake, higher earnings.',
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/4.png',
            title: 'Asset Tuning',
            boldDescription: 'Upgrade your digital assets —',
            description: 'keep them trendy and fresh.',
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/5.png',
            title: 'NFT Auction & Promos',
            boldDescription: 'Lend or sell avatars and assets.',
            description: 'Promote to earn more.',
        },
        {
            backgroundImage: '/tokeninfo/bg.png',
            image: '/tokeninfo/6.png',
            title: 'Governance',
            boldDescription: 'Vote on creators and rewards.',
            description: 'Shape the future with ANTIX.',
        },
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

            if (scrollLeft === 0) {
                scrollContainer.scrollLeft = scrollWidth / 3;
            } else if (scrollLeft + clientWidth >= scrollWidth - 1) {
                scrollContainer.scrollLeft = scrollWidth / 3;
            }
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <h1>Token Info</h1>
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

            <div className={styles.infiniteHorizontalScroll} ref={scrollRef}>
                {[...TokenInfos, ...TokenInfos, ...TokenInfos].map((info, index) => (
                    <TokenInfoCard key={index} {...info} />
                ))}
            </div>
        </div>
    );
};

export default TokenInfo;