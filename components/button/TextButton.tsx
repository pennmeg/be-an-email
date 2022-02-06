import {
  TouchableOpacity,
  Text as RNText,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { black, purple } from "../../constants/Colors";

const TextButton = ({
  onPress,
  text,
  isSelected = false,
}: {
  onPress: () => void;
  text: any;
  isSelected?: boolean;
}) => {
  const fontColor = isSelected ? purple : black;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <RNText style={{ color: fontColor }}>{text}</RNText>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderBottomWidth: 1,
    marginVertical: 6,
  },
});
