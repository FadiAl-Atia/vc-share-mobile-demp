import Card from "@/components/speciality-card";
import SpecialityModal from "@/components/specialityModal";
import useLandingPageRecords from "@/hooks/useLandingPageSpecialities";
import Speciality from "@/models/Speciality";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const landingPageSpecialities = useLandingPageRecords();

  const storeSpecialityInStorage = async (specilaity: Speciality) => {
    await AsyncStorage.setItem("specialityModal", JSON.stringify(specilaity));
    console.log(`Speciality : ${specilaity.name} has been stored`);
    openModal();

    const stored = await AsyncStorage.getItem("specialityModal");
    console.log(`The current stored is ${stored}`);
  };

  const pressableFunction = () => {
    console.log("A pressable");
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.layout}>
        <Text style={{ fontFamily: "FrutigerArabicBold", fontSize: 18 }}>
          خيارات سريعة
        </Text>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.quickButtons}
            showsHorizontalScrollIndicator={false}
            contentOffset={{ x: 300, y: 0 }}
          >
            <View style={[styles.doctorReservation, styles.secondOpinion]}>
              <Text
                style={{
                  fontFamily: "FrutigerArabicBold",
                  fontSize: 18,
                  color: "white",
                }}
              >
                احصل على رأي طبي ثانٍ
              </Text>
              <Text
                style={{
                  fontFamily: "FrutigerArabicRoman",
                  fontSize: 14,
                  marginBottom: 8,
                  color: "white",
                }}
              >
                تأكد من تشخيصك مع أطباء متخصصين
              </Text>
              <Text
                style={{
                  fontFamily: "FrutigerArabicRoman",
                  fontSize: 14,
                  color: "white",
                }}
              >
                لا تدع الشك يؤثر على قراراتك الصحية. احجز موعدًا مع أطباء ذوي
                خبرة للحصول على رأي طبي ثانٍ موثوق يساعدك على اتخاذ القرار
                الصحيح بشأن علاجك.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.doctorReservation}
              onPress={() => router.push("/chooseSpeciality")}
            >
              <Text
                style={{
                  fontFamily: "FrutigerArabicBold",
                  fontSize: 18,
                  color: "white",
                }}
              >
                احجز موعد مع طبيب
              </Text>
              <Text
                style={{
                  fontFamily: "FrutigerArabicRoman",
                  fontSize: 14,
                  marginBottom: 8,
                  color: "white",
                }}
              >
                احجز موعدك للحصول على استشارة طبية
              </Text>
              <Text
                style={{
                  fontFamily: "FrutigerArabicRoman",
                  fontSize: 14,
                  color: "white",
                }}
              >
                احجز موعدك مع أفضل الأطباء في مختلف التخصصات خلال دقائق.
                استشارات طبية موثوقة عبر الفيديو أو الدردشة النصية، متى احتجت
                إليها ومن أي مكان.
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "FrutigerArabicBold", fontSize: 18 }}>
            التخصصات
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => router.push("/allSpecialities")}
          >
            <View style={styles.button}>
              <Svg width="6" height="8" viewBox="0 0 5 8" fill="none">
                <Path
                  d="M4 7L1 4L4 1"
                  stroke="#020618"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.specialities}>
          {landingPageSpecialities.map((speciality, key) => {
            return (
              <Pressable onPress={pressableFunction} key={key}>
                <Card
                  cardId={key.toString()}
                  description={speciality.description}
                  isActive={false}
                  name={speciality.name}
                  key={key}
                  storeInStorage={() => storeSpecialityInStorage(speciality)}
                />
              </Pressable>
            );
          })}
        </View>
      </View>
      <SpecialityModal visible={modalVisible} onClose={closeModal} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {},
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2AB25F",
  },
  container: {
    flex: 1,
  },
  layout: {
    alignItems: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    paddingBottom: 50,
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
  doctorReservation: {
    backgroundColor: "#21387E",
    height: 200,
    width: 290,
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
