import styles from "./DOP.module.scss";
import mainIcon from "./../../../../assets/images/sections/DOP/dopMain.png";

const topCards = [
  {
    title: "Scripts",
    image:
      "https://s3-alpha-sig.figma.com/img/c608/fc92/cd332181ec009d5f26569bc620394c71?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzZdGFo4~UuxgjdrIs284Jiy8ua8ELmUw7C1zXFmDLas6-mzZ1C6t5hftwgAyIvzYzFBNy7k2gMqVYkewzNnwGS2nx7Ecl40NjuMAich5yjruI7s91a-AG3MN7orGSQZUryRIZDpe~~z6YFDIGJ9U-hVD-7z~CVPQD6B3aDUd7Zd5vagXBWLqXolWTfQ5fY3VGPKua4W1MMusMQyKm8xBoG527BlfeAlUsjl8h9Vu0rnHVUOz3VnP3DfxEwYKBUBsvcyoxQ6LCm5Pbb9vw~PimuH08Mi27Bp6BFs2RLl2HayI7fQTAv4A-QXkGwY1sTxl-696d4FE72IzZGxhAyNOw__",
  },
  {
    title: "Eyes",
    image:
      "https://s3-alpha-sig.figma.com/img/2e44/0eb2/a179239d1a3c79107545492914fb41c2?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ePq7y8MM10BrG2kC1ooSEoCVE7vDZ~OxphOI7cG-gkwklxoRLd-qUb8euBKkU2kvtxfFowaNCZ9O5LKlIyQ5ST2tjdVnHiPqWXJNRh~r5NhCzDdUEO6IjE7frAXrWr1gkQadKcc9rnHeyHarZ2vm7Ezc2go2p6Nd9ewxWlstT-U7HMHdfTKOa7yOdXetMLumA68pFyxaSD4Qk~sMDE8lacL9YtC6yg5EHF8NeJQi0dUL0bxTzwPRe4pNjKIgtBasYXpDNCf8zL6h0qUTHEI8p7rNkwd~CIguTVJii8NPmoRkmX0AiWuUIju6wr~qjLkvfl95XCu61WuV51-JgkJwHQ__",
  },
  {
    title: "Voice",
    image:
      "https://s3-alpha-sig.figma.com/img/abb4/58f4/b512018571b7fe66ebb6b96d1c4150e5?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIbyezXWO29mZ8D0qD2HGwmmTAdDeTAgWJt3etCxKxNCfopGYtRIFWbmPrTYDZpo3R2EjfDTLCWgMC1Bd0S3UQNkNGw2ZbSYjaHMlziG4feT14WaDGRfgNDoTmqXA37Yu5PwHHimbjPsI0Fmm0N3--K~zKtkKXOg3ER-IXX2mzG8Np5nS4mVA-MeBxyorA6iH0vQgRWu404qwXYfRKlxDP~Vtv6D4JA4Tm-Iv21mtUuXipIFv6ICJN9RDadTgCFO3nZGm06aWH2B~i6N9LeDThYKRFH0PoJYMcpl7V-M-xD-9d73bMVCbVVSLtd6498y3FyA~3DjfMIBPHqKQ6whrA__",
  },
  {
    title: "Mimicry",
    image:
      "https://s3-alpha-sig.figma.com/img/3d64/c23b/7cf82aeb69d8a795f6b8bf4b9809c329?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lNVYiXWDfI5gz9lq17gE45rs5nhq~RnciLWBeuihDXvj7tW~pCNojIevtT~SNJ5LHMy5wwyQw38p06oiUpUVLEJE31BQzqKH11EWcZTpLwUr5MuKrFbcOc8gpeOR5jz1IRinrrtcqIZSdapkPwPHCp09RfzVQw61~SDSdjAe8C923ernDzTy~LaeWMVwUbr~WSFN4VxMt6fTjPbqNLMbYXTuQxDzjeFnYU3OPBZyy2H0EH1HElz-M8~K9ImHlV3Re8cqLO5Fz-3VyRRxB7mjv1z3Nr-6ssVg0nCbEnM6FohVzGOPwTwoHvi7c66GFnvvenGspc1Ae5Gvnp~X9jbRyA__",
  },
];
const bottomCards = [
  {
    title: "Environment",
    image:
      "https://s3-alpha-sig.figma.com/img/9fe7/fefd/b3aab1e3b1bb8b132b75e6323bac7529?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BENZIChslOCKH8nglR8JEILfYX1O6nf1CKB-3czNz4zo80K0bIaCdtzdM8hLSysZF7PqnDNY0FyO54Z78BIc5iPK6JjZvGNULukUXUJG3HV9oHhO2PVXy4wkyZWgOI~VZi7GNZ03h-WzI8YvLR8~04lTWCyhuqL-9EJ6qvpG8ZdOJE6BpAMnV~INODMoeRrcfva58AfIneVPWQ0YaykCFCH4noqEhKGIYdFS~5k2pUN8vCuVobDbb3Pup~9WDjghQBrqwFH6gbDQrwyioGvSbOqU~V4NZhpDp0SVjCg85a-r8cziouD3KwQ7Cs4vnhE459xBMypOEp0LBeu~f-m4fQ__",
  },
  {
    title: "Gestures",
    image:
      "https://s3-alpha-sig.figma.com/img/5af7/836e/53a12d19ee3d16fce1a36e4f8d33b656?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-SRJVpZ1gEI8b-qziCEQO5lIxM96gJZ5egTb8YmDxBCX7WvLCY-AQiK9cqmh6Aplwe1lSh9iRESkU~pwlwoY5Rs6IMxRklfdCBF215T8uyXut900dh8ZICQObcSityuIU6aGDWlElOFNJwgtNuTNEr3IWWwvoPycA7tvN7fa6X9tNBvPe0zdf2vKia39Xj0a1qhFQRi08G~9zUtNWYjS4LLBeNvAG~hD5njBVqKLg6xUnzL8Di9FWxTFyaOaq~DhV7nwXUyeNqYrh4MS-J9ojRRZa5x4hDS1l2TCLxEi-VVm0C8GKoWdHXwb72~HUAb2-mWRUV1Fw-fqmLlTo52cw__",
  },
  {
    title: "Clothes",
    image:
      "https://s3-alpha-sig.figma.com/img/bb1a/8f3b/0798d6f4b354d716fabc8fec0d2d73be?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EK2EA3zZTbz7mt19cKvK1yeJ7B-VGR-LSnyaEdvWpXs6Y4Z02kKrj5rlSWNxyfcCt3MkpC5v5MUJiD2r6QUsxZ5NgC-yNSE2mFq8tQs58L8KKcZKi4GS0TCGfCcQw0H9YwbHdSp8ulQP3lUoiGXas9mhf7Ftqa-On6pMVnNDdaRKKC2RO4aQWX0SZgEzklrX~9-1q4j8pwYTncQ7urSbeNk-TvN8p9e-s6m7WWvxReNm5QgUO9OjHK-c5iO8K5Pif9Xf-aGp5goWbKPjrcGUaxo2Z0y6nj8Ka1hUSNpXPxfTq8ZIQjyKefzFqC4BQkczwKkCk6VK-uQ-CJnQTmjq-g__",
  },
  {
    title: "Skin",
    image:
      "https://s3-alpha-sig.figma.com/img/953a/cf50/19aace7d45d2c0e9e55e2d39afacaba7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T7WN9uJ8xkFOwUaVrPUDK65UiRfd2jBh0-cE3ISyUlBiomSUxobQ0bL9aw8UyhlzML4bYZ45aqh21AR07A2utxgjCZmqCWzEuMP3-srwiDUqiWht4I52pPp3FrDthYoOLsG~WpzJ-Ni0u1ZXTVGxhPK88227y4IlB~VFmvgGxxwfCQPVGocJCWWHEx8WpUtDNtpSrbnfQDwWw5YrEIEbEbOToPNaPawK8DfHxx2iX0udA~uEbVmnPjzJTsQevWSPrp~Q0hbWuSjAlh69HBK1cWWcTMpBXjUMJpj~Mp9fmdFEt~5UohEbAW2BBPVwi3Xw8LCcf1rHxP53wDE~H386KA__",
  },
];

export const DOP = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        {topCards.map((card) => (
          <div className={styles.card}>
            <div style={{ backgroundImage: `url(${card.image})` }} />
            <span>{card.title}</span>
          </div>
        ))}
      </div>
      <div className={styles.center}>
        <img src={mainIcon} alt="" />
      </div>
      <div className={styles.bottom}>
        {bottomCards.map((card) => (
          <div className={styles.card}>
            <div style={{ backgroundImage: `url(${card.image})` }} />
            <span>{card.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
