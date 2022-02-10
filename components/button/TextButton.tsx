import { TouchableOpacity, Text as RNText, StyleSheet } from "react-native";
import { black, purple, white } from "../../constants/Colors";

const TextButton = ({
  onPress,
  text,
  isSelected = false,
}: {
  onPress: () => void;
  text: any;
  isSelected?: boolean;
}) => {
  const isBold = isSelected ? "bold" : "normal";
  const isHighlighted = isSelected ? purple : white;
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isHighlighted }]}
      onPress={onPress}
    >
      <RNText style={{ fontWeight: isBold, color: black, textAlign: "center" }}>
        {text}
      </RNText>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    justifyContent: "center",
    margin: 4,
    padding: 8,
    borderRadius: 4,
  },
});
