import { StyleSheet, Image, ActivityIndicator, View } from "react-native";
import { useState, useEffect, Fragment } from "react";
import Button from "../../components/button/Button";
import { formatDollar, SalariesType } from "../../constants/Salaries";
import PurpleText from "../../components/PurpleText";
import { black, white } from "../../constants/Colors";
import { Text } from "../../components/Font";
import { screenWidth } from "../../constants/Layout";
// @ts-ignore
import UndrawImage from "../../assets/images/undraw_Celebration_re_kc9k.png";

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
  const [meetingTotal, setMeetingTotal] = useState<null | string>(null);

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
    const total = individualRatesPerMeeting.reduce((acc, curr) => {
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
        <ActivityIndicator size="large" color={black} />
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
            <Text>Your meeting cost approximately </Text>
            <Text isBold>{`$${meetingTotal}`}</Text>
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
    backgroundColor: white,
  },
});
