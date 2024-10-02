import { AdvisorPerson, TeamPerson } from "../../mocdata";
import { isTeamPerson } from "../utils";
import styles from "./Details.module.scss";

export interface DetailsProps {
  data: TeamPerson | AdvisorPerson | null;
}

export const Details = (props: DetailsProps) => {
  const { data = null } = props;
  if (!data) return;
  const { image, name, linkedin } = data;
  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <button />
      </div>
      <div className={styles.header}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={styles.info}>
          <h4>{name}</h4>
          <span>{isTeamPerson(data) ? `${data.subRole}` : ""}</span>
        </div>
      </div>
      <div className={styles.list}>
        {isTeamPerson(data) &&
          data.info.map((text) => (
            <div className={styles.item}>
              <div className={styles.itemDot}>
                <div />
              </div>
              <p className={styles.itemText}>{text}</p>
            </div>
          ))}
      </div>

      <div
        onClick={() => window.open(linkedin, "_blank")}
        className={styles.linkedIn}
      >
        <svg
          width="77"
          height="77"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1222_8932)">
            <rect
              x="22.5"
              y="22.3633"
              width="39"
              height="39"
              rx="6.18672"
              stroke="url(#paint0_linear_1222_8932)"
            />
            <path
              d="M51.6294 51.4927V44.439C51.6294 40.9723 50.8831 38.3241 46.8386 38.3241C44.8886 38.3241 43.5886 39.3834 43.059 40.3945H43.0109V38.6371H39.1831V51.4927H43.1794V45.113C43.1794 43.4278 43.4923 41.8149 45.5627 41.8149C47.609 41.8149 47.6331 43.7167 47.6331 45.2093V51.4686H51.6294V51.4927ZM32.6831 38.6371H36.6794V51.4927H32.6831V38.6371ZM34.6812 32.2334C33.4053 32.2334 32.3701 33.2686 32.3701 34.5445C32.3701 35.8204 33.4053 36.8797 34.6812 36.8797C35.9572 36.8797 36.9923 35.8204 36.9923 34.5445C36.9923 33.2686 35.9572 32.2334 34.6812 32.2334Z"
              fill="#F0F0F0"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1222_8932"
              x="0.384432"
              y="0.247713"
              width="83.2311"
              height="83.2311"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10.8078" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.704167 0 0 0 0 1 0 0 0 0 0.98225 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1222_8932"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1222_8932"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1222_8932"
              x1="14.5161"
              y1="21.8633"
              x2="70.3685"
              y2="58.5821"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#12FFF1" />
              <stop offset="1" stop-color="#EDFFFE" stop-opacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
