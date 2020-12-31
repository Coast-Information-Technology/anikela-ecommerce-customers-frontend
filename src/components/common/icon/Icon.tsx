import React from "react";
import iconPath from "./icon-library";

interface IconProps {
  icon: string;
  size?: number;
  fill?: string;
  className?: string;
  style?: Object;
  viewBox?: string;
  title: string;
}

// some default styling
const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Icon: React.FC<IconProps> = (props) => {
  const { size, fill, icon, className, style, viewBox, title } = props;
  const styles = { ...defaultStyles, ...style };
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={title}
    >
      <title id={title}>{title}</title>
      <path fill={fill} d={iconPath[icon]} />
    </svg>
  );
};

// Default properties
Icon.defaultProps = {
  size: 16,
  fill: "currentColor",
  viewBox: "0 0 16 16",
  style: {},
  className: "",
};

export default Icon;
