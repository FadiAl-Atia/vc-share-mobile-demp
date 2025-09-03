import { Button, ButtonText } from "@/components/ui/button";
import { composeReservationDate } from "@/models/user-time";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Label } from "@react-navigation/elements";
import { format, startOfDay } from "date-fns";
import "dayjs/locale/ar";
import { router, useNavigation } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
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
import { useAvailableTime } from "../hooks/useAvailableTime";
import type { UiTimeSlot } from "../models/TimeSlot";

export default function Index() {
  //Days of the week
  const daysOfTheWeekAr = new Map();
  daysOfTheWeekAr.set(0, "الأحد");
  daysOfTheWeekAr.set(1, "الاثنين");
  daysOfTheWeekAr.set(2, "الثلاثاء");
  daysOfTheWeekAr.set(3, "الأربعاء");
  daysOfTheWeekAr.set(4, "الخميس");
  daysOfTheWeekAr.set(5, "الجمعة");
  daysOfTheWeekAr.set(6, "السبت");

  //States
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisiblity] = useState(false);
  const [isSubmitButtonPressed, setSubmitButtonPressed] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<UiTimeSlot | undefined>();

  //Hooks
  const screenWidth = useWindowDimensions();
  const availabilities = useAvailableTime();
  const navigation = useNavigation();

  //Date & Time Picker Methods
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

  const handleTimeConfirm = async (selectedTime: Date) => {
    setTime(selectedTime);
    // Store the time for later use
    await AsyncStorage.setItem("time-picked", selectedTime.toString());
    hideTimePicker();
  };

  const handleDateConfirm = async (selectedDate: Date) => {
    console.log("A date has been picked: ", selectedDate);
    const newDate = startOfDay(selectedDate);
    setDate(newDate);
    await AsyncStorage.removeItem("date-picked");
    await AsyncStorage.setItem("date-picked", newDate.toString()); //The date must be sent to the modal, so we can retreive the slots.
    hideDatePicker();
  };

  const handleSubmitButton = () => {
    setSubmitButtonPressed(true);
  };

  //Time Slot Methods
  const timeSlots = useMemo(() => {
    if (!date) return [] as UiTimeSlot[];
    return availabilities?.map((slot) => {
      return {
        dateTime: composeReservationDate({
          scheduledDate: date,
          minutesFrom: slot.startTime,
        }),
        ...slot,
      } satisfies UiTimeSlot;
    });
  }, [availabilities, date]);

  const formatDate = (dateObj: Date) => {
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (timeObj: Date) => {
    return format(timeObj, "HH:mm");
  };

  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared successfully!");
    } catch (e) {
      console.error("Error clearing AsyncStorage:", e);
    }
  };

  const getTimeFromStorage = async () => {
    const storedTime = await AsyncStorage.getItem("time-picked");
    if (storedTime) {
      setTime(new Date(storedTime));
      await AsyncStorage.removeItem("time-picked");
    }
  };

  useEffect(() => {
    getTimeFromStorage();
  }, []);

  //This is necessary, because if you dont write it, the getTimeFromStorage will only execute once, even if the user goes to modal and comes back.
  useEffect(() => {
    //The focus listener below listens when page comes to focus again.
    const unsubscribe = navigation.addListener("focus", () => {
      getTimeFromStorage();
    });

    return unsubscribe;
  }, [navigation]);

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
              <Input style={[styles.input, { pointerEvents: "none" }]}>
                <InputField
                  placeholder={
                    date
                      ? `${daysOfTheWeekAr.get(date.getDay())} - ${formatDate(
                          date
                        )}`
                      : "يرجى اختيار التاريخ"
                  }
                  style={styles.inputField}
                  value={
                    date
                      ? `${daysOfTheWeekAr.get(date.getDay())} - ${formatDate(
                          date
                        )}`
                      : ""
                  }
                />
                <DateTimePicker
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleDateConfirm}
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
              <Input style={[styles.input, { pointerEvents: "none" }]}>
                <InputField
                  placeholder={time ? formatTime(time) : "يرجى اختيار الوقت"}
                  style={styles.inputField}
                  value={time ? formatTime(time) : ""}
                />
                <DateTimePicker
                  isVisible={isTimePickerVisible}
                  mode="time"
                  is24Hour={true}
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
          onPress={handleSubmitButton}
        >
          <ButtonText style={{ fontFamily: "FrutigerArabicBold" }}>
            متابعة
          </ButtonText>
        </Button>
      </View>
      {isSubmitButtonPressed && (!date || !time) && (
        <Text style={{ color: "red" }}>يرجى تحديد الموعد</Text>
      )}

      <Button
        onPress={() => {
          router.push("/test-modal");
        }}
      >
        <ButtonText>Open Modal</ButtonText>
      </Button>
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
  slot: {
    flexWrap: "wrap",
    width: 300,
    marginBottom: 80,
  },
});
