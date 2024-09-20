import React from 'react';
import styles from './JoinUs.module.scss';
import FollowerCard from './FollowerCard';
import FadeIn from '../../components/FadeIn/FadeIn';

const JoinUs: React.FC = () => {
    return (
        <div className={styles.joinUsContainer} id='Community'>
            <video className={styles.backgroundVideo} autoPlay muted loop>
                <source src="/videos/join-us-bg.mp4" type="video/mp4" />
            </video>
            <div className={styles.titleContainer}>
                <FadeIn direction='up' distance={"50%"}>
                    <h1 className={styles.title}>Join Us on Our Journey</h1>
                </FadeIn>
                <p className={styles.subtitle}>
                    <span>Join our communities</span> and stay informed about Antix project progress
                </p>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.cardTopLeft}>
                    <FadeIn direction='up' distance={"50%"} delay={0.2}>
                        <FollowerCard platform="x" link='https://x.com/antix_in' handle="@antix" followers={40900} />
                    </FadeIn>
                </div>
                <div className={styles.cardBottomCenter}>
                    <FadeIn direction='up' distance={"50%"} delay={0.4}>
                        <FollowerCard platform="discord" link="https://discord.com/invite/bKcMXChRRT" handle="@antix" followers={2015} />
                    </FadeIn>
                </div>
                <div className={styles.cardTopRight}>
                    <FadeIn direction='up' distance={"50%"} delay={0.6}>
                        <FollowerCard platform="telegram" link="https://t.me/antix_in" handle="@antix" followers={65819} />
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;