import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Text, View } from "../components/Themed";
import Instructions from "./HomeScreen/Instructions";
import MeetingDetails from "./HomeScreen/MeetingDetails";

type TabProps = "Instructions" | "Details";

export default function HomeScreen({ navigation }) {
  const [showContent, setShowContent] = useState<TabProps>("Instructions");
  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>This Meeting Could Have Been An Email</Text>
      </View>
      <TouchableOpacity
        style={[styles.tab, { backgroundColor: "#c0aeff" }]}
        onPress={() => setShowContent("Instructions")}
      >
        <View style={[styles.inner, { backgroundColor: "#d6c9ff" }]}>
          <Text>Welcome</Text>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.content,
          {
            backgroundColor: "#d6c9ff",
            height: showContent === "Instructions" ? screenHeight - 190 : 0,
            padding: showContent === "Instructions" ? 20 : 0,
          },
        ]}
      >
        <Instructions />
      </View>
      <TouchableOpacity
        style={[styles.tab, { backgroundColor: "#d6c9ff" }]}
        onPress={() => setShowContent("Details")}
      >
        <View style={[styles.inner, { backgroundColor: "white" }]}>
          <Text>Meeting Details</Text>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.content,
          {
            height: showContent === "Details" ? screenHeight - 190 : 0,
          },
        ]}
      >
        <MeetingDetails navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
    backgroundColor: "#c0aeff",
  },
  header: {
    padding: 20,
    backgroundColor: "#c0aeff",
  },
  title: {
    fontSize: 20,
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
    alignItems: "center",
    // shadow
  },
  content: {
    width: "100%",
    padding: 20,
  },
});
