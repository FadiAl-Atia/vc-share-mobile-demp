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
  "RESCHEDULED_BY_PATIENT",
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2AB25F"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M11 10v4h4" />
    <Path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
    <Path d="M16 2v4" />
    <Path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
    <Path d="M21 22v-4h-4" />
    <Path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
    <Path d="M3 10h4" />
    <Path d="M8 2v4" />
  </Svg>
);

movementSvgMap.set(
  "RESERVATION_CANCELED",
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Circle cx="12" cy="12" r="10" />
    <Path d="m4.9 4.9 14.2 14.2" />
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
movementSvgMap.set(
  "REPORT_ATTACHED",
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M8.10663 2.5H6.25C5.21447 2.5 4.375 3.33947 4.375 4.375V15.625C4.375 16.6605 5.21447 17.5 6.25 17.5H13.75C14.7855 17.5 15.625 16.6605 15.625 15.625V10M8.10663 2.5C9.14217 2.5 10 3.33947 10 4.375V6.25C10 7.28554 10.8395 8.125 11.875 8.125H13.75C14.7855 8.125 15.625 8.96447 15.625 10M8.10663 2.5C11.1816 2.5 15.625 6.96642 15.625 10"
      stroke="#171717"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default movementSvgMap;
