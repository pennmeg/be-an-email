import { StyleSheet, View } from "react-native";
import { lightGrey } from "../../../constants/Colors";
import { Text } from "../../../components/Font";

const Instructions = () => {
  return (
    <View style={styles.greyBackground}>
      <Text fontSize="lg" isBold={true} style={styles.title}>
        Instructions
      </Text>
      <Text>1. Select the length of your meeting (in minutes).</Text>
      <Text>2. Choose up to 10 salary amounts.</Text>
      <Text>
        3. For each salary amount choose the number of individuals in that you
        estimate are in that band.
      </Text>
      <Text>
        4. Tap calculate and see the estimated amount of what that meeting cost.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greyBackground: {
    marginVertical: 12,
    backgroundColor: lightGrey,
    padding: 16,
    borderRadius: 8,
  },
  title: {
    paddingBottom: 10,
  },
});

export default Instructions;
