import {
  StyleSheet,
  TouchableOpacity,
  Text as RNText,
  ActivityIndicator,
} from "react-native";
import { black, purple, white } from "../../constants/Colors";

type ButtonProps = {
  variant: "Primary" | "Secondary";
  onPress: () => void;
  width?: number | string;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
};

const Button = ({
  variant,
  onPress,
  width,
  text,
  disabled,
  isLoading,
}: ButtonProps) => {
  const backgroundColor = variant === "Primary" ? purple : white;
  const borderColor = variant === "Primary" ? purple : black;
  const fontWeight = variant === "Primary" ? "bold" : "normal";

  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
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
      {isLoading ? (
        <ActivityIndicator size="large" color={black} />
      ) : (
        <RNText style={{ color: black, fontWeight: fontWeight }}>{text}</RNText>
      )}
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
