import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ReplayIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4927 0.434534C12.805 0.706636 12.8376 1.18039 12.5655 1.49269L10.9957 3.2944C11.3215 3.26535 11.6563 3.25001 12 3.25001C17.3848 3.25001 21.75 7.61523 21.75 13C21.75 18.3848 17.3848 22.75 12 22.75C6.61522 22.75 2.25 18.3848 2.25 13C2.25 10.9967 2.85496 9.13251 3.89229 7.58282C4.1227 7.2386 4.58853 7.14634 4.93274 7.37675C5.27696 7.60716 5.36922 8.07299 5.13881 8.41721C4.26158 9.72771 3.75 11.303 3.75 13C3.75 17.5564 7.44365 21.25 12 21.25C16.5563 21.25 20.25 17.5564 20.25 13C20.25 8.44366 16.5563 4.75001 12 4.75001C11.5815 4.75001 11.1793 4.77614 10.7932 4.82441L12.9424 6.39439C13.2769 6.63872 13.35 7.10794 13.1056 7.44242C12.8613 7.77689 12.3921 7.84997 12.0576 7.60563L8.55759 5.04888C8.38795 4.92496 8.27806 4.73556 8.25466 4.52678C8.23127 4.318 8.29651 4.10898 8.43452 3.95058L11.4345 0.507328C11.7066 0.195024 12.1804 0.162433 12.4927 0.434534Z"
      fill="#836400"
    />
  </Svg>
);
export default ReplayIcon;