import * as React from 'react';
import {Svg, Circle} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    aria-label="More options"
    className="_ab6-"
    color="#b84d4d"
    fill="#b84d4d"
    height={24}
    role="img"
    viewBox="0 0 24 24"
    width={24}
    {...props}>
    <Circle cx={12} cy={12} r={1.5} />
    <Circle cx={6} cy={12} r={1.5} />
    <Circle cx={18} cy={12} r={1.5} />
  </Svg>
);
export default SVGComponent;
