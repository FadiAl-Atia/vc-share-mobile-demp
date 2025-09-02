import { addHours, getHours, getMinutes, setMinutes } from "date-fns";

/**
 * Rounds down the given date to the nearest 30 minutes.
 * 2:34 -> 2:30
 */
export function roundDown30(date: Date): Date {
  const minutes = getMinutes(date);
  const roundedMinutes = minutes < 30 ? 0 : 30;
  return setMinutes(date, roundedMinutes);
}

/**
 * Rounds up the given date to the nearest 30 minutes.
 * 3:04 -> 3:30
 */
export function roundUp30(date: Date): Date {
  const minutes = getMinutes(date);
  if (minutes === 0 || minutes === 30) return date;
  const roundedMinutes = minutes < 30 ? 30 : 0;
  return roundedMinutes === 0
    ? setMinutes(addHours(date, 1), 0)
    : setMinutes(date, 30);
}

export function roundTo30(date: Date | string): Date {
  const minutes = getMinutes(date);
  if (minutes < 15) {
    return setMinutes(date, 0);
  } else if (minutes < 45) {
    return setMinutes(date, 30);
  } else {
    return setMinutes(addHours(date, 1), 0);
  }
}

export interface TimeSlot {
  startTime: number; // minutes from midnight
  endTime: number; // minutes from midnight
}

export function overlap(slots: TimeSlot[]): number {
  const intervals = slots.map(({ startTime: start, endTime: end }) => ({
    start: Math.min(start, end), // Handle reversed times
    end: Math.max(start, end),
  }));

  for (let i = 1; i < intervals.length; i++) {
    for (let j = 0; j < i; j++) {
      // Check if intervals overlap
      if (
        intervals[i].start < intervals[j].end &&
        intervals[i].end > intervals[j].start
      ) {
        return i;
      }
    }
  }

  return -1;
}

/**
 * Converts a Date to minutes from midnight UTC
 *
 * @example
 * dateToMinutes(new Date('2023-10-01T10:00:00Z')) // 600
 * dateToMinutes(new Date('2023-10-01T10:30:00Z')) // 630
 *
 * where 10 is 10 hours after midnight UTC and 30 is the minutes.
 * so the formula is:
 * hours * 60 + minutes
 */
export function dateToMinutes(date: Date | string): number {
  return getHours(date) * 60 + getMinutes(date);
}

export const APPOINTMENT_DURATION_MINUTES = 30;
export const MINUTES_IN_DAY = 1440;
export const LAST_MINUTE_OF_DAY = 1439; // 23:59 in minutes

export function generateSlots(startTime: number, endTime: number) {
  const slots: TimeSlot[] = [];
  for (
    let time = startTime;
    time < endTime;
    time += APPOINTMENT_DURATION_MINUTES
  ) {
    slots.push({
      startTime: time,
      endTime: time + APPOINTMENT_DURATION_MINUTES,
    });
  }
  return slots;
}
