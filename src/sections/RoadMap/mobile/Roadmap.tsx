import styles from './RoadMap.module.scss';

const RoadMap = () => {

  return (
    <div className={styles.roadMap} id='RoadMap'>
      <h1 className={styles.title}>Road Map</h1>
      <div className={styles.roadMapContent}>
        <img
          src="/roadmap/roadmapbg.png"
          alt="Roadmap background"
          className={styles.backgroundImage}
        />
      </div>
    </div>
  );
};

export default RoadMap;