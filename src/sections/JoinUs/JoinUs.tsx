import React from 'react';
import styles from './JoinUs.module.scss';
import FollowerCard from './FollowerCard';

const JoinUs: React.FC = () => {
    return (
        <div className={styles.joinUsContainer} id='Community'>
            <video className={styles.backgroundVideo} autoPlay muted loop>
                <source src="/videos/join-us-bg.mp4" type="video/mp4" />
            </video>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Join Us on Our Journey</h1>
                <p className={styles.subtitle}>
                    <span>Join our communities</span> and stay informed about Antix project progress
                </p>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.cardTopLeft}>
                    <FollowerCard platform="x" link='https://x.com/antix_in' handle="@antix" followers={40900} />
                </div>
                <div className={styles.cardBottomCenter}>
                    <FollowerCard platform="discord" link="https://discord.com/invite/bKcMXChRRT" handle="@antix" followers={2015} />
                </div>
                <div className={styles.cardTopRight}>
                    <FollowerCard platform="telegram" link="https://t.me/antix_in" handle="@antix" followers={65819} />
                </div>
            </div>
        </div>
    );
};

export default JoinUs;