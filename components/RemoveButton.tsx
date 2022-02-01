import {
  TouchableOpacity,
  Text as RNText,
  StyleProp,
  ViewStyle,
} from "react-native";

const RemoveButton = ({
  onPress,
  style,
  accessibilityLabel,
}: {
  onPress: () => void;
  style: StyleProp<ViewStyle>;
  accessibilityLabel: string;
}) => {
  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={style}
    >
      <RNText>X</RNText>
    </TouchableOpacity>
  );
};

export default RemoveButton;
