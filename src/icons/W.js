import * as React from "react";
import Svg, {
  Rect,
  G,
  Defs,
  Pattern,
  Use,
  ClipPath,
  Image,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const WIcon = (props) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={18} height={18} fill="#F5F5F5" />
    <G clipPath="url(#clip0_0_1)">
      <Rect
        width={406}
        height={665}
        transform="translate(-63 -124)"
        fill="white"
      />
      <G filter="url(#filter0_d_0_1)">
        <Rect x={-22} y={-98} width={324} height={591} rx={20} fill="#2B3434" />
      </G>
      <Rect x={-22} y={-25} width={324} height={518} rx={20} fill="white" />
      <Rect x={-9} y={-11} width={37} height={37} rx={18.5} fill="#EDECF2" />
      <Rect width={18} height={18} fill="url(#pattern0)" />
    </G>
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_0_1" transform="scale(0.00416667)" />
      </Pattern>
      <ClipPath id="clip0_0_1">
        <Rect
          width={406}
          height={665}
          fill="white"
          transform="translate(-63 -124)"
        />
      </ClipPath>
      <Image
        id="image0_0_1"
        width={240}
        height={240}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default WIcon;
