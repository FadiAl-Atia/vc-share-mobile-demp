import { Button, ButtonText } from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import type form from "../models/form";

export default function Index() {
  //Grab Data
  const [time, setTime] = useState<Date | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState<form | null>(null);

  const grabAllData = async () => {
    const timeGrabbed = await AsyncStorage.getItem("time-picked");
    const dateGrabbed = await AsyncStorage.getItem("date-picked");
    const formGrabbed = await AsyncStorage.getItem("formData");

    setTime(timeGrabbed ? new Date(timeGrabbed) : null);
    setDate(dateGrabbed ? new Date(dateGrabbed) : null);
    setFormData(formGrabbed ? JSON.parse(formGrabbed) : null);

    // console.warn(timeGrabbed);
    // console.warn(dateGrabbed);
    // console.warn(formGrabbed);

    //Should I delete them?
    // await AsyncStorage.removeItem("time-picked");
    // await AsyncStorage.removeItem("date-picked");
    // await AsyncStorage.removeItem("formData");
  };

  useEffect(() => {
    grabAllData();
  }, []);

  return (
    <View style={styles.layout}>
      <Text style={styles.fontHeading}> تأكيد الحجز</Text>
      <Text style={styles.fontSubTitle}>الرجاء تأكيد الحجز </Text>
      <View style={styles.viewInfo}>
        <View style={styles.dataToConfirmWhole}>
          <Text style={styles.dataToConfirmTitle}>الاسم</Text>
          <View>
            <View style={styles.dataToConfirmDataContainer}>
              <Text style={styles.dataToConfirmData}>{formData?.name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.dataToConfirmWhole}>
          <Text style={styles.dataToConfirmTitle}>العمر</Text>
          <View>
            <View style={styles.dataToConfirmDataContainer}>
              <Text style={styles.dataToConfirmData}>
                {`${formData?.age} عاما`}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.dataToConfirmWhole}>
          <Text style={styles.dataToConfirmTitle}>الجنس</Text>
          <View>
            <View style={styles.dataToConfirmDataContainer}>
              <Text style={styles.dataToConfirmData}>{`${formData?.sex}`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.dataToConfirmWhole}>
          <Text style={styles.dataToConfirmTitle}>التخصص</Text>
          <View>
            <View style={styles.dataToConfirmDataContainer}>
              <Text style={styles.dataToConfirmData}>الطب العام</Text>
            </View>
          </View>
        </View>
        <View style={styles.dataToConfirmWhole}>
          <Text style={styles.dataToConfirmTitle}>نوع الطلب</Text>
          <View>
            <View style={styles.dataToConfirmDataContainer}>
              <Text style={styles.dataToConfirmData}>
                {`${formData?.type}`}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.dataToConfirmWhole}>
          <Text style={styles.dataToConfirmTitle}>الملفات المرفقة </Text>
          <View>
            <View style={styles.dataToConfirmDataContainer}>
              <Text style={styles.dataToConfirmData}>
                {formData?.document && formData.document.length > 0
                  ? `+${formData.document.length}`
                  : `لم يتم ارفاق ملفات`}{" "}
              </Text>
              {/*Will list the files chosen instead. */}
            </View>
          </View>
        </View>
        <View style={styles.dataToConfirmWhole}>
          <Text style={styles.dataToConfirmTitle}> الوقت المتوقع للرد </Text>
          <View>
            <View style={styles.dataToConfirmDataContainer}>
              <Text style={styles.dataToConfirmData}>10 أيام</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.paymentBox}>
        <Text style={{ fontFamily: "FrutigerArabicBold", fontSize: 15 }}>
          تفاصيل الدفع
        </Text>
        <Text style={{ fontFamily: "FrutigerArabicBold", fontSize: 14 }}>
          المبلغ الكلي :{" "}
          <Text style={{ color: "#2AB25F" }}>
            260{" "}
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
        <Text style={{ fontFamily: "FrutigerArabicBold", fontSize: 14 }}>
          خصم التأمين :{" "}
          <Text style={{ color: "#737373" }}>
            -100{" "}
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
        <Text style={{ fontFamily: "FrutigerArabicBold", fontSize: 14 }}>
          المبلغ المطلوب :{" "}
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
          </Text>
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button
          size="md"
          variant="solid"
          action="primary"
          style={{
            backgroundColor: "white",
          }}
        >
          <ButtonText
            style={{
              color: "black",
              fontWeight: "normal",
              fontFamily: "FrutigerArabicBold",
            }}
          >
            الرجوع
          </ButtonText>
        </Button>
        <Button
          size="md"
          variant="solid"
          action="primary"
          style={{ backgroundColor: "#2AB25F" }}
          onPress={() => console.log("Form ended")}
        >
          <ButtonText style={{ fontFamily: "FrutigerArabicBold" }}>
            متابعة
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginTop: 68,
    alignItems: "center",
    justifyContent: "center",
  },
  fontHeading: {
    fontFamily: "FrutigerArabicBold",
    fontSize: 20,
    flex: 1,
  },
  fontSubTitle: {
    fontFamily: "FrutigerArabicRoman",
    fontSize: 16,
    color: "#62748E",
    marginTop: 0,
  },
  form: {
    direction: "rtl",
    writingDirection: "rtl",
    marginTop: 24,
    gap: 12,
    alignSelf: "center",
    alignItems: "center",
  },
  fieldRow: {
    width: 300,
    alignSelf: "center",
  },

  inputFull: {
    width: "100%",
  },
  textRTL: {
    textAlign: "right",
    writingDirection: "rtl",
    fontFamily: "FrutigerArabicRoman",
  },
  textArea: {
    textAlignVertical: "top",
    paddingTop: 10,
    lineHeight: 22,
  },
  symptopms: {
    height: 139,
  },
  labelStyle: {
    alignSelf: "flex-start",
    fontFamily: "FrutigerArabicBold",
    marginBottom: 6,
    fontSize: 14,
  },
  buttons: {
    flexDirection: "row",
    gap: 38,
    marginTop: 14,
    marginBottom: 18,
    justifyContent: "center",
  },
  fileContainer: {
    flexDirection: "row",
    fontSize: 4,
  },
  fileInnerContainer: {
    borderRadius: 8,
    backgroundColor: "#737373",
    fontSize: 8,
  },
  viewInfo: {
    width: "90%",
    marginTop: 12,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 25,
    flexDirection: "row-reverse",
    gap: 25,
    flexWrap: "wrap",
  },
  dataToConfirmWhole: {
    flexDirection: "row-reverse",
    gap: 2,
  },
  dataToConfirmTitle: {
    fontFamily: "FrutigerArabicBold",
    fontSize: 13,
    padding: 12,
  },
  dataToConfirmData: {
    fontFamily: "FrutigerArabicBold",
    fontSize: 13,
    color: "#737373",
  },
  dataToConfirmDataContainer: {
    backgroundColor: "lightgrey",
    padding: 12,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    opacity: 0.9,
  },
  paymentBox: {
    height: 200,
    width: "80%",
    marginTop: 12,
    gap: 20,
    alignItems: "flex-end",
    borderRadius: 8,
    borderColor: "#E5E5E5",
    borderWidth: 2,
    padding: 12,
  },
});
