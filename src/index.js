import React from "react";
import styles from "./styles.module.css";

export const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>React ArtBoard</div>
      <div className={styles.zoomableContainer}>
        <div className={styles.infiniteCanvas}>
          <div>
            <button>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
