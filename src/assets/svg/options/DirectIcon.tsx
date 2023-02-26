import * as React from 'react';
import Svg, {Line, Polygon} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    aria-label="Share Post"
    className="_ab6-"
    color="#b84d4d"
    fill="#b84d4d"
    height={24}
    role="img"
    viewBox="0 0 24 24"
    width={24}
    {...props}>
    <Line
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      x1={22}
      x2={9.218}
      y1={3}
      y2={10.083}
    />
    <Polygon
      fill="none"
      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);
export default SVGComponent;
