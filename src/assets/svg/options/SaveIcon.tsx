import * as React from 'react';
import Svg, {Polygon} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    aria-label="Save"
    className="_ab6-"
    color="#b84d4d"
    fill="#b84d4d"
    height={24}
    role="img"
    viewBox="0 0 24 24"
    width={24}
    {...props}>
    <Polygon
      fill="none"
      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);
export default SVGComponent;
