import Card from "@/components/speciality-card";
import useAllSpecialities from "@/hooks/useAllSpecialities";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const allSpecialities = useAllSpecialities();
  return (
    <View style={styles.layout}>
      <Text
        style={{
          fontFamily: "FrutigerArabicBold",
          fontSize: 18,
          alignSelf: "flex-end",
          marginRight: 25,
          marginBottom: 15,
        }}
      >
        جميع التخصصات
      </Text>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.specialities}>
          {allSpecialities.map((speciality, key) => {
            return (
              <Card
                cardId={key.toString()}
                description={speciality.description}
                isActive={false}
                name={speciality.name}
                key={key}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 85,
  },
  container: {
    alignSelf: "center",
    width: "90%",
    marginBottom: 50,
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
  buttons: {
    flexDirection: "row",
    gap: 38,
    marginTop: 14,
    marginBottom: 18,
  },
  doctorReservation: {
    backgroundColor: "#21387E",
    height: 200,
    width: 312,
    marginTop: 15,
    borderRadius: 8,
    marginLeft: 18,
    padding: 15,
    textAlign: "right",
    direction: "rtl",
  },
  secondOpinion: {
    backgroundColor: "#02B5E5",
  },
  scrollContainer: {
    height: 230,
    marginTop: 15,
    marginBottom: 15,
  },
  quickButtons: {
    flexDirection: "row",
  },
  specialities: {
    width: "100%",
    marginTop: 15,
    gap: 15,
  },
  cardSpacing: {
    marginBottom: 15,
  },
});
