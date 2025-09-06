import { Button, ButtonText } from "@/components/ui/button";
import { useFonts } from "expo-font";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import FileModal from "../filesModal";

export default function Index() {
  const [loaded] = useFonts({
    FrutigerArabicLight: require("../../assets/fonts/FrutigerLTArabic45Light.ttf"),
    FrutigerArabicRoman: require("../../assets/fonts/FrutigerLTArabic55Roman.ttf"),
    FrutigerArabicBold: require("../../assets/fonts/FrutigerLTArabic65Bold.ttf"),
    FrutigerArabicBlack: require("../../assets/fonts/frutigerltarabic75black.ttf"),
  });
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  if (!loaded) return null;

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
          fontFamily: "FrutigerArabicBlack",
          fontSize: 18,
          alignSelf: "flex-end",
          marginRight: 44,
        }}
      >
        الموعد #0672045
      </Text>

      {/* First Container - Appointment Details */}
      <View style={styles.container_1}>
        <View style={styles.container_1_title_status}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontFamily: "FrutigerArabicBlack", fontSize: 18 }}>
              موعد مع الطب العام
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
          <View style={styles.status}>
            <Svg height="8" width="8">
              <Circle cx={4} cy={4} r={4} fill="#00C951" />
            </Svg>
            <Text
              style={{ color: "#2AB25F", fontFamily: "FrutigerArabicLight" }}
            >
              مؤكد
            </Text>
          </View>
        </View>

        <View style={styles.container_1_information}>
          <Text style={styles.informationTitleValue}>
            <Text style={styles.informationTitle}>رقم الموعد :</Text> #0672045
          </Text>
          <Text style={styles.informationTitleValue}>
            <Text style={styles.informationTitle}>تم الحجز بتاريخ : </Text>
            الخميس - 13/2/2025
          </Text>
          <Text style={styles.informationTitleValue}>
            <Text style={styles.informationTitle}>طبيب الحالة : </Text>د.محمد
            عبدالله
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
              <Text style={styles.serviceType}>موعد مع طبيب</Text>
            </View>
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
              <Text style={{ fontFamily: "FrutigerArabicBold" }}> SAR160</Text>
              <View style={[styles.status, { borderWidth: 0 }]}>
                <Svg height="8" width="8">
                  <Circle cx={4} cy={4} r={4} fill="#2B7FFF" />
                </Svg>
                <Text
                  style={{
                    color: "#2B7FFF",
                    fontFamily: "FrutigerArabicLight",
                  }}
                >
                  مدفوع
                </Text>
              </View>
            </View>
          </Text>
          <View style={styles.confirmedDate}>
            <Text
              style={{
                fontFamily: "FrutigerArabicBold",
                color: "#2AB25F",
                textAlign: "right",
                fontSize: 13,
              }}
            >
              وقت الموعد المؤكد : الثلاثاء - 25/3/2025 - 2:30PM
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            variant="outline"
            style={{
              borderWidth: 1,
              borderColor: "#62748E",
            }}
          >
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path
                  d="M5.2381 7.14282L6.19048 16.6666H13.8095L14.7619 7.14282"
                  stroke="#62748E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M11.25 12.9167V8.75"
                  stroke="#62748E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M8.75 12.9167V8.75"
                  stroke="#62748E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M3.80951 5.23801H7.61903M7.61903 5.23801L7.93742 3.96447C8.03016 3.5935 8.36348 3.33325 8.74587 3.33325H11.2541C11.6365 3.33325 11.9698 3.5935 12.0626 3.96447L12.3809 5.23801M7.61903 5.23801H12.3809M12.3809 5.23801H16.1905"
                  stroke="#62748E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text
                style={{
                  fontFamily: "FrutigerArabicBold",
                  color: "#62748E",
                }}
              >
                الغاء الموعد
              </Text>
            </View>
          </Button>

          <Button
            variant="solid"
            style={{
              backgroundColor: "#2AB25F",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path
                  d="M16.25 10H3.75M3.75 10L8.4375 5M3.75 10L8.4375 15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text
                style={{
                  fontFamily: "FrutigerArabicBold",
                  color: "white",
                }}
              >
                الذهاب للموعد
              </Text>
            </View>
          </Button>
        </View>
      </View>
      {/* **************************************************************************************************************** */}
      {/* Second */}
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
                  محمد علي
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
                  22 عاما
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
                  ذكر
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
                  طب عام
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
                  +2
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
      {/* **************************************************************************************************************** */}
      {/* Third */}
      <View style={[styles.container_1, { height: 200 }]}>
        <View style={styles.container_1_title_status}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontFamily: "FrutigerArabicBlack", fontSize: 18 }}>
              تفاصيل الدفع
            </Text>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Path
                d="M11 15H13C13.5304 15 14.0391 14.7893 14.4142 14.4142C14.7893 14.0391 15 13.5304 15 13C15 12.4696 14.7893 11.9609 14.4142 11.5858C14.0391 11.2107 13.5304 11 13 11H10C9.4 11 8.9 11.2 8.6 11.6L3 17"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M7 21L8.6 19.6C8.9 19.2 9.4 19 10 19H14C15.1 19 16.1 18.6 16.8 17.8L21.4 13.4C21.7859 13.0354 22.0111 12.5323 22.0261 12.0016C22.0411 11.4709 21.8447 10.9559 21.48 10.57C21.1153 10.1841 20.6123 9.95892 20.0816 9.94392C19.5508 9.92891 19.0359 10.1254 18.65 10.49L14.45 14.39"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M2 16L8 22"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M16 11.9001C17.6016 11.9001 18.9 10.6017 18.9 9.0001C18.9 7.39847 17.6016 6.1001 16 6.1001C14.3983 6.1001 13.1 7.39847 13.1 9.0001C13.1 10.6017 14.3983 11.9001 16 11.9001Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M6 8C7.65685 8 9 6.65685 9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5C3 6.65685 4.34315 8 6 8Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </View>
        <View style={styles.container_1_information}>
          <Text style={styles.informationTitleValue}>
            <Text style={styles.informationTitle}>المبلغ الكلي : </Text>
            <Text style={{ color: "#2AB25F" }}>
              260
              <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <Path
                  d="M17.1673 16.25L12.584 17.25"
                  stroke="#2AB25F"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M12.584 3.33337V12.6834C12.584 12.81 12.6129 12.9349 12.6684 13.0486C12.7239 13.1624 12.8046 13.262 12.9044 13.3399C13.0041 13.4178 13.1203 13.472 13.2442 13.4983C13.368 13.5246 13.4962 13.5223 13.619 13.4917L17.1673 12.6667"
                  stroke="#2AB25F"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M2.98145 16.1258L7.60561 14.99C7.96642 14.8916 8.28365 14.6747 8.50629 14.3742C8.72893 14.0737 8.84404 13.7071 8.83311 13.3333V1.66663"
                  stroke="#2AB25F"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M17.1673 8.33337L3.83398 11.25"
                  stroke="#2AB25F"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Text>
          </Text>
          <Text style={styles.informationTitleValue}>
            <Text style={styles.informationTitle}>خصم التأمين : </Text>
            <Text style={{ color: "#737373" }}>
              -100{" "}
              <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <Path
                  d="M17.1673 16.25L12.584 17.25"
                  stroke="#737373"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M12.584 3.33337V12.6834C12.584 12.81 12.6129 12.9349 12.6684 13.0486C12.7239 13.1624 12.8046 13.262 12.9044 13.3399C13.0041 13.4178 13.1203 13.472 13.2442 13.4983C13.368 13.5246 13.4962 13.5223 13.619 13.4917L17.1673 12.6667"
                  stroke="#737373"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M2.98145 16.1258L7.60561 14.99C7.96642 14.8916 8.28365 14.6747 8.50629 14.3742C8.72893 14.0737 8.84404 13.7071 8.83311 13.3333V1.66663"
                  stroke="#737373"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M17.1673 8.33337L3.83398 11.25"
                  stroke="#737373"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Text>
          </Text>
          <Text style={styles.informationTitleValue}>
            <Text style={styles.informationTitle}> المبلغ النهائي : </Text>
            <Text style={{ color: "#2AB25F" }}>
              160{" "}
              <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <Path
                  d="M17.1673 16.25L12.584 17.25"
                  stroke="#2AB25F"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M12.584 3.33337V12.6834C12.584 12.81 12.6129 12.9349 12.6684 13.0486C12.7239 13.1624 12.8046 13.262 12.9044 13.3399C13.0041 13.4178 13.1203 13.472 13.2442 13.4983C13.368 13.5246 13.4962 13.5223 13.619 13.4917L17.1673 12.6667"
                  stroke="#2AB25F"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M2.98145 16.1258L7.60561 14.99C7.96642 14.8916 8.28365 14.6747 8.50629 14.3742C8.72893 14.0737 8.84404 13.7071 8.83311 13.3333V1.66663"
                  stroke="#2AB25F"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M17.1673 8.33337L3.83398 11.25"
                  stroke="#2AB25F"
                  strokeWidth={1.875}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Text>{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  container_1: {
    height: 370,
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
    height: 250,
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
