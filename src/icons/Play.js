import Svg, { Path } from "react-native-svg";

const PlayIcon = (props) => (
  <Svg {...props} width={props.size || "10"} height={props.size || "11"} viewBox="0 0 10 11" fill="none">
    <Path d="M9.01628 4.43495C9.62528 4.82901 9.62528 5.72004 9.01628 6.11409L2.52372 10.3152C1.85836 10.7457 0.980469 10.2681 0.980469 9.47559V1.07345C0.980469 0.280947 1.85836 -0.196647 2.52372 0.233882L9.01628 4.43495Z" fill={props.color || "#22282F"} />
  </Svg>
);

export default PlayIcon;
