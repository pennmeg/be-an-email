import { StyleSheet, TouchableOpacity, Text as RNText } from "react-native";
import { Text, View } from "../../../../components/Themed";
import Slider from "@react-native-community/slider";
import { SalariesType } from "../../../../constants/Salaries";

const MeetingAttendees = ({
  callBack,
  attendees,
}: {
  callBack: (attendees: SalariesType[]) => void;
  attendees: SalariesType[];
}) => {
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
    callBack(temp);
  }

  function removeItem(index: number) {
    let temp = [...attendees];
    if (index > -1) {
      temp.splice(index, 1);
    }
    callBack(temp);
  }

  function addItem() {
    let temp = [...attendees];
    let newItem = { salary: 25000, people: 1 };
    temp.push(newItem);
    callBack(temp);
  }

  const formatDollar = Intl.NumberFormat("en-US");

  return (
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
              testID={`Slider--NumberOfPeople--${index}`}
              style={{ height: 50 }}
              minimumValue={1}
              maximumValue={10}
              value={a.people}
              step={1}
              onValueChange={(value) => handleChange(index, value, "People")}
              minimumTrackTintColor="#000"
              maximumTrackTintColor="#000"
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
  );
};

export default MeetingAttendees;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
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