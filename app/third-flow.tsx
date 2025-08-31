import { Button, ButtonText } from "@/components/ui/button";
import { Label } from "@react-navigation/elements";
import dayjs from "dayjs";
import "dayjs/locale/ar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Svg, { Path } from "react-native-svg";
import { Input, InputField } from "../components/ui/input";

export default function Index() {
  const daysOfTheWeekAr = new Map();
  daysOfTheWeekAr.set(0, "الأحد");
  daysOfTheWeekAr.set(1, "الاثنين");
  daysOfTheWeekAr.set(2, "الثلاثاء");
  daysOfTheWeekAr.set(3, "الأربعاء");
  daysOfTheWeekAr.set(4, "الخميس");
  daysOfTheWeekAr.set(5, "الجمعة");
  daysOfTheWeekAr.set(6, "السبت");
  //   dayjs.locale("ar");

  const formatDate = (dateObj: Date) => {
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1; // Months are 0-indexed
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const screenWidth = useWindowDimensions();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().getTime());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisiblity] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisiblity(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisiblity(false);
  };
  const handleTimeConfirm = (time: any) => {
    setTime(time);
    hideTimePicker();
  };
  const handleConfirm = (date: Date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.layout}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Text style={styles.fontHeading}>حجز موعد</Text>
      <Text style={styles.fontSubTitle}>الرجاء قم باختيار الموعد المناسب</Text>

      <View style={[styles.form, { width: screenWidth.width * 0.9 }]}>
        <View style={styles.datePicker}>
          <View style={[styles.inputContainerAbove]}>
            <Label style={styles.labelStyle}>التاريخ</Label>
            <View style={styles.inputContainer}>
              <Button style={styles.dateButton} onPress={showDatePicker}>
                <ButtonText>
                  <Svg width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <Path
                      d="M2.75 9C2.75 5.81802 2.75 4.97703 3.73851 3.98851C4.72703 3 6.31802 3 9.5 3C12.682 3 14.273 3 15.2615 3.98851C16.25 4.97703 16.25 5.81802 16.25 9C16.25 12.182 16.25 13.773 15.2615 14.7615C14.273 15.75 12.682 15.75 9.5 15.75C6.31802 15.75 4.72703 15.75 3.73851 14.7615C2.75 13.773 2.75 12.182 2.75 9Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M2.9375 6H16.0625"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M12.875 3.75V2.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M6.125 3.75V2.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </ButtonText>
              </Button>
              <Input style={styles.input} isDisabled={true}>
                <InputField
                  placeholder={`${daysOfTheWeekAr.get(
                    dayjs(date).get("d")
                  )} - ${formatDate(date)}`}
                  style={styles.inputField}
                ></InputField>
                <DateTimePicker
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  locale="ar"
                />
              </Input>
            </View>
            <Label style={styles.labelStyle}>الساعة</Label>
            <View style={styles.inputContainer}>
              <Button style={styles.dateButton} onPress={showTimePicker}>
                <ButtonText>
                  <Svg
                    width="19"
                    height="18"
                    fill="white"
                    viewBox="0 0 256 256"
                  >
                    <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></Path>
                  </Svg>
                </ButtonText>
              </Button>
              {/*Time picker is choosing today's date, but I fetched the time only. */}
              <Input style={styles.input} isDisabled={true}>
                <InputField
                  placeholder={`${dayjs(time).get("h")}:${dayjs(time).get(
                    "m"
                  )}  `}
                  style={styles.inputField}
                ></InputField>
                <DateTimePicker
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                  locale="ar"
                />
              </Input>
            </View>
          </View>
        </View>
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
        >
          <ButtonText style={{ fontFamily: "FrutigerArabicBold" }}>
            متابعة
          </ButtonText>
        </Button>
      </View>
    </KeyboardAvoidingView>
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
    fontSize: 18,
  },
  fontSubTitle: {
    fontFamily: "FrutigerArabicRoman",
    fontSize: 14,
    color: "#62748E",
    marginTop: 0,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  datePicker: {
    alignItems: "flex-end",
    width: "70%",
  },
  labelStyle: {
    fontFamily: "FrutigerArabicBold",
    marginBottom: 0,
    fontSize: 14,
    alignSelf: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    marginTop: 0,
  },
  inputField: {
    textAlign: "right",
    writingDirection: "rtl",
  },
  dateButton: {
    backgroundColor: "#2AB25F",
  },
  inputContainerAbove: {
    width: "100%",
    gap: 10,
  },
  buttons: {
    flexDirection: "row",
    gap: 38,
    marginTop: 20,
    marginBottom: 18,
    justifyContent: "center",
  },
});
