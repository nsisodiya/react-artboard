import React from "react";
import styles from "./star.module.css";

export const Star = ({ text }) => {
  const { container, star } = styles;
  return (
    <div className={container}>
      <p>Drag Me</p>
      <p>
        <i className={star} />
        <i className={star} />
        <i className={star} />
      </p>
      <button>Click me</button>
    </div>
  );
};
