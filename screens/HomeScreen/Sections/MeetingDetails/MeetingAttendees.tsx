import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../../../components/Font";
import Slider from "@react-native-community/slider";
import Button from "../../../../components/button/Button";
import RemoveButton from "../../../../components/button/RemoveButton";
import { black, lightGrey, white } from "../../../../constants/Colors";
import { SalariesType } from "../../../../types/index";
import { formatDollar } from "../../../../constants/Salaries";
import { updateMeetingAttendees } from "../../../../utils/updateMeetingAttendees";

// TO DO #3 Add bottom sheet component and update input component
const MeetingAttendees = ({
  callBack,
  attendees,
  bottomSheet,
}: {
  callBack: (attendees: SalariesType[]) => void;
  attendees: SalariesType[];
  bottomSheet: (index: number) => void;
}) => {
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

  return (
    <View style={[styles.container, { marginTop: 8 }]}>
      <Text isBold style={{ marginTop: 8, marginBottom: 8 }}>
        Attendees
      </Text>
      {attendees.map((a, index) => {
        return (
          <View
            key={`Attendee-${index}`}
            style={[styles.section, { borderTopWidth: index === 0 ? 1 : 0 }]}
          >
            <Text>Salary</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => bottomSheet(index)}
            >
              <Text>{`$${formatDollar.format(a.salary)}`}</Text>
            </TouchableOpacity>
            <View
              style={{
                ...styles.spacedRow,
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
              onValueChange={(value) =>
                updateMeetingAttendees(
                  index,
                  value,
                  "People",
                  attendees,
                  callBack
                )
              }
              minimumTrackTintColor={black}
              maximumTrackTintColor={black}
            />
            {index !== 0 && (
              <RemoveButton
                accessibilityLabel="Remove Item"
                onPress={() => removeItem(index)}
                style={{ position: "absolute", right: 0, top: 10 }}
              />
            )}
          </View>
        );
      })}
      <Button
        onPress={() => addItem()}
        disabled={attendees.length === 10}
        text="Add Attendee"
        variant="Secondary"
      />
    </View>
  );
};

export default MeetingAttendees;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGrey,
    padding: 8,
    borderRadius: 8,
  },
  spacedRow: { flexDirection: "row", justifyContent: "space-between" },
  section: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: black,
  },
  input: {
    borderColor: black,
    backgroundColor: white,
    borderWidth: 1,
    padding: 5,
    marginTop: 8,
    borderRadius: 3,
  },
});
