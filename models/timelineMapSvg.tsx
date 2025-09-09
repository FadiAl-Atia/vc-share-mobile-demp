import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const movementSvgMap = new Map();

movementSvgMap.set(
  "RESERVATION_CREATED",
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
      stroke="#3B82F6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 2v4a2 2 0 0 0 2 2h4"
      stroke="#3B82F6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={8} cy={16} r={6} stroke="#3B82F6" strokeWidth={2} />
    <Path
      d="M9.5 17.5 8 16.25V14"
      stroke="#3B82F6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

movementSvgMap.set(
  "DOCTOR_ASSIGNED",
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21.801 10A10 10 0 1 1 17 3.335"
      stroke="#2AB25F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m9 11 3 3L22 4"
      stroke="#2AB25F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

movementSvgMap.set(
  "APPOINTMENT_CONFIRMED_BY_DOCTOR",
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8 2V6"
      stroke="#E76E50"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 2V6"
      stroke="#E76E50"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
      stroke="#E76E50"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 10H21"
      stroke="#E76E50"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default movementSvgMap;
