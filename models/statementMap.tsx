import Statement from "@/components/statement";
import useReservationDataConfirmed from "@/hooks/useReservationDataConfirmed";
import { format } from "date-fns";
import { arSA } from "date-fns/locale";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const statementMap = new Map();

const data = useReservationDataConfirmed();
statementMap.set("CONFIRMED", (date: string) => (
  <Statement
    text={`وقت الموعد المؤكد: ${format(
      new Date(date),
      "EEEE - dd/MM/yyyy - HH:mm",
      {
        locale: arSA,
      }
    )}`}
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
statementMap.set("ENDED", () => (
  <View
    style={{
      alignSelf: "center",
      width: "100%",
    }}
  >
    <Text
      style={{
        alignSelf: "flex-end",
        color: "#2B7FFF",
        fontFamily: "FrutigerArabicBold",
        textDecorationLine: "underline",
      }}
    >
      تحميل الوصفة الطبية
    </Text>
    <Statement
      text="انتهى الموعد بتاريخ: الثلاثاء - 25/3/2025 - 2:30PM"
      statementStyles={{
        width: "100%",
        padding: 4,
        borderWidth: 1,
        borderColor: "#62748E",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
      }}
      statementTextStyle={{
        fontFamily: "FrutigerArabicBold",
        color: "#62748E",
        textAlign: "center",
        fontSize: 13,
        alignSelf: "center",
      }}
    ></Statement>
  </View>
));
statementMap.set("EXPIRED", () => (
  <Statement
    text="انتهت صلاحية هذا الموعد."
    statementStyles={{
      width: "100%",
      padding: 4,
      borderWidth: 1,
      borderColor: "#f4f4f5",
      backgroundColor: "#f4f4f5",
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
    }}
    statementTextStyle={{
      fontFamily: "FrutigerArabicBold",
      color: "black",
      textAlign: "center",
      fontSize: 13,
      alignSelf: "center",
    }}
  ></Statement>
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
