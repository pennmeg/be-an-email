import { StyleSheet, Text as RNText, View } from "react-native";

type ScreenProps = {
  text: string;
  purpleStyles: {
    height: number;
    width: number;
    top: number;
    left: number;
  };
  marginOptions?: {
    marginHorizontal?: number;
    marginVertical?: number;
    marginTop?: number;
    margin?: number;
  };
  textStyles: {
    fontSize: number;
    textAlign: "left" | "center";
    lineHeight: number;
    paddingBottom?: number;
  };
};

export default function PurpleText({
  text,
  purpleStyles,
  marginOptions,
  textStyles,
}: ScreenProps) {
  return (
    <View style={[styles.borderContainer, { ...marginOptions }]}>
      <RNText style={[styles.title, { ...textStyles }]}>{text}</RNText>
      <View style={[styles.purpleBorder, { ...purpleStyles }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  borderContainer: {
    position: "relative",
    justifyContent: "flex-start",
    paddingBottom: 8,
  },
  purpleBorder: {
    position: "absolute",
    backgroundColor: "#A7A0FD",
    zIndex: -1,
  },
});
