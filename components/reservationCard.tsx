import calendarIcon from "@/assets/icons/calendarSvg";
import { format } from "date-fns";
import { arSA } from "date-fns/locale";
import { router } from "expo-router";
import React, { JSX } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface reservationCardProps {
  speciality: string;
  serviceType: string;
  status: JSX.Element;
  scheduledDate: string | Date;
  data: any;
  files: any[];
}

export default function ReservationCard({
  speciality,
  serviceType,
  status,
  scheduledDate,
  data,
  files,
}: reservationCardProps) {
  return (
    <TouchableOpacity
      style={styles.container_1}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/reservationDetails",
          params: {
            reservationDetails: JSON.stringify(data),
            files: JSON.stringify(files),
          },
        })
      }
    >
      <View style={styles.container_1_title_status}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ fontFamily: "FrutigerArabicBold", fontSize: 16 }}>
            {`${speciality}`}
          </Text>
          {calendarIcon}
        </View>
      </View>

      <View style={styles.container_1_information}>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.informationTitleValue}>
            <Text style={styles.informationTitle}>نوع الخدمة : </Text>
          </Text>
          <View style={styles.serviceTypeContainer}>
            <Text style={styles.serviceType}>{`${serviceType}`}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.informationTitleValue}>
            <Text style={styles.informationTitle}> الحالة : </Text>
          </Text>
          {status}
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.informationTitleValue}>
            <Text style={styles.informationTitle}>تاريخ الموعد : </Text>
          </Text>
          <Text style={{ fontFamily: "FrutigerArabicBold" }}>
            {`${format(new Date(scheduledDate), "EEEE - dd/MM/yyyy", {
              locale: arSA,
            })} - ${format(new Date(scheduledDate), "h:mm a", {
              locale: arSA,
            })}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container_1: {
    width: "90%",
    marginTop: 11,
    borderRadius: 8,
    borderColor: "#E2E8F0",
    borderWidth: 2,
  },
  container_1_title_status: {
    flexDirection: "row-reverse",
    width: "100%",
    marginTop: 8,
    height: 32,
    paddingRight: 10,
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
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
  container_1_information: {
    minHeight: 100,
    width: "100%",
    marginTop: 8,

    alignItems: "flex-end",
    padding: 10,
    gap: 10,
  },
  informationTitle: {
    color: "#62748E",
    fontFamily: "FrutigerArabicBold",
  },
  informationTitleValue: {
    fontSize: 16,
    fontFamily: "FrutigerArabicBold",
  },
  serviceType: {
    color: "white",
    fontFamily: "FrutigerArabicBold",
    fontSize: 12,
  },
  serviceTypeContainer: {
    backgroundColor: "#21387E",
    borderRadius: 100,
    borderWidth: 0,
    padding: 6,
  },
});
