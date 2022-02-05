import { View } from "react-native";
import { Fragment } from "react";
import { Text } from "../../../components/Font";
import PurpleText from "../../../components/PurpleText";

const bullet = `\u2022 `;

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
        <Text>{`${bullet} Those meetings that could have been an email...`}</Text>
        <Text>{`${bullet} The ones where you've wondered, "what am I doing here?"`}</Text>
        <Text>{`${bullet} Meetings that ended with more meetings.`}</Text>
      </View>
      <Text>
        We'll help you determine what those meetings cost (estimated), to help
        make better decisions for you and your team or provide data to share
        with leadership to help get more time in the flow.
      </Text>
    </Fragment>
  );
};

export default Introduction;
