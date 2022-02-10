import { StyleSheet, View } from "react-native";
import { Text } from "../../../../components/Font";
import Slider from "@react-native-community/slider";
import { black, lightGrey } from "../../../../constants/Colors";
import { useMeetingDetails } from "../../../../hooks/useMeetingDetails";

const MAX_MEETING_TIME = 8;
const MIN_MEETING_TIME = 0.25; // Quarter of an hour

const MeetingLength = () => {
  const { meetingTime, setMeetingTime } = useMeetingDetails();
  console.log("---- meetingTime", meetingTime);

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.spacedRow,
        }}
      >
        <Text isBold>Length of Meeting</Text>
        <Text>{`${meetingTime} hours`}</Text>
      </View>
      <Slider
        testID="Slider--MeetingTime"
        style={{ height: 50 }}
        minimumValue={MIN_MEETING_TIME}
        maximumValue={MAX_MEETING_TIME}
        value={meetingTime}
        step={0.25}
        onValueChange={(value) => setMeetingTime(value)}
        minimumTrackTintColor={black}
        maximumTrackTintColor={black}
      />
    </View>
  );
};

export default MeetingLength;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGrey,
    padding: 8,
    borderRadius: 8,
  },
  spacedRow: { flexDirection: "row", justifyContent: "space-between" },
});
