import { Button, ButtonText } from "@/components/ui/button";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [loaded] = useFonts({
    FrutigerArabicLight: require("../../assets/fonts/FrutigerLTArabic45Light.ttf"),
    FrutigerArabicRoman: require("../../assets/fonts/FrutigerLTArabic55Roman.ttf"),
    FrutigerArabicBold: require("../../assets/fonts/FrutigerLTArabic65Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={styles.layout}>
      <Button onPress={() => router.push("/cancelledStatus")}>
        <ButtonText>Go to Cancelled</ButtonText>
      </Button>
      <Button onPress={() => router.push("/needMoreFiles")}>
        <ButtonText>Go to Request More Files</ButtonText>
      </Button>
      <Button onPress={() => router.push("/waitingStatus")}>
        <ButtonText>Go to Waiting</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  fontHeading: {
    fontFamily: "FrutigerArabicBold",
    fontSize: 18,
    marginBottom: 0,
  },
  fontSubTitle: {
    fontFamily: "FrutigerArabicRoman",
    fontSize: 14,
    color: "#62748E",
    marginTop: 0,
  },
  servicePrice: {
    width: 203,
    height: 40,
    backgroundColor: "rgba(42, 178, 95, 0.05)",
    borderWidth: 1,
    borderColor: "#2AB25F",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 6,
  },
  buttons: {
    flexDirection: "row",
    gap: 38,
    marginTop: 14,
    marginBottom: 18,
  },
});
