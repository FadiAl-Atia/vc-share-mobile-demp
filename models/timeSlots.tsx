import { Button, ButtonText } from "@/components/ui/button";
import { addHours, addMinutes } from "date-fns";
import { StyleSheet, Text, View } from "react-native";
import type { TimeSlotsProps, UiTimeSlot } from "../models/TimeSlot";
import { dateToTimeDisplay } from "@/models/user-time";

export function Slot({
  slot,
  onSelect,
  selected,
}: {
  slot: UiTimeSlot;
  onSelect: () => void;
  selected: boolean;
}) {
  return (
    <Button
      key={slot.startTime}
      variant={selected ? "solid" : "outline"}
      onPress={() => onSelect()}
      style={[styles.slotButton, selected && styles.selectedSlotButton]}
    >
      <ButtonText
        style={[styles.buttonText, selected && styles.selectedButtonText]}
      >
        {dateToTimeDisplay(slot.dateTime, true)}
      </ButtonText>
    </Button>
  );
}

export function TimeSlots({
  isPending,
  timeSlots,
  selectedSlot,
  onSelectSlot,
  isDialog = false,
}: TimeSlotsProps) {
  return (
    <View style={styles.container}>
      {isPending ? (
        <View style={styles.centered}>
          <Text>Loading</Text>
        </View>
      ) : timeSlots && timeSlots.length > 0 ? (
        <View style={styles.slotsGrid}>
          {timeSlots.map((slot) => (
            <Slot
              key={slot.startTime}
              slot={slot}
              selected={selectedSlot?.startTime === slot.startTime}
              onSelect={() => onSelectSlot(slot)}
            />
          ))}
        </View>
      ) : (
        <View style={styles.centered}>
          <Text style={styles.noSlotsText}>لا توجد مواعيد متاحة</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slotsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  slotButton: {
    minWidth: 80,
    margin: 5,
  },
  selectedSlotButton: {
    backgroundColor: "#2AB25F",
  },
  buttonText: {
    fontSize: 14,
    color: "#000",
  },
  selectedButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  noSlotsText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6B7280",
  },
});
