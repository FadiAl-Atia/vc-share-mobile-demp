// --- IMPORTANT --- //
// The code in this file to be strictly used in the browser and the browser only.
import {
  addHours,
  addMinutes,
  endOfDay,
  startOfDay,
  startOfTomorrow,
} from "date-fns";

export const userStartOfTomorrow = startOfTomorrow();

export const dayStart = startOfDay(new Date());
export const dayEnd = endOfDay(dayStart);

export function dateToTimeDisplay(date: Date | string, hour12 = false) {
  return new Date(date).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12,
  });
}

export function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}`;
}

/**
 * Generates 30-minute time slots from 9:00 AM to 4:30 PM or 5:00 PM for today.
 * @param includeLastSlot - Whether to include the 5:00 PM slot. Default is false.
 * @returns Array of Date objects representing each time slot
 */
export const generateTimeSlots = (
  date = new Date(),
  includeLastSlot = false
) => {
  const slots: Date[] = [];
  const workHoursStart = 9;
  const workHoursEnd = 17;
  const slotDuration = 30;

  const dayStart = startOfDay(date);
  let currentSlot = addHours(dayStart, workHoursStart);
  const dayEnd = addHours(dayStart, workHoursEnd);

  while (includeLastSlot ? currentSlot <= dayEnd : currentSlot < dayEnd) {
    slots.push(currentSlot);
    currentSlot = addMinutes(currentSlot, slotDuration);
  }

  return slots;
};

export function composeReservationDate<
  T extends { scheduledDate: string | Date; minutesFrom: number }
>(reservation: T) {
  return addHours(
    addMinutes(reservation.scheduledDate, reservation.minutesFrom),
    8
  );
}

export function minutesFromUtcMidnight(date: Date) {
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return hours * 60 + minutes;
}
