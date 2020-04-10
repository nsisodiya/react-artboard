import React from "react";
import styles from "./styles.module.css";

import Draggable from "react-draggable"; // The default

export const ExampleComponent = ({ text }) => {
  const {
    container,
    heading,
    zoomableContainer,
    infiniteCanvas,
    star,
    zoom
  } = styles;
  return (
    <div className={container}>
      <div className={heading}>React ArtBoard</div>
      <div className={zoomableContainer}>
        <Draggable>
          <div className={`${infiniteCanvas}`}>
            <Draggable>
              <div
                style={{
                  display: "inline-block",
                  background: "white",
                  padding: 4,
                  border: "1px solid green"
                }}
              >
                <p>Drag Me</p>
                <p>
                  <i className={star} />
                  <i className={star} />
                  <i className={star} />
                </p>
                <button>Click me</button>
              </div>
            </Draggable>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0
              }}
            >
              <button>Click me</button>
              <p>
                <i className={star} />
                <i className={star} />
                <i className={star} />
              </p>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};
