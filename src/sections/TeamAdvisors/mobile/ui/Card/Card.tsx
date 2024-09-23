import { forwardRef } from "react";
import styles from "./Card.module.scss";
import { TeamItem } from "../../../mocdata";

export type CardProps = TeamItem;

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { name, subRole, linkedin, role, image } = props;
  return (
    <div ref={ref} className={styles.wrapper}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.info}>
        <span className={styles.role}>{role}</span>
        <div className={styles.disc}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M3.11223 0.831539L3.19944 0.767578C5.0189 2.89985 10.2023 8.69142 13.1832 8.69142C15.4858 8.69142 16.8117 5.30005 16.9922 4.81006L17.0973 4.84571C17.0973 4.84571 15.4434 9.34311 16.9977 10.528C18.5263 11.6931 24.9583 9.72616 25.5089 9.55669L25.5402 9.6586C25.5402 9.6586 18.1488 11.8445 17.6792 13.9279C17.3434 15.417 19.2684 17.5196 19.7823 18.0591L19.7049 18.1315C19.7049 18.1315 17.468 15.6928 15.8031 16.3745C13.3275 17.3887 11.912 24.481 11.7406 25.4797L11.6314 25.4597C11.6314 25.4597 13.1846 17.4676 9.2944 15.6751C7.10909 14.6675 1.71521 15.9532 0.859492 16.1614L0.828125 16.057C0.828125 16.057 8.37243 14.2181 8.37243 10.1756C8.37243 6.90367 3.11223 0.831539 3.11223 0.831539Z"
              fill="white"
            />
          </svg>
          <p>{name + (subRole ? `: ${subRole}` : "")}</p>
        </div>
        <div
          onClick={() => window.open(linkedin, "_blank")}
          className={styles.icon}
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
    </div>
  );
});
