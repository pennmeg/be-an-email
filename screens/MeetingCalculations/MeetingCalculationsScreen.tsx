import { StyleSheet, Image, View } from "react-native";
import Button from "../../components/button/Button";
import { formatDollar } from "../../constants/Salaries";
import PurpleText from "../../components/PurpleText";
import { white } from "../../constants/Colors";
import { Text } from "../../components/Font";
import { screenWidth } from "../../constants/Layout";
// @ts-ignore
import UndrawImage from "../../assets/images/undraw_Celebration_re_kc9k.png";

// TO DO: Fix navigation types
export default function MeetingCalculationsScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: { params: { meetingTotal: number } };
}) {
  const total = route.params.meetingTotal;

  return (
    <View style={styles.container}>
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
          {total ? `${formatDollar.format(total)} (est.)` : "N/A"}
        </Text>
      </View>
      <Button
        variant="Primary"
        text="Go Back"
        width={"90%"}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
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
