import { StyleSheet, View, Text as RNText } from "react-native";
import { Fragment } from "react";
import PurpleText from "../../../components/PurpleText";

const Introduction = () => {
  return (
    <Fragment>
      <PurpleText
        purpleStyles={{
          height: 18,
          width: 320,
          top: 19,
          left: -2,
        }}
        marginOptions={{ marginHorizontal: 12, marginVertical: 12 }}
        textStyles={{ fontSize: 32, textAlign: "center", lineHeight: 38 }}
        text="We've all been there."
      />
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
  lineHeight: {
    lineHeight: 18,
  },
});

export default Introduction;
