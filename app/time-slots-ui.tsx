// app/example-modal.tsx
import { composeReservationDate } from "@/models/user-time";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "dayjs/locale/ar";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAvailableTime } from "../hooks/useAvailableTime";
import type { UiTimeSlot } from "../models/TimeSlot";
import { TimeSlots } from "./timeSlots";

export default function ExampleModal() {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<UiTimeSlot | undefined>();
  const availabilities = useAvailableTime();

  const getDate = async () => {
    const value = await AsyncStorage.getItem("date-picked");
    if (value) {
      setDate(new Date(value));
      // await AsyncStorage.removeItem("date-picked");
    }
  };

  useEffect(() => {
    getDate();
  }, []);

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

  const handleSlotSelection = async (slot: UiTimeSlot) => {
    setSelectedSlot(slot);
    // await AsyncStorage.removeItem("time-picked");
    await AsyncStorage.setItem("time-picked", slot.dateTime.toISOString());
  };

  const handleConfirm = () => {
    // Only go back if a slot is selected
    if (selectedSlot) {
      router.back();
    }
  };

  return (
    <View style={styles.root}>
      <Pressable style={styles.backdrop} onPress={() => router.back()} />
      <View style={styles.card}>
        <Text style={styles.title}>يرجى اختيار الساعة</Text>
        <ScrollView style={styles.slot}>
          {date && (
            <TimeSlots
              isPending={false}
              timeSlots={timeSlots as UiTimeSlot[]}
              selectedSlot={selectedSlot}
              onSelectSlot={handleSlotSelection}
            />
          )}
        </ScrollView>
        <Pressable
          style={[styles.closeButton, { opacity: selectedSlot ? 1 : 0.5 }]}
          onPress={handleConfirm}
          disabled={!selectedSlot}
        >
          <Text style={{ color: "white", fontFamily: "FrutigerArabicBold" }}>
            تأكيد
          </Text>
        </Pressable>
        {/* Debug info - remove in production */}
        {__DEV__ && (
          <Text style={{ fontSize: 10, marginTop: 5 }}>
            Date: {date ? formatDate(date) : "No date"}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  card: {
    width: "85%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "FrutigerArabicBold",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#2AB25F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  slot: {
    flexWrap: "wrap",
    width: 300,
    marginBottom: 10,
  },
});
