export interface TimeSlot {
  startTime: number;
  endTime: number;
}

export interface UiTimeSlot extends TimeSlot {
  dateTime: Date;
}

export interface TimeSlotsProps {
  isPending: boolean;
  timeSlots?: UiTimeSlot[];
  selectedSlot?: UiTimeSlot;
  onSelectSlot: (slot: UiTimeSlot) => void;
  isDialog?: boolean;
  className?: string;
}
