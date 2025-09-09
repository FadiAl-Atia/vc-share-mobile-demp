import FileModal from "@/components/filesModal";
import { Button, ButtonText } from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DatePicker from "expo-document-picker";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface reservationInfoProps {
  patientName: string;
  patientAge: number;
  patientSex: string;
  speciality: string;
}

export default function ReservationAttachedFiles({
  patientName,
  patientAge,
  patientSex,
  speciality,
}: reservationInfoProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [documents, setDocuments] = useState<DatePicker.DocumentPickerAsset[]>(
    []
  );
  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    getFiles();
  };

  const getFiles = async () => {
    const results = await AsyncStorage.getItem("documents");
    if (results && results !== "null") {
      const parsedResults = JSON.parse(results);
      setDocuments(parsedResults);
    } else {
      setDocuments([]);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getFiles();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <View style={[styles.container_1, { height: "auto", minHeight: 250 }]}>
      <View style={styles.container_1_title_status}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ fontFamily: "FrutigerArabicBlack", fontSize: 18 }}>
            البيانات المرفقة
          </Text>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M10 9H8"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M16 13H8"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M16 17H8"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      </View>
      <View style={styles.providedData}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.dataAll}>
            <Text style={{ fontFamily: "FrutigerArabicBold" }}>الاسم: </Text>
            <View style={styles.dataBox}>
              <Text
                style={{
                  color: "#62748E",
                  fontFamily: "FrutigerArabicBold",
                }}
              >
                {`${patientName}`}
              </Text>
            </View>
          </View>
          <View style={styles.dataAll}>
            <Text style={{ fontFamily: "FrutigerArabicBold" }}>العمر: </Text>
            <View style={styles.dataBox}>
              <Text
                style={{
                  color: "#62748E",
                  fontFamily: "FrutigerArabicBold",
                }}
              >
                {`${patientAge}`} عاما
              </Text>
            </View>
          </View>
          <View style={styles.dataAll}>
            <Text style={{ fontFamily: "FrutigerArabicBold" }}>الجنس: </Text>
            <View style={styles.dataBox}>
              <Text
                style={{
                  color: "#62748E",
                  fontFamily: "FrutigerArabicBold",
                }}
              >
                {`${patientSex}`}
              </Text>
            </View>
          </View>

          <View style={styles.dataAll}>
            <Text style={{ fontFamily: "FrutigerArabicBold" }}>التخصص: </Text>
            <View style={styles.dataBox}>
              <Text
                style={{
                  color: "#62748E",
                  fontFamily: "FrutigerArabicBold",
                }}
              >
                {`${speciality}`}
              </Text>
            </View>
          </View>
          <View style={styles.dataAll}>
            <Text style={{ fontFamily: "FrutigerArabicBold" }}>
              الملفات المرفقة:
            </Text>
            <View style={styles.dataBox}>
              <Text
                style={{
                  color: "#62748E",
                  fontFamily: "FrutigerArabicBold",
                }}
              >
                {`${documents.length}`}
              </Text>
            </View>
          </View>
        </ScrollView>
        <Button
          variant="outline"
          style={{ marginTop: 25, width: "70%", alignSelf: "center" }}
          onPress={() => openModal()}
        >
          <ButtonText>عرض و تعديل الملفات المرفقة</ButtonText>
        </Button>
      </View>
      <FileModal visible={modalVisible} onClose={closeModal} />
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
    height: 350,
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
  providedData: {
    gap: 15,
    marginTop: 25,
    marginRight: 10,
    paddingBottom: 20,
  },
  dataAll: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  dataBox: {
    backgroundColor: "#F1F5F9",
    padding: 5,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    flexDirection: "row-reverse",
    gap: 12,
  },
  testContent: {
    padding: 10,
    alignItems: "flex-end",
    gap: 10,
    flex: 1,
  },
});
