import { ScrollView, Text as RNText, View } from "react-native";
import { Text } from "../../components/Themed";

export default function Instructions() {
  return (
    <ScrollView>
      <RNText
        style={{
          fontWeight: "bold",
          fontSize: 32,
          textAlign: "center",
          marginHorizontal: 12,
          marginVertical: 12,
          lineHeight: 38,
        }}
      >
        We've all been there.
      </RNText>
      <View style={{ marginVertical: 12 }}>
        <Text
          style={{ lineHeight: 18 }}
        >{`\u2022 Those meetings that could have been an email...`}</Text>
        <Text
          style={{ lineHeight: 18 }}
        >{`\u2022 The ones where you've wondered, "what am I doing here?"`}</Text>
        <Text
          style={{ lineHeight: 18 }}
        >{`\u2022 Meetings that ended with more meetings.`}</Text>
      </View>

      <Text style={{ lineHeight: 18 }}>
        We'll help you determine what those meetings cost (estimated), to help
        make better decisions for you and your team or provide data to share
        with leadership to help get more time in the flow.
      </Text>
      <View style={{ marginVertical: 12 }}>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              lineHeight: 24,
            }}
          >
            Instructions
          </Text>
          <View
            style={{
              height: 10,
              width: 140,
              backgroundColor: "white",
              position: "absolute",
              top: 14,
              left: -10,
              zIndex: -1,
            }}
          ></View>
        </View>

        <Text style={{ lineHeight: 18 }}>
          1. Select the length of your meeting (in minutes).{" "}
        </Text>
        <Text style={{ lineHeight: 18 }}>
          2. Choose up to 10 salary amounts
        </Text>
        <Text style={{ lineHeight: 18 }}>
          3. For each salary amount choose the number of individuals in that you
          estimate are in that band
        </Text>
        <Text style={{ lineHeight: 18 }}>
          4. Tap calculate and see the estimated amount of what that meeting
          cost
        </Text>
      </View>
    </ScrollView>
  );
}
