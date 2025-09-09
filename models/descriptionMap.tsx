const descriptionMap = new Map();

descriptionMap.set("DOCTOR_ASSIGNED", (timelineObject: any) => {
  return `تم تعيين الدكتور ${
    timelineObject.doctor.firstName + " " + timelineObject.doctor.lastName
  } لمتابعة حالتك.
`;
});

descriptionMap.set(
  "RESERVATION_CREATED",
  "تم إنشاء حجز جديد بنجاح. سيتم مراجعة طلبك وتعيين طبيب مختص في أقرب وقت ممكن."
);

descriptionMap.set("APPOINTMENT_CONFIRMED_BY_DOCTOR", (timelineObject: any) => {
  return `${timelineObject.createdAt}`;
});
descriptionMap.set("REPORT_ATTACHED", (timeLineObject: any) => {
  return `${JSON.stringify(timeLineObject)} hi`;
});

export default descriptionMap;
