import { Fragment, useState } from "react";
import { View } from "react-native";
import MeetingLength from "./MeetingLength";
import MeetingAttendees from "./MeetingAttendees";
import Button from "../../../../components/button/Button";
import PurpleText from "../../../../components/PurpleText";
import { SalariesType } from "../../../../types/index";

// TO DO: Fix navigation types
const MeetingDetails = ({ navigation, openBottomSheet }) => {
  const [meetingTime, setMeetingTime] = useState(0.25);
  const [attendees, setAttendees] = useState<SalariesType[]>([
    { salary: 100000, people: 1 },
  ]);

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
      <MeetingLength
        callBack={(value) => setMeetingTime(value)}
        meetingTime={meetingTime}
      />
      <MeetingAttendees
        callBack={(value) => setAttendees(value)}
        bottomSheet={openBottomSheet}
        attendees={attendees}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
          paddingBottom: 50,
        }}
      >
        <Button
          onPress={() =>
            navigation.navigate("MeetingResults", {
              meetingDetails: {
                meetingTime: meetingTime,
                attendeeInformation: attendees,
              },
            })
          }
          text="Calculate"
          variant="Primary"
        />
      </View>
    </Fragment>
  );
};

export default MeetingDetails;
