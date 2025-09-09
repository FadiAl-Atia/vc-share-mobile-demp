const movementTitleMap = new Map();

movementTitleMap.set("APPOINTMENT_CONFIRMED_BY_DOCTOR", "تم تأكيد الموعد");
movementTitleMap.set("DOCTOR_ASSIGNED", "تم تحديد طبيب للحالة");
movementTitleMap.set("RESERVATION_CREATED", (timelineData: any) => {
  return `تم إنشاء موعد #${timelineData.reservationNumber}`;
});
movementTitleMap.set("REPORT_ATTACHED", "تم ارفاق ملف");

export default movementTitleMap;
