import Statement from "@/components/statement";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const statementMap = new Map();

statementMap.set("CONFIRMED", () => (
  <Statement
    text="وقت الموعد المؤكد: الأحد - 28/09/2025 - 12:00 م"
    statementStyles={{
      width: "100%",
      padding: 4,
      borderWidth: 1,
      borderColor: "#2AB25F",
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
      marginTop: 5,
    }}
    statementTextStyle={{
      fontFamily: "FrutigerArabicBold",
      color: "#2AB25F",
      textAlign: "right",
      fontSize: 13,
    }}
  ></Statement>
));

statementMap.set("CANCELLED", () => (
  <Statement
    text="تم الغاء الموعد من قبل المستخدم"
    statementStyles={{
      width: "100%",
      padding: 4,
      borderWidth: 1,
      borderColor: "red",
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
      marginTop: 5,
    }}
    statementTextStyle={{
      fontFamily: "FrutigerArabicBold",
      color: "red",
      textAlign: "right",
      fontSize: 13,
    }}
  ></Statement>
));

statementMap.set("NEED_MORE_FILES", () => (
  <Statement
    text="تم طلب معلومات اضافية من قبل الطبيب"
    statementStyles={{
      width: "100%",
      padding: 4,
      borderWidth: 1,
      borderColor: "#AD46FF",
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
      marginTop: 5,
    }}
    statementTextStyle={{
      fontFamily: "FrutigerArabicBold",
      color: "#AD46FF",
      textAlign: "right",
      fontSize: 13,
    }}
  ></Statement>
));

statementMap.set("WAITING", () => (
  <View
    style={{
      alignSelf: "center",
      width: "100%",
    }}
  >
    <Text
      style={{
        alignSelf: "flex-end",
        color: "#2AB25F",
        fontFamily: "FrutigerArabicBold",
        textDecorationLine: "underline",
      }}
    >
      متابعة لفرض تأكيد الطلب
    </Text>
    <Statement
      text="قيد المراجعة و سيتم اعلامك في حال التأكيد"
      statementStyles={{
        width: "100%",
        padding: 4,
        borderWidth: 1,
        borderColor: "#FF6900",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
      }}
      statementTextStyle={{
        fontFamily: "FrutigerArabicBold",
        color: "#FF6900",
        textAlign: "center",
        fontSize: 13,
        alignSelf: "center",
      }}
    ></Statement>
  </View>
));

export default statementMap;

const styles = StyleSheet.create({
  status: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: "#2AB25F",
    borderRadius: 100,
    paddingHorizontal: 8,
    justifyContent: "center",
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
  },
});
