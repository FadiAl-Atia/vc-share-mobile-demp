import PaymentDetails from "@/components/paymentDetails";
import ReservationAttachedFiles from "@/components/reservationAttachedFiles";
import ReservationInfo from "@/components/reservationInfo";
import Movement from "@/components/timelineCard";
import useReservationDataConfirmed from "@/hooks/useReservationDataConfirmed";
import descriptionMap from "@/models/descriptionMap";
import statusMap from "@/models/reservationStatusMap";
import serviceTypeMap from "@/models/serviceTypeMap";
import statementMap from "@/models/statementMap";
import movementSvgMap from "@/models/timelineMapSvg";
import movementTitleMap from "@/models/timelineMapTitle";
import { differenceInYears } from "date-fns";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
export default function Index() {
  const movementData = useReservationDataConfirmed();

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
        {`الموعد رقم #${movementData.reservationNumber}`}
      </Text>

      {/* First Container - Appointment Details */}
      <ReservationInfo
        reservationNumber={movementData.reservationNumber}
        createdAt={movementData.createdAt}
        doctorName={
          movementData.doctor.firstName + " " + movementData.doctor.lastName
        }
        serviceType={serviceTypeMap.get(movementData.service.name)}
        speciality={movementData.speciality.name}
        status={statusMap.get(movementData.status)?.()}
        statement={statementMap.get(movementData.status)?.()}
      ></ReservationInfo>
      {/* **************************************************************************************************************** */}
      {/* Second */}
      <ReservationAttachedFiles
        patientName={
          movementData.user.profile.firstName +
          " " +
          movementData.user.profile.lastName
        }
        patientAge={differenceInYears(
          new Date(),
          movementData.user.profile.birthDate
        )}
        patientSex={movementData.user.profile.gender}
        speciality={movementData.speciality.name}
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
        {movementData.timeline.map((movement, index) => {
          const finalDescriptionValue = descriptionMap.get(movement.type); //Confirmed
          let description = "";
          if (typeof finalDescriptionValue === "function") {
            if (movement.type === "REPORT_ATTACHED") {
              console.log("hi");
              description = finalDescriptionValue(movement.id);
            } else {
              console.log("whats");
              description = finalDescriptionValue(movementData);
            }
          } else {
            description = finalDescriptionValue;
          }

          const appointmentCreatedTitle = movementTitleMap.get(movement.type);
          let title = "";
          if (typeof appointmentCreatedTitle === "function") {
            title = appointmentCreatedTitle(movementData);
          } else {
            title = appointmentCreatedTitle;
          }

          return (
            <Movement
              key={index}
              title={title}
              movementSvg={movementSvgMap.get(movement.type)}
              isLast={index === movementData.timeline.length - 1}
              description={description}
              createdAt={movementData.timeline[index].createdAt}
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
