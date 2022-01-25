import { StyleSheet, TouchableOpacity, Dimensions, View } from "react-native";
import { useState } from "react";
import { Text } from "../components/Themed";
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
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShowContent("Instructions")}
          style={[
            {
              backgroundColor: "#c0aeff",
            },
            styles.tab,
          ]}
        >
          <View style={[styles.inner, { backgroundColor: "#d6c9ff" }]}>
            <Text style={{ fontWeight: "bold" }}>Welcome</Text>
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.content,
            {
              backgroundColor: "#d6c9ff",
              height: showContent === "Instructions" ? screenHeight - 190 : 0,
              // padding: showContent === "Instructions" ? 20 : 0,
            },
          ]}
        >
          <Instructions />
        </View>
      </View>
      <View style={{ width: "100%", alignSelf: "baseline" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.tab, { backgroundColor: "#d6c9ff" }]}
          onPress={() => setShowContent("Details")}
        >
          <View style={[styles.inner, { backgroundColor: "white" }]}>
            <Text style={{ fontWeight: "bold" }}>Meeting Details</Text>
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.content,

            {
              height: showContent === "Details" ? screenHeight - 190 : 0,
              backgroundColor: "white",
            },
          ]}
        >
          <MeetingDetails navigation={navigation} />
        </View>
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
