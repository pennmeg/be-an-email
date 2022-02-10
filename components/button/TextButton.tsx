import { TouchableOpacity, Text as RNText, StyleSheet } from "react-native";
import { black, purple, white } from "../../constants/Colors";

const CircleButton = ({
  onPress,
  text,
  isSelected = false,
}: {
  onPress: () => void;
  text: any;
  isSelected?: boolean;
}) => {
  const isBold = isSelected ? "bold" : "normal";
  const backgroundColor = isSelected ? purple : white;
  const borderColor = isSelected ? black : white;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor, borderColor: borderColor },
      ]}
      onPress={onPress}
    >
      <RNText style={{ fontWeight: isBold, color: black, textAlign: "center" }}>
        {text}
      </RNText>
    </TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    textAlign: "center",
    justifyContent: "center",
    margin: 4,
    padding: 8,
    borderRadius: 4,
    borderWidth: 2,
  },
});
