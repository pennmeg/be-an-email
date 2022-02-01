import { StyleSheet, Text as RNText, ScrollView } from "react-native";
import Instructions from "./Sections/Instructions";
import MeetingDetails from "./Sections/MeetingDetails/MeetingDetails";
import Introduction from "./Sections/Introduction";
import { RootStackScreenProps } from "../../types";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "white", padding: 20 }}>
      <RNText style={styles.title}>
        This Meeting Could Have Been An Email
      </RNText>
      <Introduction />
      <Instructions />
      <MeetingDetails navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingTop: 30,
    backgroundColor: "white",
  },

  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  tab: {
    width: "100%",
  },
  inner: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#18191A",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    width: "100%",
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
