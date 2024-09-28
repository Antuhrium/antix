import { useEffect, useRef, useState } from "react";
import styles from "./AABT.module.scss";

const cards = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/05d9/28ef/76377743df4b6ecc305eea49c0f496b6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O59xV0XEDEEqe7fuPDdb5zRw2KNFudhK1TGfWl-mH-Qq1Mn7TAgPIghmRGa-W7H1MwZIc1Fa2pj-SIefXQ0jMa5zlf8w2KmUExDOyHKKco1YB31dOzLHQbMTkwojCMMHDNbfNMgNp46cwtjSZhh6qvE1S5Chld7zurhSKeLGQ0cB8Nsrj06cZ~ICD8XgC6QfEgDkSB~tkHtW1fc4DWYIYTYmWBlb9iTuu7lowsiHXGCKhTbIR-t-Aa4zVR34rXN8Mtw-oQM5s~oKny4mazaTg0wJiykKhMXSEWybfntS~AS7tB1n7XfxhkHJFAiWF633c17kONAExPK8qteT5lQxOQ__",
    title: (
      <span className={styles.title}>
        Own It. Rule It.
        <br />
        Flip It.
      </span>
    ),
    description: (
      <p className={styles.description}>
        Build avatars with limitless custom options, locked with an{" "}
        <b>NFT "Passport."</b> You own every piece—trade, sell, or flaunt your
        digital assets.
      </p>
    ),
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f797/baec/86977dc1c1f30fbe59c4cdd5bd8cb1bb?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a0ond0HUNydSInqyvnV~um~etDp6AeB0munASFq6vwPkvsgm0W3FYT7QgZGHQbymQFfPFPRim0gGMTY9Hu-YoAd0KLVvhIsQ7F4rWsNZ2xhIRJmBDlBZBKc2~qb9H8d50XEfTc6aKVPyjfoumWHz3mdMsdvOB~5MNHn37N-pPM36LKNmUBwut3RH6ZlC7FHJo83BKyOocMjE42RjGI1ZO4o6VYrf1c5COMSY1io-pNEk~zxtyRhYLJraITfTQ4ZB2bfdENNwEdDdhxvBIeWx06~oyd5403pBCAFy7ieZWNGAlkgcly-wNAVBDBKTNAhPB8abK4s1jzxjs~4j18-o~A__",
    title: (
      <span className={styles.title}>
        Full Control,
        <br /> Max Profits
      </span>
    ),
    description: (
      <p className={styles.description}>
        <b>Rent, sell, or stream</b> your avatars. With blockchain backing you,
        the power to monetize in on your creations <b>is all yours.</b>
      </p>
    ),
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/4d0f/e61e/6465e526a6d85221f45b88bd93482c33?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ikZDk3hdMPSpch65u5Hc0ktBVUyFvqGh7YESWBOmFWV5obkd8-KxvvORvb3bir8-yWq6fzHJYPap5obJ810cUfDNtIU2HM3yVha9LyrSN1rxCJtUL7ecd-kVfFWLfqUXm4SyHHpqhqqawQa5h8-Ufk0XPPHL4uyfhlAocgkS32jm395WWBKwIdm69uEYBd19zcs5q02HFzW0mkjvdSffmEmXVr9waJPR-v~9h0mDSzzvK1JzO~svoEg-v7mpopHAY9ba~YpeCNMBVvt9b49i6GArxV6wXLDXNUMs3IjRvgBIcYnYh2k9gDL1NC9zpHMoSBXWUERFdZSOws-l-g8svg__",
    title: (
      <span className={styles.title}>
        AI-Powered Innovation <br />& Mass Adoption
      </span>
    ),
    description: (
      <p className={styles.description}>
        Antix’s platform combines cutting-edge{" "}
        <b>AI animation and blockchain</b>, ready to disrupt industries from
        entertainment to business at a global scale.
      </p>
    ),
  },
];

export const AABT = () => {
  // Состояние для управления высотой элемента
  const [isCollapsed, setIsCollapsed] = useState(true);
  // ---
  const collapsedRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const firstElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (collapsedRef.current && contentRef.current && firstElementRef.current) {
      if (isCollapsed) {
        collapsedRef.current.style.height = `${firstElementRef.current?.offsetHeight}px`;
      } else {
        collapsedRef.current.style.height = `${contentRef.current.offsetHeight}px`;
      }
    } else {
      console.error("Что то пошло не так");
    }
  }, [isCollapsed]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 500) {
        if (isCollapsed) setIsCollapsed(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={collapsedRef} className={styles.collapsed}>
        <div ref={contentRef} className={styles.cards}>
          {cards.map((card, key) => (
            <div
              key={key}
              ref={key === 0 ? firstElementRef : undefined}
              className={styles.card}
            >
              <div
                className={styles.logo}
                style={{ backgroundImage: `url(${card.image})` }}
              />
              {card.title}
              {card.description}
            </div>
          ))}
        </div>
      </div>
      <button
        className={styles.actionBtn}
        onClick={() => setIsCollapsed((prevState) => !prevState)}
      >
        {isCollapsed ? <span>See more</span> : <span>Hide Details</span>}
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: !isCollapsed ? "rotate(180deg)" : "",
          }}
        >
          <rect
            x="0.533333"
            y="0.65931"
            width="30.9333"
            height="30.9333"
            rx="4.26667"
            stroke="url(#paint0_linear_1222_6100)"
            stroke-width="1.06667"
          />
          <g opacity="0.7">
            <path
              d="M8.53516 12.9259L16.0018 20.3926L23.4685 12.9259"
              stroke="#F0F0F0"
              stroke-width="1.06667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1222_6100"
              x1="-5.9871"
              y1="0.125976"
              x2="38.6948"
              y2="29.501"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#12FFF1" />
              <stop offset="1" stop-color="#0F0F0F" stop-opacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};
