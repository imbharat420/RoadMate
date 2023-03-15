import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={48}
    height={48}
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#ffc107"
      d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
    />
    <Path
      fill="#ffe082"
      d="M24,8C15.15,8,8,15.15,8,24c0,8.85,7.15,16,16,16s16-7.15,16-16C40,15.15,32.85,8,24,8z"
    />
    <Path
      fill="#ffc107"
      d="M24 12c.295 0 .583.023.872.044L25.077 10h-2.369l.206 2.055C23.272 12.023 23.633 12 24 12zM17.446 13.95l-1.092-1.688c-.646.431-1.292.969-1.831 1.4l1.387 1.486C16.39 14.71 16.9 14.306 17.446 13.95zM21.065 12.375l-.512-1.944c-.754.215-1.508.431-2.154.754l.806 1.814C19.801 12.74 20.424 12.536 21.065 12.375zM14.548 16.615l-1.641-1.231c-.431.646-.862 1.292-1.292 1.831l1.85 1.028C13.78 17.668 14.147 17.128 14.548 16.615zM32.145 15.198l1.332-1.537c-.538-.538-1.185-.969-1.831-1.4l-1.092 1.688C31.121 14.32 31.65 14.74 32.145 15.198zM12.665 20.081l-1.912-.604c-.215.754-.431 1.508-.538 2.262l1.959.294C12.285 21.361 12.449 20.709 12.665 20.081zM34.555 18.279l1.721-.956c-.323-.754-.754-1.4-1.292-1.831l-1.52 1.14C33.869 17.151 34.24 17.697 34.555 18.279zM35.81 21.927l1.975-.296c-.108-.754-.323-1.508-.646-2.369l-1.854.683C35.514 20.583 35.691 21.244 35.81 21.927zM28.794 12.999l.806-1.814c-.646-.323-1.4-.538-2.154-.754l-.512 1.944C27.576 12.536 28.199 12.74 28.794 12.999zM32.09 32.852l1.387 1.486c.538-.538 1.077-1.185 1.508-1.723l-1.572-1.179C33.011 31.945 32.567 32.415 32.09 32.852zM34.556 29.721l1.721.956c.431-.646.754-1.4.862-2.262l-1.78-.562C35.14 28.501 34.877 29.128 34.556 29.721zM28.794 35.001l.806 1.814c.754-.323 1.4-.646 2.046-1.077l-1.092-1.688C29.997 34.414 29.41 34.733 28.794 35.001zM36 24c0 .668-.068 1.319-.173 1.957l1.957.412C37.892 25.615 38 24.862 38 24H36zM24.98 35.951L25.185 38c.754-.108 1.508-.215 2.262-.431l-.512-1.944C26.301 35.784 25.649 35.897 24.98 35.951zM17.446 34.05l-1.092 1.688c.646.431 1.292.754 2.046 1.077l.806-1.814C18.59 34.733 18.003 34.414 17.446 34.05zM12.633 27.831l-1.879.692c.323.754.646 1.508.969 2.154l1.7-1C13.108 29.09 12.848 28.471 12.633 27.831zM14.548 31.385l-1.641 1.231c.538.646 1.077 1.185 1.615 1.723l1.332-1.537C15.383 32.365 14.945 31.893 14.548 31.385zM21.092 35.632l-.538 2.045c.754.108 1.508.215 2.262.323l.215-2.046c-.007-.001-.015-.002-.022-.004C22.352 35.897 21.714 35.786 21.092 35.632zM12 24h-2c0 .754.108 1.615.215 2.261l1.959-.294C12.069 25.326 12 24.672 12 24zM27.6 26.9c0 2.8-2.7 3.2-3.2 3.2v1.6h-1.3v-1.6c-.4 0-3.5-.4-3.5-3.8H22c0 .4 0 2 1.8 2 1.5 0 1.5-1.2 1.5-1.4 0-2.6-5.2-1.5-5.2-5.5 0-2.5 2.2-3.2 3.2-3.2v-1.7h1.3v1.7c.8.1 3 .7 3 3.7h-2.3c0-.6-.2-1.9-1.5-1.9-1.4 0-1.4 1.2-1.4 1.4C22.5 23.8 27.6 22.8 27.6 26.9z"
    />
  </Svg>
);
export default SVGComponent;