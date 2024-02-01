import Svg, { Rect } from "react-native-svg";

const DocIcon = (props) => (
  <Svg {...props} width="19" height="19" viewBox="0 0 19 19" fill="none">
    <Rect width="19" height="19" rx="2" fill="#FFD13D"/>
    <Rect x="3" y="4" width="13" height="2.2" fill="#2B3434"/>
    <Rect x="3" y="8.39999" width="13" height="2.2" fill="#2B3434"/>
    <Rect x="3" y="12.8" width="9.45455" height="2.2" fill="#2B3434"/>
  </Svg>
);

export default DocIcon;
