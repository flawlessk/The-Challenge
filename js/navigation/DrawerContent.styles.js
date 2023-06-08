import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  mainContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "#1F1F2F",
    paddingRight: "50%",
    paddingTop: "25%",
    paddingLeft: 24,
    marginTop: 30,
  },
  titleStyle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 38,
    alignSelf: "center",
    marginBottom: "30%",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "red",
    marginVertical: "28%",
  },
});
