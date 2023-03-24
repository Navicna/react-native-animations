import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconChevronDown = props => (
  <Svg
    width={14}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m6.667 5.284 5.087-4.95 1.453 1.414-6.54 6.364L.126 1.748 1.579.334l5.088 4.95Z"
      fill="#2D2D2D"
    />
  </Svg>
);

export default IconChevronDown;
