import React from 'react';
import styles from './JoinUs.module.scss';
import FollowerCard from './FollowerCard';

const JoinUs: React.FC = () => {
    return (
        <div className={styles.joinUsContainer}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Join Us on Our Journey</h1>
                <p className={styles.subtitle}>
                    <span>Join our communities</span> and stay informed about Antix project progress
                </p>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.cardTopLeft}>
                    <FollowerCard platform="x" handle="@acronix" followers={44000} />
                </div>
                <div className={styles.cardBottomCenter}>
                    <FollowerCard platform="discord" handle="@acronix" followers={12000} />
                </div>
                <div className={styles.cardTopRight}>
                    <FollowerCard platform="telegram" handle="@acronix" followers={75000} />
                </div>
            </div>
        </div>
    );
};

export default JoinUs;