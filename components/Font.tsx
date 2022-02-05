import { Text as RNText } from "react-native";
import { black } from "../constants/Colors";

type FontSizes = "body" | "lg" | "title";

function getFontSize(size: FontSizes) {
  switch (size) {
    case "body":
      return 12;
    case "lg":
      return 20;
    case "title":
      return 24;
    default:
      return 12;
  }
}

function getLineHeight(size: FontSizes) {
  switch (size) {
    case "body":
      return 18;
    case "lg":
      return 24;
    case "title":
      return 24;
    default:
      return 18;
  }
}

type TextProps = {
  color?: string;
  fontSize?: FontSizes;
  children: any;
  isBold?: boolean;
  style?: {};
  alignment?: "left" | "center";
};

export function Text({
  children,
  isBold = false,
  fontSize = "body",
  color = black,
  alignment = "left",
  style,
}: TextProps) {
  const fontWeight = isBold ? "bold" : "normal";
  const size = getFontSize(fontSize);
  const lineHeight = getLineHeight(fontSize);

  return (
    <RNText
      style={{
        color: color,
        fontSize: size,
        lineHeight: lineHeight,
        fontWeight: fontWeight,
        textAlign: alignment,
        ...style,
      }}
    >
      {children}
    </RNText>
  );
}
