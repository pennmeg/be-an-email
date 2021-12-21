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

const MAX_MEETING_TIME = 480; // 8 hours
const MIN_MEETING_TIME = 15; // Quarter of an hour

export default function MeetingDetails({ navigation }) {
  const [meetingTime, setMeetingTime] = useState(15);
  const [attendees, setAttendees] = useState<SalariesType[]>([
    { salary: 100000, people: 1 },
    { salary: 200000, people: 1 },
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

  return (
    <View style={{ height: "100%", justifyContent: "space-between" }}>
      <ScrollView>
        <View>
          <Text>Length of meeting (in minutes)</Text>
          <Text>{`${meetingTime}`}</Text>
        </View>
        <Slider
          style={{ height: 40 }}
          minimumValue={MIN_MEETING_TIME}
          maximumValue={MAX_MEETING_TIME}
          value={meetingTime}
          step={15}
          onValueChange={(value) => setMeetingTime(value)}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
        />
        <Text>Attendees</Text>
        {attendees.map((a, index) => {
          return (
            <View
              key={`Attendee-${index}`}
              style={[styles.section, { borderTopWidth: index === 0 ? 1 : 0 }]}
            >
              <Text>Salary</Text>
              <TouchableOpacity
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  padding: 5,
                  marginTop: 8,
                  borderRadius: 3,
                }}
              >
                <Text>{a.salary}</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 8,
                }}
              >
                <Text>Number of People</Text>
                <Text>{`${a.people}`}</Text>
              </View>
              <Slider
                style={{ height: 40 }}
                minimumValue={1}
                maximumValue={10}
                value={a.people}
                step={1}
                onValueChange={(value) => handleChange(index, value, "People")}
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
        >
          <Text>Add Attendee</Text>
        </TouchableOpacity>
      </ScrollView>
      <View>
        <TouchableOpacity>
          <Text>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
    backgroundColor: "#c0aeff",
  },
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
