import {
  StyleSheet,
  TouchableOpacity,
  Text as RNText,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useState, useEffect, Fragment } from "react";
import { View } from "../../components/Themed";
import UndrawImage from "../../assets/images/undraw_Celebration_re_kc9k.png";

// Average, FT, salaried employee works 40 hours a week
// Based on this, the average salaried person works 2,080 (40 x 52) hours a year
const HOURS_PER_YEAR = 2080;

export default function MeetingCalculationsScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [meetingTotal, setMeetingTotal] = useState(null);

  const screenWidth = Dimensions.get("screen").width;

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
          <View style={styles.borderContainer}>
            <RNText style={styles.title}>Congratulations!</RNText>
            <View style={styles.purpleBorder}></View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image width={screenWidth} source={UndrawImage} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <RNText>Your meeting cost approximately </RNText>
            <RNText style={{ fontWeight: "bold" }}>{`$${meetingTotal}`}</RNText>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              marginTop: 12,
              padding: 12,
              backgroundColor: "#A7A0FD",
              borderColor: "#A7A0FD",
              borderWidth: 1,
              width: "90%",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <RNText style={{ color: "black", fontWeight: "bold" }}>
              Go Home
            </RNText>
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
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    lineHeight: 38,
  },
  lineHeight: {
    lineHeight: 18,
  },
  borderContainer: {
    position: "relative",
    justifyContent: "flex-start",
    paddingBottom: 8,
    marginHorizontal: 12,
    marginVertical: 12,
  },
  purpleBorder: {
    height: 18,
    width: 270,
    backgroundColor: "#A7A0FD",
    position: "absolute",
    top: 19,
    left: -2,
    zIndex: -1,
  },
});
