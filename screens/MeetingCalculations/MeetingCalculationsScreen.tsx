import { StyleSheet, Image, ActivityIndicator, View } from "react-native";
import { useState, useEffect, Fragment } from "react";
import Button from "../../components/button/Button";
import { formatDollar } from "../../constants/Salaries";
import PurpleText from "../../components/PurpleText";
import { black, white } from "../../constants/Colors";
import { Text } from "../../components/Font";
import { screenWidth } from "../../constants/Layout";
// @ts-ignore
import UndrawImage from "../../assets/images/undraw_Celebration_re_kc9k.png";
import { getMeetingAmount } from "../../utils/getMeetingAmount";
import { MeetingType } from "../../types/index";

// TO DO: Fix navigation types
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
    const total = getMeetingAmount(meetingDetails);

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
