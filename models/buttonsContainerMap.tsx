import alarmIcon from "@/assets/icons/alarmSvg";
import fileIcon from "@/assets/icons/filesSVg";
import leftArrowIcon from "@/assets/icons/leftArrowSvg";
import trashIcon from "@/assets/icons/trashSvg";
import ReservationButton from "@/components/reservationButton";
import { StyleSheet, View } from "react-native";

const buttonMap = new Map();

function cancelreservation() {
  console.log("Cancelled");
}
function goToReservation() {
  console.log("Going");
}
function goToNeededDocuments() {
  console.log("Heading to Documents");
}

buttonMap.set("CONFIRMED", () => {
  return (
    <View style={styles.buttonContainer}>
      <ReservationButton
        buttonText="الغاء الموعد"
        buttonStyles={{
          borderWidth: 1,
          borderColor: "red",
          backgroundColor: "white",
        }}
        buttonTextStyle={{
          fontFamily: "FrutigerArabicBold",
          color: "red",
        }}
        buttonSvg={trashIcon}
        onPressButton={cancelreservation}
        variant="outline"
      />
      <ReservationButton
        buttonText="الذهاب للموعد"
        buttonStyles={{
          backgroundColor: "#2AB25F",
        }}
        buttonTextStyle={{
          fontFamily: "FrutigerArabicBold",
          color: "white",
        }}
        buttonSvg={leftArrowIcon}
        onPressButton={goToReservation}
        variant="solid"
      />
    </View>
  );
});
buttonMap.set("CANCELLED", () => {
  return (
    <View style={[styles.buttonContainer, { opacity: 0, height: 40 }]}></View>
  );
});
buttonMap.set("NEED_MORE_FILES", () => {
  return (
    <View style={styles.buttonContainer}>
      <ReservationButton
        buttonText="عرض البيانات المطلوبة"
        buttonStyles={{
          borderWidth: 1,
          borderColor: "black",
          backgroundColor: "white",
        }}
        buttonTextStyle={{
          fontFamily: "FrutigerArabicBold",
          color: "black",
        }}
        buttonSvg={fileIcon}
        onPressButton={goToNeededDocuments}
        variant="outline"
      />
    </View>
  );
});
buttonMap.set("WAITING", () => {
  return (
    <View style={styles.buttonContainer}>
      <ReservationButton
        buttonText="تأجيل الموعد"
        buttonStyles={{
          borderWidth: 1,
          borderColor: "black",
          backgroundColor: "white",
        }}
        buttonTextStyle={{
          fontFamily: "FrutigerArabicBold",
          color: "black",
        }}
        buttonSvg={alarmIcon}
        onPressButton={goToNeededDocuments}
        variant="outline"
      />
      <ReservationButton
        buttonText="الغاء الموعد"
        buttonStyles={{
          borderWidth: 1,
          borderColor: "red",
          backgroundColor: "white",
        }}
        buttonTextStyle={{
          fontFamily: "FrutigerArabicBold",
          color: "red",
        }}
        buttonSvg={trashIcon}
        onPressButton={cancelreservation}
        variant="outline"
      />
    </View>
  );
});
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "lightgrey",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 80,
  },
});

export default buttonMap;
