import { StyleSheet, Text, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontFamily: "open-sans-bold",
      fontSize: 24,
      color: "white",
      textAlign: "center",
      // NOTE: removed border from Title on ios devices.  Left code
      // below to show alternative ways of removing the border on
      // iOS devices, if you didn't want to create separate Title
      // component files for each device. Below may be easier if only changing one style.
      // borderWidth: Platform.OS === "ios" ? 0 : 2,
      // borderWidth: Platform.select({ ios: 0, android: 2 }),
      // borderColor: "white",
      padding: 12,
      maxWidth: "80%",
      width: 300,
    }
  });