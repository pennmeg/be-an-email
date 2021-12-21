import { ScrollView } from "react-native";
import { Text, View } from "../../components/Themed";

export default function Instructions() {
  return (
    <ScrollView>
      <Text>We've all been there.</Text>
      <Text>{`\u2022 Those meetings that could have been an email`}</Text>
      <Text>{`\u2022 Ones where you've wondered, "what am I doing here?"`}</Text>
      <Text>{`\u2022 Meetings that have been a waste of time`}</Text>
      <Text>
        We'll help you determine what those meetings cost (estimated), to help
        make better decisions for you and your team or provide data to share
        with leadership to help get more time in the flow.
      </Text>
      <Text>Instructions</Text>
      <Text>1. Select the length of your meeting (in minutes). </Text>
      <Text>2. Choose up to 10 salary amounts</Text>
      <Text>
        3. For each salary amount choose the number of individuals in that you
        estimate are in that band
      </Text>
      <Text>
        4. Tap calculate and see the estimated amount of what that meeting cost
      </Text>
    </ScrollView>
  );
}
