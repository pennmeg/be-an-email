import { Fragment, useState } from "react";
import { View } from "react-native";
import MeetingLength from "./MeetingLength";
import MeetingAttendees from "./MeetingAttendees";
import Button from "../../../../components/button/Button";
import PurpleText from "../../../../components/PurpleText";
import { getMeetingAmount } from "../../../../utils/getMeetingAmount";
import { Text } from "../../../../components/Font";
import { SalariesType } from "../../../../types/index";

// TO DO: Fix navigation types
const MeetingDetails = ({ navigation }: { navigation: any }) => {
  const [meetingTime, setMeetingTime] = useState(0.25);
  const [attendees, setAttendees] = useState<SalariesType[]>([
    { salary: 100000, people: 1 },
  ]);

  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleOnClick() {
    setButtonIsLoading(true);

    if (error) {
      setError(false);
    }

    try {
      const meetingTotal = getMeetingAmount({
        meetingTime: meetingTime,
        attendeeInformation: attendees,
      });

      setButtonIsLoading(false);

      navigation.navigate("MeetingResults", { meetingTotal: meetingTotal });
    } catch {
      setButtonIsLoading(false);
      setError(true);
    }
  }

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
        meetingTime={meetingTime}
        callBack={(value) => setMeetingTime(value)}
      />
      <MeetingAttendees
        attendees={attendees}
        callBack={(value) => setAttendees(value)}
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
          isLoading={buttonIsLoading}
          onPress={() => handleOnClick()}
          text="Calculate"
          variant="Primary"
        />
        {error && (
          <Text style={{ marginTop: 8 }}>
            Opps! Error calculating your meeting time.
          </Text>
        )}
      </View>
    </Fragment>
  );
};

export default MeetingDetails;
