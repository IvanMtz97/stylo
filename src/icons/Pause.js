import Svg, { Path } from "react-native-svg";

const PauseIcon = (props) => (
  <Svg {...props} width="6" height="8" viewBox="0 0 6 8" fill="none">
    <Path d="M2 8H0V0H2V8Z" fill="black"/>
    <Path d="M6 8H4V0H6V4V8Z" fill="black"/>
  </Svg>
);

export default PauseIcon;
