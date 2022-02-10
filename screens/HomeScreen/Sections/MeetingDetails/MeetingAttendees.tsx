import { StyleSheet, View } from "react-native";
import { Text } from "../../../../components/Font";
import Slider from "@react-native-community/slider";
import Button from "../../../../components/button/Button";
import RemoveButton from "../../../../components/button/RemoveButton";
import { black, lightGrey, white } from "../../../../constants/Colors";
import { formatDollar } from "../../../../constants/Salaries";
import { updateMeetingAttendees } from "../../../../utils/updateMeetingAttendees";
import { useMeetingDetails } from "../../../../hooks/useMeetingDetails";
import CircleButton from "../../../../components/button/TextButton";

const NUMBER_OF_PEOPLE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MeetingAttendees = () => {
  const { setAttendees, attendees } = useMeetingDetails();

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
            {/*  ----- START Number of People */}
            <Text>Number of People</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: 8,
              }}
            >
              {NUMBER_OF_PEOPLE.map((n: number) => {
                const isSelected = a.people === n;
                return (
                  <CircleButton
                    key={`Button--NumberOfPeople--${n}`}
                    text={n}
                    isSelected={isSelected}
                    onPress={() =>
                      updateMeetingAttendees(
                        index,
                        n,
                        "People",
                        attendees,
                        (a) => setAttendees(a)
                      )
                    }
                  />
                );
              })}
            </View>
            {/*  ----- END Number of People */}

            {/*  ----- START Salary  */}
            <View
              style={{
                ...styles.spacedRow,
                marginTop: 16,
              }}
            >
              <Text>Salary</Text>
              <Text>{`$${formatDollar.format(a.salary)}`}</Text>
            </View>
            <Slider
              testID={`Slider--Salary--${index}`}
              style={{ height: 50 }}
              minimumValue={25000}
              maximumValue={1000000}
              value={a.salary}
              step={25000}
              onValueChange={(value) =>
                updateMeetingAttendees(index, value, "Salary", attendees, (a) =>
                  setAttendees(a)
                )
              }
              minimumTrackTintColor={black}
              maximumTrackTintColor={black}
            />
            {/*  ----- END Salary  */}

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
