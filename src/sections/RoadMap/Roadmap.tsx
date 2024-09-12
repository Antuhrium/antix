import styles from './RoadMap.module.scss';

const RoadMap = () => {
  const features = [
    {
      icon: (<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4 8.80078L19 10.8008L15.4 12.8008M15.4 8.80078L10 11.8008L4.6 8.80078M15.4 8.80078L19 6.80078L10 1.80078L1 6.80078L4.6 8.80078M4.6 8.80078L1 10.8008L4.6 12.8008M15.4 12.8008L19 14.8008L10 19.8008L1 14.8008L4.6 12.8008M15.4 12.8008L10 15.8008L4.6 12.8008" stroke="#12FFF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: 'Digital Twin Creation:',
      description: 'Bring your virtual twin to life with advanced tools.',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.80078C1 14.7713 5.02944 18.8008 10 18.8008C11.6569 18.8008 13 17.4576 13 15.8008V15.2008C13 14.8292 13 14.6434 13.0246 14.4879C13.1602 13.6321 13.8313 12.9609 14.6871 12.8254C14.8426 12.8008 15.0284 12.8008 15.4 12.8008H16C17.6569 12.8008 19 11.4576 19 9.80078C19 4.83022 14.9706 0.800781 10 0.800781C5.02944 0.800781 1 4.83022 1 9.80078Z" fill="#12FFF1" />
        <path d="M14 6.30078C14 6.57692 13.7761 6.80078 13.5 6.80078C13.2239 6.80078 13 6.57692 13 6.30078C13 6.02464 13.2239 5.80078 13.5 5.80078C13.7761 5.80078 14 6.02464 14 6.30078Z" fill="#12FFF1" />
        <path d="M9 5.30078C9 5.57692 8.77614 5.80078 8.5 5.80078C8.22386 5.80078 8 5.57692 8 5.30078C8 5.02464 8.22386 4.80078 8.5 4.80078C8.77614 4.80078 9 5.02464 9 5.30078Z" fill="#12FFF1" />
        <path d="M6 9.30078C6 9.57692 5.77614 9.80078 5.5 9.80078C5.22386 9.80078 5 9.57692 5 9.30078C5 9.02464 5.22386 8.80078 5.5 8.80078C5.77614 8.80078 6 9.02464 6 9.30078Z" fill="#12FFF1" />
        <path d="M13.5 6.30078H13.51M8.5 5.30078H8.51M5.5 9.30078H5.51M10 18.8008C5.02944 18.8008 1 14.7713 1 9.80078C1 4.83022 5.02944 0.800781 10 0.800781C14.9706 0.800781 19 4.83022 19 9.80078C19 11.4576 17.6569 12.8008 16 12.8008H15.4C15.0284 12.8008 14.8426 12.8008 14.6871 12.8254C13.8313 12.9609 13.1602 13.6321 13.0246 14.4879C13 14.6434 13 14.8292 13 15.2008V15.8008C13 17.4576 11.6569 18.8008 10 18.8008ZM14 6.30078C14 6.57692 13.7761 6.80078 13.5 6.80078C13.2239 6.80078 13 6.57692 13 6.30078C13 6.02464 13.2239 5.80078 13.5 5.80078C13.7761 5.80078 14 6.02464 14 6.30078ZM9 5.30078C9 5.57692 8.77614 5.80078 8.5 5.80078C8.22386 5.80078 8 5.57692 8 5.30078C8 5.02464 8.22386 4.80078 8.5 4.80078C8.77614 4.80078 9 5.02464 9 5.30078ZM6 9.30078C6 9.57692 5.77614 9.80078 5.5 9.80078C5.22386 9.80078 5 9.57692 5 9.30078C5 9.02464 5.22386 8.80078 5.5 8.80078C5.77614 8.80078 6 9.02464 6 9.30078Z" stroke="#151515" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: 'Customization System:',
      description: 'Personalize every aspect of your digital human.',
    },
    {
      icon: (<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17.8008C9 18.3531 8.55228 18.8008 8 18.8008C7.44772 18.8008 7 18.3531 7 17.8008C7 17.2485 7.44772 16.8008 8 16.8008C8.55228 16.8008 9 17.2485 9 17.8008Z" fill="#D9D9D9" />
        <path d="M20 17.8008C20 18.3531 19.5523 18.8008 19 18.8008C18.4477 18.8008 18 18.3531 18 17.8008C18 17.2485 18.4477 16.8008 19 16.8008C19.5523 16.8008 20 17.2485 20 17.8008Z" fill="#D9D9D9" />
        <path d="M6.30769 2.80078H21L19 9.80078H7.38462L6.30769 2.80078Z" fill="#12FFF1" />
        <path d="M6.2998 2.80078H6.30769M7.37675 9.80078H7.38462M20 13.8008H8L7.38462 9.80078M3 0.800781H6L6.30769 2.80078M3 5.80078H1M4 8.80078H1M5 11.8008H1M6.30769 2.80078H21L19 9.80078H7.38462M6.30769 2.80078L7.38462 9.80078M9 17.8008C9 18.3531 8.55228 18.8008 8 18.8008C7.44772 18.8008 7 18.3531 7 17.8008C7 17.2485 7.44772 16.8008 8 16.8008C8.55228 16.8008 9 17.2485 9 17.8008ZM20 17.8008C20 18.3531 19.5523 18.8008 19 18.8008C18.4477 18.8008 18 18.3531 18 17.8008C18 17.2485 18.4477 16.8008 19 16.8008C19.5523 16.8008 20 17.2485 20 17.8008Z" stroke="#12FFF1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: 'Marketplace for Digital Human Assets:',
      description: 'Access a wide range of avatars, accessories, and more.',
    },
    {
      icon: (<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 11.833L14.7998 8.36594M14.7998 8.36594C13.9553 7.47863 12.7887 6.92981 11.5 6.92981C8.92267 6.92981 6.83333 9.12506 6.83333 11.833C6.83333 14.541 8.92267 16.7363 11.5 16.7363C14.0773 16.7363 16.1667 14.541 16.1667 11.833C16.1667 10.4791 15.6443 9.25324 14.7998 8.36594ZM1.58333 11.833H1.595M11.5 1.41368H11.5117M21.4167 11.833H21.4283M4.5 4.4782H4.51167M18.5 4.4782H18.5117M4.5 19.1879H4.51167M18.5 19.1879H18.5117M2.16667 11.833C2.16667 12.1715 1.9055 12.4459 1.58333 12.4459C1.26117 12.4459 1 12.1715 1 11.833C1 11.4945 1.26117 11.2201 1.58333 11.2201C1.9055 11.2201 2.16667 11.4945 2.16667 11.833ZM12.0833 1.41368C12.0833 1.75218 11.8222 2.02659 11.5 2.02659C11.1778 2.02659 10.9167 1.75218 10.9167 1.41368C10.9167 1.07519 11.1778 0.800781 11.5 0.800781C11.8222 0.800781 12.0833 1.07519 12.0833 1.41368ZM22 11.833C22 11.4945 21.7388 11.2201 21.4167 11.2201C21.0945 11.2201 20.8333 11.4945 20.8333 11.833C20.8333 12.1715 21.0945 12.4459 21.4167 12.4459C21.7388 12.4459 22 12.1715 22 11.833ZM5.08333 4.4782C5.08333 4.8167 4.82217 5.0911 4.5 5.0911C4.17783 5.0911 3.91667 4.8167 3.91667 4.4782C3.91667 4.1397 4.17783 3.8653 4.5 3.8653C4.82217 3.8653 5.08333 4.1397 5.08333 4.4782ZM19.0833 4.4782C19.0833 4.1397 18.8222 3.8653 18.5 3.8653C18.1778 3.8653 17.9167 4.1397 17.9167 4.4782C17.9167 4.8167 18.1778 5.0911 18.5 5.0911C18.8222 5.0911 19.0833 4.8167 19.0833 4.4782ZM5.08333 19.1879C5.08333 19.5264 4.82217 19.8008 4.5 19.8008C4.17783 19.8008 3.91667 19.5264 3.91667 19.1879C3.91667 18.8494 4.17783 18.575 4.5 18.575C4.82217 18.575 5.08333 18.8494 5.08333 19.1879ZM19.0833 19.1879C19.0833 18.8494 18.8222 18.575 18.5 18.575C18.1778 18.575 17.9167 18.8494 17.9167 19.1879C17.9167 19.5264 18.1778 19.8008 18.5 19.8008C18.8222 19.8008 19.0833 19.5264 19.0833 19.1879Z" stroke="#12FFF1" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      ),
      title: 'AI-Powered Content Generation Tools:',
      description: 'Automate content creation with cutting-edge AI.',
    },
    {
      icon: (<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.65078V15.2008C0 16.4609 0 17.091 0.242208 17.5723C0.45526 17.9956 0.795217 18.3398 1.21335 18.5555C1.68871 18.8008 2.31099 18.8008 3.55556 18.8008H16.4444C17.689 18.8008 18.3113 18.8008 18.7866 18.5555C19.2048 18.3398 19.5447 17.9956 19.7578 17.5723C20 17.091 20 16.4609 20 15.2008V6.65078C20 5.39066 20 4.7606 19.7578 4.2793C19.5447 3.85594 19.2048 3.51173 18.7866 3.29602C18.3113 3.05078 17.689 3.05078 16.4444 3.05078H15.2726C15.136 3.05078 15.0677 3.05078 15.0047 3.04347C14.6759 3.00535 14.3811 2.82082 14.2003 2.54013C14.1657 2.48634 14.1352 2.42448 14.0741 2.30078C13.9519 2.05341 13.8908 1.92967 13.8215 1.82208C13.4601 1.2607 12.8704 0.891654 12.2128 0.815397C12.0868 0.800781 11.9502 0.800781 11.677 0.800781H8.32301C8.04982 0.800781 7.91322 0.800781 7.7872 0.815397C7.12965 0.891654 6.53989 1.2607 6.17846 1.82208C6.10919 1.92967 6.0481 2.05338 5.92593 2.30078C5.86485 2.42447 5.83429 2.48634 5.79966 2.54013C5.61894 2.82082 5.32407 3.00535 4.99529 3.04347C4.93228 3.05078 4.86398 3.05078 4.72738 3.05078H3.55556C2.31099 3.05078 1.68871 3.05078 1.21335 3.29602C0.795217 3.51173 0.45526 3.85594 0.242208 4.2793C0 4.7606 0 5.39066 0 6.65078ZM10 14.3008C11.841 14.3008 13.3333 12.7897 13.3333 10.9258C13.3333 9.06182 11.841 7.55078 10 7.55078C8.15905 7.55078 6.66667 9.06182 6.66667 10.9258C6.66667 12.7897 8.15905 14.3008 10 14.3008Z" fill="#12FFF1" />
      </svg>
      ),
      title: 'Real-Time Live Streaming with Digital Twins:',
      description: 'Broadcast with hyper-realistic avatars live.',
    },
  ];

  return (
    <div className={styles.roadMap} id='roadmap'>
      <h1 className={styles.title}>Road Map</h1>
      <div className={styles.roadMapContent}>
        <div className={styles.test}>
          {/* {stages.map((stage) => (
            <div key={stage.id} className={`${styles.stage} ${styles[`stage${stage.id}`]}`}>
              <div className={styles.stageContent}>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
              <div className={styles.stageIcon}>{stage.icon}</div>
            </div>
          ))} */}
        </div>
        <div className={styles.features}>
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
      </div>
    </div>
  );
};

export default RoadMap;