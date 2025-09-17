import { format } from "date-fns";
import { arSA } from "date-fns/locale";
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

descriptionMap.set(
  "RESCHEDULED_BY_PATIENT",
  "لقد قمت بطلب إعادة جدولة الموعد. سيتم تأكيد الموعد الجديد قريبًا."
);
descriptionMap.set(
  "RESERVATION_CANCELED",
  "تم إلغاء الموعد بنجاح، بناء على طلبك"
);
descriptionMap.set("APPOINTMENT_CONFIRMED_BY_DOCTOR", (timelineObject: any) => {
  return `${` تم تأكيد الموعد: ${format(
    new Date(timelineObject.scheduledDate),
    "EEEE - dd/MM/yyyy - HH:mm",
    {
      locale: arSA,
    }
  )}`}`;
});
descriptionMap.set("REPORT_ATTACHED", (timeLineObject: any) => {
  return `${JSON.stringify(timeLineObject)}`;
});

export default descriptionMap;
