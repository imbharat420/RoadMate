import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SVGComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    color="#b84d4d"
    fill="#b84d4d"
    {...props}>
    <Path d="M19.067,4.283a9.77,9.77,0,0,0-7.633-3.017A9.921,9.921,0,0,0,2.25,11.316V22a.75.75,0,0,0,1.114.656l3.567-1.981a3.083,3.083,0,0,1,2.343-.319,9.662,9.662,0,0,0,4.7.194,9.749,9.749,0,0,0,5.1-16.267ZM8,12a1,1,0,1,1,1-1A1,1,0,0,1,8,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,12Z" />
  </Svg>
);
export default SVGComponent;
