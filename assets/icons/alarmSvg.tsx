import Svg, { Ellipse, Path } from "react-native-svg";

const alarmIcon = (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M17.5001 4.35949L14.8751 2.5"
      stroke="#171717"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2.5 4.35949L5.125 2.5"
      stroke="#0A0A0A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Ellipse
      cx="10"
      cy="10.8334"
      rx="6.66667"
      ry="6.66667"
      stroke="#0A0A0A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M8.95837 9.16675H11.0417L8.95837 12.5001H11.0417"
      stroke="#0A0A0A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default alarmIcon;
