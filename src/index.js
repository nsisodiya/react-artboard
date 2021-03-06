import React from "react";
import styles from "./styles.module.css";

import Draggable from "react-draggable"; // The default
import { Star } from "./components/Star/Star";
import { MapInteractionCSS } from "react-map-interaction";

export const ExampleComponent = ({ text }) => {
  const { container, heading, zoomableContainer, infiniteCanvas } = styles;
  return (
    <div className={container}>
      <div className={heading}>React ArtBoard</div>
      <div className={zoomableContainer}>
        <MapInteractionCSS showControls maxScale={10}>
          <div className={`${infiniteCanvas}`}>
            <Draggable>
              <div>
                <Star />
              </div>
            </Draggable>
            <Draggable>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0
                }}
              >
                <Star />
              </div>
            </Draggable>
          </div>
        </MapInteractionCSS>
      </div>
    </div>
  );
};
