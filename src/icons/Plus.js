import Svg, { Path } from "react-native-svg";

const PlusIcon = (props) => (
  <Svg {...props} width={props.size || "14"} height={props.size || "14"} viewBox="0 0 14 14" fill="none">
    <Path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#FFF5D3"/>
  </Svg>
);

export default PlusIcon;
