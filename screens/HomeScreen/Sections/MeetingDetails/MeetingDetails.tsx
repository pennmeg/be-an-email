import { Fragment, useState, useRef } from "react";
import { ScrollView, View } from "react-native";
import MeetingLength from "./MeetingLength";
import MeetingAttendees from "./MeetingAttendees";
import Button from "../../../../components/button/Button";
import PurpleText from "../../../../components/PurpleText";
import { SalariesType } from "../../../../types/index";
import RBSheet from "react-native-raw-bottom-sheet";
import { formatDollar, SALARIES } from "../../../../constants/Salaries";
import TextButton from "../../../../components/button/TextButton";
import { updateMeetingAttendees } from "../../../../utils/updateMeetingAttendees";

// TO DO: Fix navigation types
const MeetingDetails = ({ navigation }: { navigation: any }) => {
  const sheetRef = useRef();

  const [meetingTime, setMeetingTime] = useState(0.25);
  const [attendees, setAttendees] = useState<SalariesType[]>([
    { salary: 100000, people: 1 },
  ]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

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
        bottomSheet={(index) => {
          setSelectedIndex(index);
          sheetRef.current.open();
        }}
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
      <RBSheet ref={sheetRef}>
        <ScrollView style={{ padding: 6, paddingBottom: 0 }}>
          {SALARIES.map((s) => {
            const isSelected = attendees[selectedIndex].salary === s;
            return (
              <TextButton
                isSelected={isSelected}
                onPress={() => {
                  updateMeetingAttendees(
                    selectedIndex,
                    s,
                    "Salary",
                    attendees,
                    (value) => setAttendees(value)
                  );
                  sheetRef.current.close();
                }}
                text={`$${formatDollar.format(s)}`}
              />
            );
          })}
        </ScrollView>
        <View style={{ padding: 6 }}>
          <Button
            variant="Secondary"
            text="CANCEL"
            onPress={() => sheetRef.current.close()}
          />
        </View>
      </RBSheet>
    </Fragment>
  );
};

export default MeetingDetails;
