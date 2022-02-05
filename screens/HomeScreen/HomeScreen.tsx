import { StyleSheet, ScrollView, Image, View } from "react-native";
import Instructions from "./Sections/Instructions";
import MeetingDetails from "./Sections/MeetingDetails/MeetingDetails";
import Introduction from "./Sections/Introduction";
import { white } from "../../constants/Colors";
import { Text } from "../../components/Font";
import { screenWidth } from "../../constants/Layout";
// @ts-ignore
import UndrawImage from "../../assets/images/undraw_Meeting_re_i53h.png";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: white, padding: 20 }}>
      <Text alignment="center" isBold fontSize="title" style={styles.title}>
        This Meeting Could Have Been An Email
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image width={screenWidth} source={UndrawImage} />
      </View>
      <Introduction />
      <Instructions />
      <MeetingDetails navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
  },
});
