import { Fragment } from "react";
import { View } from "react-native";
import MeetingLength from "./MeetingLength";
import MeetingAttendees from "./MeetingAttendees";
import Button from "../../../../components/button/Button";
import PurpleText from "../../../../components/PurpleText";

// TO DO: Fix navigation types
const MeetingDetails = ({ navigation }: { navigation: any }) => {
  return (
    <Fragment>
      <PurpleText
        marginOptions={{ marginTop: 12 }}
        text="Meeting Details"
        textStyles={{
          fontSize: 20,
          lineHeight: 24,
          paddingBottom: 10,
          textAlign: "left",
        }}
        purpleStyles={{
          height: 16,
          width: 180,
          top: 10,
          left: -4,
        }}
      />
      <MeetingLength />
      <MeetingAttendees />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
          paddingBottom: 50,
        }}
      >
        <Button
          onPress={() => navigation.navigate("MeetingResults")}
          text="Calculate"
          variant="Primary"
        />
      </View>
    </Fragment>
  );
};

export default MeetingDetails;
