import calendarIcon from "@/assets/icons/calendarSvg";
import useReservationDataConfirmed from "@/hooks/useReservationDataConfirmed";
import buttonMap from "@/models/buttonsContainerMap";
import { format } from "date-fns";
import { arSA } from "date-fns/locale";
import React, { JSX } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface reservationInfoProps {
  reservationNumber: number;
  speciality: string;
  createdAt: string;
  doctorName: string;
  serviceType: string;
  statement: JSX.Element;
  status: JSX.Element;
}

const data = useReservationDataConfirmed();

export default function Movement({
  reservationNumber,
  speciality,
  createdAt,
  doctorName,
  statement,
  serviceType,
  status,
}: reservationInfoProps) {
  return (
    <View style={styles.container_1}>
      <View style={styles.container_1_title_status}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ fontFamily: "FrutigerArabicBold", fontSize: 16 }}>
            {`${speciality}`}
          </Text>
          {calendarIcon}
        </View>
      </View>

      <View style={styles.container_1_information}>
        <Text style={styles.informationTitleValue}>
          <Text style={styles.informationTitle}>رقم الموعد :</Text> #
          {`${reservationNumber}`}
        </Text>
        <Text style={styles.informationTitleValue}>
          <Text style={styles.informationTitle}>تم الحجز بتاريخ : </Text>
          {`${format(new Date(createdAt), "PPPP", { locale: arSA })}`}
        </Text>
        <Text style={styles.informationTitleValue}>
          <Text style={styles.informationTitle}>طبيب الحالة : </Text>
          {`${doctorName}`}
        </Text>
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

        <Text style={styles.informationTitleValue}>
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.informationTitle}>السعر: </Text>
            <Text
              style={{
                fontFamily: "FrutigerArabicBold",
                textDecorationLine:
                  data.status === "CANCELLED" ? "line-through" : "none",
                color: data.status === "CANCELLED" ? "grey" : "black",
              }}
            >
              {" "}
              SAR160
            </Text>
            <View style={[styles.status, { borderWidth: 0 }]}>
              <Svg height="8" width="8">
                <Circle
                  cx={4}
                  cy={4}
                  r={4}
                  fill={data.status === "CANCELLED" ? "grey" : "#2B7FFF"}
                />
              </Svg>
              <Text
                style={{
                  color: data.status === "CANCELLED" ? "grey" : "#2B7FFF",
                  fontFamily: "FrutigerArabicLight",
                }}
              >
                {data.status === "CANCELLED" ? `مسترد` : `مدفوع`}
              </Text>
            </View>
          </View>
        </Text>
        {statement}
      </View>
      {buttonMap.get(data.status)?.()}
    </View>
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
    minHeight: 250,
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
  confirmedDate: {
    width: "100%",
    padding: 4,
    borderWidth: 1,
    borderColor: "#2AB25F",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 5,
  },
  buttonContainer: {
    backgroundColor: "lightgrey",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
