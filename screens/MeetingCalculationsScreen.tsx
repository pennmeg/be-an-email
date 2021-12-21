import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect, Fragment } from "react";
import { Text, View } from "../components/Themed";
import Instructions from "./HomeScreen/Instructions";
import MeetingDetails from "./HomeScreen/MeetingDetails";

// Average, FT, salaried employee works 40 hours a week
// Based on this, the average salaried person works 2,080 (40 x 52) hours a year
const HOURS_PER_YEAR = 2080;

export default function MeetingCalculationsScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [meetingTotal, setMeetingTotal] = useState(null);

  const formatDollar = Intl.NumberFormat("en-US");

  function calculateMeeting(meetingDetails) {
    // Get all salaries to determine hourly rate based on salary
    const allSalaries = meetingDetails.attendeeInformation.map((a) => a.salary);
    const estimatedHourlyRates = allSalaries.map((s) => s / HOURS_PER_YEAR);

    // Take hourly rate and multiply it by number of people in meeting
    const individualHourlyRates = meetingDetails.attendeeInformation.map(
      (a, index) => {
        return a.people * estimatedHourlyRates[index];
      }
    );

    // Determine the amount per person in relationship to the meeting
    const individualRatesPerMeeting = individualHourlyRates.map((i) => {
      return i * meetingDetails.meetingTime;
    });

    // Get total and format into usable dollar amount
    const total = individualHourlyRates.reduce((acc, curr) => {
      return acc + curr;
    });

    setIsLoading(false);

    setMeetingTotal(formatDollar.format(total));
  }

  useEffect(() => {
    calculateMeeting(route.params.meetingDetails);
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <Fragment>
          <Text>Congratulations!</Text>
          <Text>{`You meeting cost approximately $${meetingTotal}`}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "white" }}>Go Home</Text>
          </TouchableOpacity>
        </Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    backgroundColor: "#c0aeff",
  },
  button: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 8,
    margin: 25,
    width: "90%",
  },
});
