import { StyleSheet, View, Text as RNText } from "react-native";
import { Fragment } from "react";

const Introduction = () => {
  return (
    <Fragment>
      <View style={styles.borderContainer}>
        <RNText style={styles.title}>We've all been there.</RNText>
        <View style={styles.purpleBorder}></View>
      </View>
      <View style={{ marginVertical: 12 }}>
        <RNText
          style={styles.lineHeight}
        >{`\u2022 Those meetings that could have been an email...`}</RNText>
        <RNText
          style={styles.lineHeight}
        >{`\u2022 The ones where you've wondered, "what am I doing here?"`}</RNText>
        <RNText
          style={styles.lineHeight}
        >{`\u2022 Meetings that ended with more meetings.`}</RNText>
      </View>
      <RNText style={styles.lineHeight}>
        We'll help you determine what those meetings cost (estimated), to help
        make better decisions for you and your team or provide data to share
        with leadership to help get more time in the flow.
      </RNText>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    lineHeight: 38,
  },
  lineHeight: {
    lineHeight: 18,
  },
  borderContainer: {
    position: "relative",
    justifyContent: "flex-start",
    paddingBottom: 8,
    marginHorizontal: 12,
    marginVertical: 12,
  },
  purpleBorder: {
    height: 18,
    width: 320,
    backgroundColor: "#A7A0FD",
    position: "absolute",
    top: 19,
    left: -2,
    zIndex: -1,
  },
});

export default Introduction;
