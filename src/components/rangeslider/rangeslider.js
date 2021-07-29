import React, { useState, useRef, useReducer } from "react";
import "./rangeslider.css";

const RangeSlider = ({min,max,value,onchange}) => {
  const getBubbleStyles = () => {
    const newValue = Number(((value - min) * 100) / (max - min));
    const newPosition = 10 - newValue * 0.2;
    return { left: `calc(${newValue}% + (${newPosition}px))` };
  };

  return (
    <div className="range-wrap">
      {value !== null && (
        <output className="range-value" style={getBubbleStyles()}>
          <span>{value}</span>
        </output>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onInput={onchange}
      />
    </div>
  );
};

export default RangeSlider;
