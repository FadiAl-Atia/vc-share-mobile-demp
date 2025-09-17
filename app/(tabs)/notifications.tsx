import NotificationCard from "@/components/notificationCard";
import type Notification from "@/models/Notification";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
export default function Index() {
  const [loaded] = useFonts({
    FrutigerArabicLight: require("../../assets/fonts/FrutigerLTArabic45Light.ttf"),
    FrutigerArabicRoman: require("../../assets/fonts/FrutigerLTArabic55Roman.ttf"),
    FrutigerArabicBold: require("../../assets/fonts/FrutigerLTArabic65Bold.ttf"),
  });

  if (!loaded) return null;

  const dummyNotification: Notification = {
    id: "123e67sh444",
    type: "RESERVATION_CONFIRMED",
    title: "تم تأكيد الموعد",
    message:
      "يقدم قسم الصحة النفسية في مستشفى الملك فيصل رعاية نفسية متخصصة، مع التركيز على مرضى زراعة الأعضاء.",
    createdAt: new Date(),
  };

  return (
    <View style={styles.layout}>
      <NotificationCard
        title={dummyNotification.title}
        createdAt={dummyNotification.createdAt}
        description={dummyNotification.message}
        isLast={false}
      ></NotificationCard>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
