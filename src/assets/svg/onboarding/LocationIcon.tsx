import * as React from 'react';
import Svg, { Ellipse, Path, G } from 'react-native-svg';
const SVGComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={78}
    height={78}
    viewBox="0 0 4000 4000"
    {...props}
  >
    <Ellipse cx={2000} cy={3028.596} fill="#fff" rx={562.679} ry={329.194} />
    <Path
      fill="#32506d"
      d="M2000,3383.218c-154.741,0-300.603-35.479-410.715-99.899 c-54.745-32.028-97.929-69.605-128.353-111.688c-32.54-45.01-49.04-93.134-49.04-143.035s16.5-98.025,49.04-143.035 c30.423-42.082,73.607-79.659,128.353-111.688c110.112-64.421,255.974-99.899,410.715-99.899s300.603,35.479,410.715,99.899 c54.745,32.028,97.93,69.605,128.354,111.688c32.54,45.01,49.039,93.134,49.039,143.035s-16.499,98.025-49.039,143.035 c-30.424,42.082-73.608,79.659-128.354,111.688C2300.603,3347.74,2154.741,3383.218,2000,3383.218z M2000,2724.83 c-145.853,0-282.594,33.006-385.034,92.938c-98.159,57.428-152.217,132.302-152.217,210.828s54.059,153.4,152.217,210.828 c102.44,59.933,239.181,92.938,385.034,92.938c145.853,0,282.594-33.006,385.034-92.938 c98.159-57.428,152.218-132.302,152.218-210.828s-54.059-153.4-152.218-210.828C2282.594,2757.835,2145.853,2724.83,2000,2724.83z"
    />
    <Path
      fill="#ff8e61"
      d="M2833.477,1475.686c0,755.633-780.502,1552.91-833.477,1552.91 c-52.975,0-833.477-818.467-833.477-1552.91c0-460.317,373.16-833.477,833.477-833.477S2833.477,1015.37,2833.477,1475.686z"
    />
    <Path
      fill="#32506d"
      d="M2000,3054.024c-10.22,0-23.894-3.331-68.051-43.146c-28.997-26.145-64.716-62.276-103.298-104.487 c-55.835-61.089-167.274-189.679-286.276-364.525c-116.276-170.841-209.333-340.42-276.589-504.025 c-82.739-201.271-124.691-390.406-124.691-562.153c0-115.94,22.713-228.426,67.508-334.332 c43.261-102.281,105.188-194.133,184.06-273.005c78.872-78.872,170.724-140.799,273.005-184.06 c105.906-44.794,218.392-67.507,334.332-67.507c115.94,0,228.426,22.713,334.332,67.507 c102.281,43.261,194.133,105.188,273.005,184.06s140.799,170.724,184.06,273.005c44.795,105.906,67.508,218.392,67.508,334.332 c0,404.827-218.25,807.607-401.339,1074.212c-118.725,172.879-230.386,299.536-286.379,359.647 c-38.488,41.318-74.227,76.725-103.352,102.393C2023.769,3050.774,2010.161,3054.024,2000,3054.024z M2000,667.637 c-445.56,0-808.049,362.489-808.049,808.049c0,374.058,206.543,760.51,379.812,1018.835 c84.93,126.623,184.024,254.669,279.028,360.552c81.369,90.688,131.503,134.179,149.338,145.942 c17.922-11.511,68.067-54.019,149.074-142.639c67.329-73.656,170.381-195.146,278.958-355.633 c173.303-256.156,379.888-642.274,379.888-1027.058C2808.049,1030.126,2445.56,667.637,2000,667.637z"
    />
    <G>
      <Path
        fill="#fff"
        d="M2260.047,1121.281c-124.834,0-229.525,85.057-260.047,200.292 c-30.522-115.234-135.213-200.292-260.047-200.292c-148.734,0-269.309,120.574-269.309,269.309 c0,434.838,529.357,713.798,529.357,713.798s529.357-278.959,529.357-713.798 C2529.357,1241.854,2408.783,1121.281,2260.047,1121.281z"
      />
      <Path
        fill="#32506d"
        d="M2000,2129.815c-4.072,0-8.145-0.978-11.854-2.933c-5.527-2.913-136.908-72.777-270.217-197.781 c-78.701-73.798-141.509-151.507-186.679-230.967c-57.088-100.426-86.034-203.899-86.034-307.544 c0-78.727,30.658-152.742,86.327-208.411c55.668-55.668,129.684-86.327,208.41-86.327c110.511,0,209.794,61.858,260.047,156.467 c50.253-94.609,149.536-156.467,260.047-156.467c78.728,0,152.742,30.658,208.411,86.327 c55.668,55.668,86.326,129.684,86.326,208.411c0,103.646-28.946,207.118-86.034,307.544 c-45.17,79.46-107.978,157.169-186.679,230.967c-133.31,125.004-264.689,194.869-270.217,197.781 C2008.145,2128.838,2004.073,2129.815,2000,2129.815z M1739.953,1146.708c-134.477,0-243.882,109.405-243.882,243.882 c0,215.52,139.564,391.629,256.644,501.415c105.79,99.199,212.357,163.41,247.277,183.301 c35.036-19.978,142.302-84.651,248.184-184.136c116.673-109.625,255.753-285.458,255.753-500.579 c0-134.477-109.405-243.882-243.882-243.882c-110.354,0-207.181,74.584-235.467,181.375c-2.954,11.151-13.044,18.917-24.58,18.917 s-21.626-7.766-24.58-18.917C1947.135,1221.292,1850.307,1146.708,1739.953,1146.708z"
      />
    </G>
  </Svg>
);
export default SVGComponent;