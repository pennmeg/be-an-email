import { StyleSheet, Text as RNText } from "react-native";
import { Fragment, useState } from "react";
import { Text, View } from "../../../../components/Themed";
import MeetingLength from "./MeetingLength";
import MeetingAttendees from "./MeetingAttendees";
import { SalariesType } from "../../../../constants/Salaries";
import { RootStackScreenProps } from "../../../../types";
import Button from "../../../../components/Button";

// 2F2E41 "black"
// F2F2F2

const MeetingDetails = ({ navigation }) => {
  const [meetingTime, setMeetingTime] = useState(0.25);
  const [attendees, setAttendees] = useState<SalariesType[]>([
    { salary: 100000, people: 1 },
  ]);

  return (
    <Fragment>
      <View style={styles.borderContainer}>
        <RNText style={styles.title}>Meeting Details</RNText>
        <View style={styles.purpleBorder}></View>
      </View>
      <MeetingLength
        callBack={(value) => setMeetingTime(value)}
        meetingTime={meetingTime}
      />
      <MeetingAttendees
        callBack={(value) => setAttendees(value)}
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

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
    paddingBottom: 10,
    textAlign: "left",
  },
  borderContainer: {
    position: "relative",
    justifyContent: "flex-start",
    paddingBottom: 8,
    marginTop: 12,
  },
  purpleBorder: {
    height: 16,
    width: 180,
    backgroundColor: "#A7A0FD",
    position: "absolute",
    top: 10,
    left: -4,
    zIndex: -1,
  },
  container: {
    backgroundColor: "#efefef",
    padding: 8,
    borderRadius: 8,
  },
  transparentBackground: { backgroundColor: "transparent" },
  spacedRow: { flexDirection: "row", justifyContent: "space-between" },
  section: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
