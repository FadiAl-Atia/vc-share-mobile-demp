const movementTitleMap = new Map();

movementTitleMap.set("APPOINTMENT_CONFIRMED_BY_DOCTOR", "تم تأكيد الموعد");
movementTitleMap.set("DOCTOR_ASSIGNED", "تم تحديد طبيب للحالة");
movementTitleMap.set("RESERVATION_CANCELED", "تم تأكيد إلغاء الحجز");
movementTitleMap.set("RESERVATION_CREATED", (timelineData: any) => {
  return `تم إنشاء موعد #${timelineData.reservationNumber}`;
});
movementTitleMap.set("REPORT_ATTACHED", "تم ارفاق ملف");
movementTitleMap.set("RESCHEDULED_BY_PATIENT", "تم تقديم طلب لتأجيل الموعد");
export default movementTitleMap;
