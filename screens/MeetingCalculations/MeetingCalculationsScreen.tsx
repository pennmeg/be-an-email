import { StyleSheet, Image, ActivityIndicator, View } from "react-native";
import { useState, useEffect, Fragment } from "react";
import Button from "../../components/button/Button";
import { formatDollar } from "../../constants/Salaries";
import PurpleText from "../../components/PurpleText";
import { white } from "../../constants/Colors";
import { Text } from "../../components/Font";
import { screenWidth } from "../../constants/Layout";
import { getMeetingAmount } from "../../utils/getMeetingAmount";
import { useMeetingDetails } from "../../hooks/useMeetingDetails";
// @ts-ignore
import UndrawImage from "../../assets/images/undraw_Celebration_re_kc9k.png";

// TO DO: Fix navigation types
export default function MeetingCalculationsScreen({
  navigation,
}: {
  navigation: any;
}) {
  const { attendees, meetingTime, resetDefaults } = useMeetingDetails();

  const [isLoading, setIsLoading] = useState(true);
  console.log("---- isLoading", isLoading);
  const [meetingTotal, setMeetingTotal] = useState<null | number>(null);

  async function calculateMeeting() {
    console.log("--- calculateMeeting", attendees);
    const total = await getMeetingAmount({
      meetingTime: meetingTime,
      attendeeInformation: attendees,
    });

    setIsLoading(false);

    setMeetingTotal(total);
  }

  useEffect(() => {
    calculateMeeting();
  }, []);

  return (
    <View style={styles.container}>
      {/* {isLoading ? (
        <ActivityIndicator size="large" color={black} />
      ) : ( */}
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
          <Text>Your meeting cost is </Text>
          <Text isBold>
            {meetingTotal
              ? `$${formatDollar.format(meetingTotal)} (est.)`
              : "N/A"}
          </Text>
        </View>
        <Button
          variant="Primary"
          text="Go Home"
          width={"90%"}
          onPress={() => {
            resetDefaults();
            navigation.navigate("Home");
          }}
        />
      </Fragment>
      {/* )} */}
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
