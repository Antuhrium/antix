import { useState } from 'react';
import styles from './RoadMap.module.scss';
import FadeIn from '../../components/FadeIn/FadeIn';

const circleIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
  <circle cx="6" cy="6" r="5.5" stroke="#12FFF1"/>
</svg>)

const RoadMap = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const features = [
    {
      icon: circleIcon,
      title: 'Digital Twin Creation:',
      description: 'Bring your virtual twin to life with advanced tools.',
    },
    {
      icon: circleIcon,
      title: 'Customization System:',
      description: 'Personalize every aspect of your digital human.',
    },
    {
      icon: circleIcon,
      title: 'Marketplace for Digital Human Assets:',
      description: 'Access a wide range of avatars, accessories, and more.',
    },
    {
      icon: circleIcon,
      title: 'AI-Powered Content Generation Tools:',
      description: 'Automate content creation with cutting-edge AI.',
    },
    {
      icon: circleIcon,
      title: 'Real-Time Live Streaming with Digital Twins:',
      description: 'Broadcast with hyper-realistic avatars live.',
    },
  ];


  const stage2Features = [
    {
      icon: circleIcon,
      title: "Environment Creation",
    },
    {
      icon: circleIcon,
      title: "Integration with Gaming and Media"
    },
    {
      icon: circleIcon,
      title: "Prompt Engineering",
    },
    {
      icon: circleIcon,
      title: "Character Animation",
    },
    {
      icon: circleIcon,
      title: "Mo-cap (Motion Capture)"
    },
    {
      icon: circleIcon,
      title: "Voice Recognition and Synthesis"
    }
  ]


  const stage3Features = [
    {
      icon: circleIcon,
      title: "Marketplaces and Brands Integration"
    },
    {
      icon: circleIcon,
      title: "Comprehensive API Integration"
    },
    {
      icon: circleIcon,
      title: "Automation and Personalization"
    },
    {
      icon: circleIcon,
      title: "Employee Support and Assistance"
    }
  ]

  return (
    <div className={styles.roadMap} id='RoadMap'>
      <FadeIn direction='up' distance={"50%"}>
        <h1 className={styles.title}>Road Map</h1>
      </FadeIn>
      <div className={styles.roadMapContent}>
        <div className={styles.test}>
          <div
            className={styles.stage1}
            onMouseEnter={() => setActiveStage(1)}
            onMouseLeave={() => setActiveStage(null)}
          >
          </div>
          <div
            className={styles.stage2}
            onMouseEnter={() => setActiveStage(2)}
            onMouseLeave={() => setActiveStage(null)}
          >
          </div>
          <div
            className={styles.stage3}
            onMouseEnter={() => setActiveStage(3)}
            onMouseLeave={() => setActiveStage(null)}
          >
          </div>
        </div>
        <div className={`${styles.features} ${styles.feature1} ${activeStage === 1 ? styles.active : ''}`}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}><strong>{feature.title}</strong></h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.features} ${styles.feature2} ${activeStage === 2 ? styles.active : ''}`}>
          {stage2Features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}><strong>{feature.title}</strong></h4>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.features} ${styles.feature3} ${activeStage === 3 ? styles.active : ''}`}>
          {stage3Features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}><strong>{feature.title}</strong></h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;