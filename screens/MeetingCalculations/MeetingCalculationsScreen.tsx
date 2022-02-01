import {
  StyleSheet,
  Text as RNText,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useState, useEffect, Fragment } from "react";
import { View } from "../../components/Themed";
import UndrawImage from "../../assets/images/undraw_Celebration_re_kc9k.png";
import Button from "../../components/Button";
import { SalariesType } from "../../constants/Salaries";
import PurpleText from "../../components/PurpleText";

// Average, FT, salaried employee works 40 hours a week
// Based on this, the average salaried person works 2,080 (40 x 52) hours a year
const HOURS_PER_YEAR = 2080;

type MeetingType = {
  meetingTime: number;
  attendeeInformation: SalariesType[];
};

type ScreenProps = {
  navigation: any;
  route: {
    params: {
      meetingDetails: MeetingType;
    };
  };
};

export default function MeetingCalculationsScreen({
  navigation,
  route,
}: ScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [meetingTotal, setMeetingTotal] = useState(null);

  const screenWidth = Dimensions.get("screen").width;

  const formatDollar = Intl.NumberFormat("en-US");

  function calculateMeeting(meetingDetails: MeetingType) {
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
          <PurpleText
            textStyles={{
              fontSize: 32,
              textAlign: "center",
              lineHeight: 38,
            }}
            purpleStyles={{
              height: 18,
              width: 270,
              top: 19,
              left: -2,
            }}
            text="Congratulations!"
            marginOptions={{ marginHorizontal: 12, marginVertical: 12 }}
          />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image width={screenWidth} source={UndrawImage} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <RNText>Your meeting cost approximately </RNText>
            <RNText style={{ fontWeight: "bold" }}>{`$${meetingTotal}`}</RNText>
          </View>
          <Button
            variant="Primary"
            text="Go Home"
            width={"90%"}
            onPress={() => navigation.navigate("Home")}
          />
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
  lineHeight: {
    lineHeight: 18,
  },
});
