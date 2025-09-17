import PaymentDetails from "@/components/paymentDetails";
import ReservationAttachedFiles from "@/components/reservationAttachedFiles";
import ReservationInfo from "@/components/reservationInfo";
import Movement from "@/components/timelineCard";
import buttonMap from "@/models/buttonsContainerMap";
import descriptionMap from "@/models/timelineDescriptionMap";
import statusMap from "@/models/reservationStatusMap";
import serviceTypeMap from "@/models/serviceTypeMap";
import statementMap from "@/models/statementMap";
import movementSvgMap from "@/models/timelineMapSvg";
import movementTitleMap from "@/models/timelineMapTitle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addHours, addMinutes, differenceInYears, format } from "date-fns";
import { arSA } from "date-fns/locale";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Index() {
  const { reservationDetails } = useLocalSearchParams();
  const { files } = useLocalSearchParams();
  const reservationData = JSON.parse(reservationDetails as string);

  let parsedFiles = [];
  try {
    parsedFiles = files ? JSON.parse(files as string) : [];
  } catch (error) {
    console.error("Error parsing files:", error);
    parsedFiles = [];
  }

  const setFilesOfReservationInStorage = async (filesToStore: any[]) => {
    try {
      const storageKey = `documents_${reservationData.id}`;

      const existingFilesString = await AsyncStorage.getItem(storageKey);
      const existingFiles = existingFilesString
        ? JSON.parse(existingFilesString)
        : [];

      const newFiles = filesToStore.filter(
        (newFile) =>
          !existingFiles.some(
            (existingFile: any) => existingFile.name === newFile.name
          )
      );

      const allFiles = [...existingFiles, ...newFiles];

      await AsyncStorage.setItem(storageKey, JSON.stringify(allFiles));

      console.log(
        `Added ${newFiles.length} new files. Total: ${allFiles.length}`
      );
    } catch (error) {
      console.error("Error storing files:", error);
    }
  };

  //Time
  function composeReservationDate<
    T extends { scheduledDate: string | Date; minutesFrom: number }
  >(reservation: T) {
    return addHours(
      addMinutes(reservation.scheduledDate, reservation.minutesFrom),
      8
    );
  }
  const scheduledDateTime = reservationData
    ? composeReservationDate({
        scheduledDate: reservationData.scheduledDate,
        minutesFrom: reservationData.minutesFrom,
      })
    : null;
  //formattedDate and formattedTime will be displayed.
  const formattedDate = scheduledDateTime
    ? format(scheduledDateTime, "EEEE - dd/MM/yyyy", {
        locale: arSA,
      })
    : "";
  const formattedTime = scheduledDateTime
    ? format(scheduledDateTime, "h:mm a", { locale: arSA })
    : "";

  useEffect(() => {
    console.log("useEffect called, parsedFiles:", parsedFiles);
    console.log("Reservation ID:", reservationData.id);

    // Only store if we have valid data
    if (reservationData.id) {
      setFilesOfReservationInStorage(parsedFiles);
    } else {
      console.log("No reservation ID found, skipping storage");
    }
  }, [parsedFiles, reservationData.id]);
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        alignItems: "center",
        paddingBottom: 32,
      }}
    >
      <Text
        style={{
          fontFamily: "FrutigerArabicBold",
          fontSize: 18,
          alignSelf: "flex-end",
          marginRight: 25,
        }}
      >
        {`الموعد رقم #${reservationData.reservationNumber}`}
      </Text>

      {/* First Container - Appointment Details */}
      <ReservationInfo
        reservationNumber={reservationData.reservationNumber}
        createdAt={reservationData.createdAt}
        doctorName={
          reservationData.doctor
            ? reservationData.doctor?.firstName +
              " " +
              reservationData.doctor?.lastName
            : "-"
        }
        serviceType={serviceTypeMap.get(reservationData.service.name)}
        speciality={reservationData.speciality.name}
        status={statusMap.get(reservationData.status)?.()}
        statement={statementMap.get(reservationData.status)?.(
          formattedDate,
          formattedTime
        )}
        buttonContainter={buttonMap.get(reservationData.status)?.()}
      ></ReservationInfo>
      {/* **************************************************************************************************************** */}
      {/* Second */}
      <ReservationAttachedFiles
        patientName={
          reservationData.user.profile.firstName +
          " " +
          reservationData.user.profile.lastName
        }
        patientAge={differenceInYears(
          new Date(),
          reservationData.user.profile.birthDate
        )}
        patientSex={reservationData.user.profile.gender}
        speciality={reservationData.speciality.name}
        filesCount={parsedFiles.length}
        filesArray={parsedFiles}
        reservationId={reservationData.id}
      ></ReservationAttachedFiles>
      {/* **************************************************************************************************************** */}
      {/* Third */}
      <PaymentDetails></PaymentDetails>
      {/*************************************************************************************************************** */}
      {/*Fourth Container */}
      <View style={[styles.container_1, { minHeight: 200, marginBottom: 30 }]}>
        <View style={styles.container_1_title_status}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontFamily: "FrutigerArabicBlack", fontSize: 18 }}>
              الحركات
            </Text>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                d="M21 7.5V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H8.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M16 2V6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M8 2V6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M3 10H8"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M17.5 17.5L16 16.3V14"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </View>
        {reservationData.timeline.map((movement: any, index: any) => {
          const finalDescriptionValue = descriptionMap.get(movement.type); //Confirmed
          let description = "";
          if (typeof finalDescriptionValue === "function") {
            if (movement.type === "REPORT_ATTACHED") {
              description = finalDescriptionValue(movement.id);
            } else {
              description = finalDescriptionValue(reservationData);
            }
          } else {
            description = finalDescriptionValue;
          }

          const appointmentCreatedTitle = movementTitleMap.get(movement.type);
          let title = "";
          if (typeof appointmentCreatedTitle === "function") {
            title = appointmentCreatedTitle(reservationData);
          } else {
            title = appointmentCreatedTitle;
          }

          return (
            <Movement
              key={index}
              title={title}
              movementSvg={movementSvgMap.get(movement.type)}
              isLast={index === reservationData.timeline.length - 1}
              description={description}
              createdAt={reservationData.timeline[index].createdAt}
            />
          );
        })}
      </View>
    </ScrollView>
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
});
