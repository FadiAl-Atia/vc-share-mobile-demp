import ReservationCard from "@/components/reservationCard";
import useMyReservationArray from "@/hooks/useMyReservationArray";
import statusMap from "@/models/reservationStatusMap";
import serviceTypeMap from "@/models/serviceTypeMap";
import { ScrollView, StyleSheet, Text, View } from "react-native";
export default function Index() {
  const data = useMyReservationArray();

  return (
    <ScrollView contentContainerStyle={styles.layout}>
      <Text
        style={[
          styles.fontHeading,
          { marginBottom: 15, alignSelf: "flex-end", marginRight: 25 },
        ]}
      >
        مواعيدي
      </Text>
      <View
        style={{
          gap: 15,
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((reservation, index) => {
          return (
            <ReservationCard
              serviceType={serviceTypeMap.get(reservation.service.name)}
              speciality={reservation.speciality.name}
              status={statusMap.get(reservation.status)?.()}
              scheduledDate={reservation.scheduledDate}
              key={index}
              data={reservation}
              files={reservation.files}
            ></ReservationCard>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginTop: 50,
    alignItems: "center",
    paddingBottom: 80,
  },
  fontHeading: {
    fontFamily: "FrutigerArabicBold",
    fontSize: 24,
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
