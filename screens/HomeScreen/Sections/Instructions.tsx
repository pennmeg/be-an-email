import { StyleSheet, View, Text as RNText } from "react-native";

const Instructions = () => {
  return (
    <View style={styles.greyBackground}>
      <RNText style={styles.title}>Instructions</RNText>
      <RNText style={styles.lineHeight}>
        1. Select the length of your meeting (in minutes).
      </RNText>
      <RNText style={styles.lineHeight}>
        2. Choose up to 10 salary amounts.
      </RNText>
      <RNText style={styles.lineHeight}>
        3. For each salary amount choose the number of individuals in that you
        estimate are in that band.
      </RNText>
      <RNText style={styles.lineHeight}>
        4. Tap calculate and see the estimated amount of what that meeting cost.
      </RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  greyBackground: {
    marginVertical: 12,
    backgroundColor: "#F2F2F2",
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
    paddingBottom: 10,
  },
  lineHeight: {
    lineHeight: 18,
  },
});

export default Instructions;
