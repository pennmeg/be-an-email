import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Text, View } from "../../components/Themed";
import Slider from "@react-native-community/slider";

type SalariesType = { salary: number; people: number };

const MAX_MEETING_TIME = 8;
const MIN_MEETING_TIME = 0.25; // Quarter of an hour

export default function MeetingDetails({ navigation }) {
  const [meetingTime, setMeetingTime] = useState(0.25);
  const [attendees, setAttendees] = useState<SalariesType[]>([
    { salary: 100000, people: 1 },
  ]);

  function handleChange(
    index: number,
    value: number,
    type: "Salary" | "People"
  ) {
    let temp = [...attendees];
    let item = { ...temp[index] };
    switch (type) {
      case "Salary":
        item.salary = value;
        break;
      case "People":
        item.people = value;
        break;
    }
    temp[index] = item;
    setAttendees(temp);
  }

  function removeItem(index: number) {
    let temp = [...attendees];
    if (index > -1) {
      temp.splice(index, 1);
    }
    setAttendees(temp);
  }

  function addItem() {
    let temp = [...attendees];
    let newItem = { salary: 25000, people: 1 };
    temp.push(newItem);
    setAttendees(temp);
  }

  const formatDollar = Intl.NumberFormat("en-US");

  return (
    <View style={{ height: "100%", justifyContent: "space-between" }}>
      <ScrollView height={400}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.transparentBackground,
              ...styles.spacedRow,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Length of Meeting</Text>
            <Text>{`${meetingTime} hours`}</Text>
          </View>
          <Slider
            style={{ height: 50 }}
            minimumValue={MIN_MEETING_TIME}
            maximumValue={MAX_MEETING_TIME}
            value={meetingTime}
            step={0.25}
            onValueChange={(value) => setMeetingTime(value)}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={[styles.container, { marginTop: 8 }]}>
          <Text style={{ marginTop: 8, marginBottom: 8, fontWeight: "bold" }}>
            Attendees
          </Text>
          {attendees.map((a, index) => {
            return (
              <View
                key={`Attendee-${index}`}
                style={[
                  styles.section,
                  styles.transparentBackground,
                  { borderTopWidth: index === 0 ? 1 : 0 },
                ]}
              >
                <Text>Salary</Text>
                <TouchableOpacity
                  style={{
                    borderColor: "black",
                    backgroundColor: "white",
                    borderWidth: 1,
                    padding: 5,
                    marginTop: 8,
                    borderRadius: 3,
                  }}
                >
                  <Text>{`$${formatDollar.format(a.salary)}`}</Text>
                </TouchableOpacity>
                <View
                  style={{
                    ...styles.spacedRow,
                    ...styles.transparentBackground,
                    marginTop: 8,
                  }}
                >
                  <Text>Number of People</Text>
                  <Text>{`${a.people}`}</Text>
                </View>
                <Slider
                  style={{ height: 50 }}
                  minimumValue={1}
                  maximumValue={10}
                  value={a.people}
                  step={1}
                  onValueChange={(value) =>
                    handleChange(index, value, "People")
                  }
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#000000"
                />
                {index !== 0 && (
                  <TouchableOpacity
                    onPress={() => removeItem(index)}
                    style={{ position: "absolute", right: 0, top: 10 }}
                  >
                    <Text>X</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
          <TouchableOpacity
            onPress={() => addItem()}
            disabled={attendees.length === 10}
            style={{
              marginTop: 12,
              padding: 8,
              borderColor: "black",
              backgroundColor: "white",
              borderWidth: 1,
              width: "100%",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Text>Add Attendee</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MeetingResults", {
              meetingDetails: {
                meetingTime: meetingTime,
                attendeeInformation: attendees,
              },
            })
          }
          style={{
            padding: 8,
            borderColor: "black",
            borderWidth: 1,
            width: "100%",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <Text>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dedede",
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  tab: {
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inner: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 10,
    alignItems: "center",
    // shadow
  },
  content: {
    width: "100%",
    padding: 20,
  },
});
