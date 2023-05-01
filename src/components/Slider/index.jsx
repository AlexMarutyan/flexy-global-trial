import { Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";

const prices = [
  { price: "12.67", users: "1", words: "60,000" },
  { price: "32.67", users: "5", words: "200,000" },
  { price: "66", users: "5", words: "400,000" },
  { price: "132.67", users: "10", words: "800,000" },
  { price: "332.67", users: "12", words: "2,000,000" },
  { price: "666", users: "15", words: "4,000,000" },
];

const Slider = () => {
  const thumb = useRef();
  const level = useRef();
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState(0);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleMouseDown = () => {
    thumb.current.style.transition = "";
    level.current.style.transition = "";
  };

  const handleMouseUp = (event) => {
    const currentValue = event.target.value;
    const currentPosition = (currentValue / 20).toString();
    const numbersArray = currentPosition.split(".");

    thumb.current.style.transition = "left  linear 0.3s";
    level.current.style.transition = "width  linear 0.3s";

    if (!!numbersArray[1]) {
      if (numbersArray[1][0] < 5) {
        setValue(numbersArray[0] * 20);
      } else {
        setValue((+numbersArray[0] + 1) * 20);
      }
    }
  };

  useEffect(() => {
    if (Math.round(value / 20) !== price) {
      setPrice(Math.round(value / 20));
    }
  }, [value]);

  return (
    <>
      <Text
        gap={1}
        mb="50px"
        display="flex"
        fontWeight="700"
        fontSize="44px"
        alignItems="center"
      >
        {`$${prices[price]?.price}`}
        <Text as="span" fontSize="14px" opacity={0.5} fontWeight="normal">
          /month
        </Text>
      </Text>
      <div className={styles.slider}>
        <div className={styles.track}>
          <div className={styles.min}>60,000</div>
          <div className={styles.max}>4,000,000</div>
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={`${styles?.position} ${
                  value >= index * 20 ? styles[`pos_${index + 1}_active`] : ""
                }`}
                {...(index && { style: { left: `${index * 20}%` } })}
              />
            ))}
          <div
            ref={thumb}
            className={styles.thumb}
            style={{ left: `${value}%` }}
          />
          <div
            ref={level}
            className={styles.level}
            style={{ width: `${value}%` }}
          />
        </div>
        <input
          min="0"
          max="100"
          step="any"
          type="range"
          value={value}
          className={styles.input}
          onMouseUp={handleMouseUp}
          onChange={handleInputChange}
          onMouseDown={handleMouseDown}
        />
      </div>
      <Text
        gap={2}
        display="flex"
        fontSize="18px"
        fontWeight="500"
        alignItems="center"
      >
        {prices[price].words} words
        <Text
          as="span"
          bg="#e5e7eb"
          boxSize="3px"
          display="block"
          borderRadius="full"
        />
        <Text as="span" fontSize="16px" opacity={0.5} fontWeight="normal">
          {prices[price].users} {price ? "users" : "user" }
        </Text>
      </Text>
    </>
  );
};

export default Slider;
