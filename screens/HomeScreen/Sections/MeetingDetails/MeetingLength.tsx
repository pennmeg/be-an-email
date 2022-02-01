import { StyleSheet, Text as RNText } from "react-native";
import { View } from "../../../../components/Themed";
import Slider from "@react-native-community/slider";

const MAX_MEETING_TIME = 8;
const MIN_MEETING_TIME = 0.25; // Quarter of an hour

const MeetingLength = ({
  callBack,
  meetingTime,
}: {
  callBack: (value: number) => void;
  meetingTime: number;
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.transparentBackground,
          ...styles.spacedRow,
        }}
      >
        <RNText style={{ fontWeight: "bold" }}>Length of Meeting</RNText>
        <RNText>{`${meetingTime} hours`}</RNText>
      </View>
      <Slider
        testID="Slider--MeetingTime"
        style={{ height: 50 }}
        minimumValue={MIN_MEETING_TIME}
        maximumValue={MAX_MEETING_TIME}
        value={meetingTime}
        step={0.25}
        onValueChange={(value) => callBack(value)}
        minimumTrackTintColor="#000"
        maximumTrackTintColor="#000"
      />
    </View>
  );
};

export default MeetingLength;

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
    backgroundColor: "#c0aeff",
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
  header: {
    padding: 20,
    backgroundColor: "#c0aeff",
  },
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
