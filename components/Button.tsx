import { StyleSheet, TouchableOpacity, Text as RNText } from "react-native";

type ButtonProps = {
  variant: "Primary" | "Secondary";
  onPress: () => void;
  width?: number | string;
  text: string;
  disabled?: boolean;
};

const Button = ({ variant, onPress, width, text, disabled }: ButtonProps) => {
  const backgroundColor = variant === "Primary" ? "#A7A0FD" : "white";
  const borderColor = variant === "Primary" ? "#A7A0FD" : "black";
  const fontWeight = variant === "Primary" ? "bold" : "normal";

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        {
          width: width || "100%",
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
      ]}
    >
      <RNText style={{ color: "black", fontWeight: fontWeight }}>{text}</RNText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});
