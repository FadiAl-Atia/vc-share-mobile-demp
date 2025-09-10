export default function useReservationDataConfirmed() {
  return {
    id: "1b32562c-37dd-47b4-b6b8-cb911e65448e",
    reservationNumber: 116,
    userId: "DLoLelLtXEfN7SqBAz6fYL62kwu1",
    specialityId: "051a205e-6ae8-475a-abfd-cbe8fc5d9435",
    serviceId: "acb1ae4c-6e95-461f-a4e2-b558bcb9ebae",
    urgent: false,
    description: "الرجاء تعبئة البيانات وإرفاق الملفات إن وُجدت",
    doctorId: "FPKcwaUuVWeOzpH1SlEm3i9nE1N2",
    scheduledDate: "2025-09-27T16:00:00.000Z", //وقت الموعد المؤكد
    minutesFrom: 540,
    minutesTo: 570,
    status: "CONFIRMED",
    createdAt: "2025-09-07T07:05:10.920Z", //تم الحجز بتاريخ
    updatedAt: "2025-09-07T07:16:08.478Z",
    user: {
      id: "DLoLelLtXEfN7SqBAz6fYL62kwu1",
      phoneNumber: "+966512345678",
      profile: {
        id: "68771be0-c4d9-41fd-9fda-b6b0ccbd05f3",
        nationalId: "1014779407",
        userId: "DLoLelLtXEfN7SqBAz6fYL62kwu1",
        birthDate: "1965-08-03T22:00:00.000Z", //Using difference in years from date-fns will give us the age
        email: "doctor@vc.com",
        firstName: "مريض",
        parentName: "مريض",
        lastName: "المنصة",
        residency: "عمان",
        gender: "male",
      },
    },
    speciality: {
      id: "051a205e-6ae8-475a-abfd-cbe8fc5d9435",
      name: "أمراض الدم و الأورام لدى الأطفال",
      description:
        "يقدم قسم أمراض الدم / الأورام لدى الأطفال ، وهو أحد أكبر الأقسام في المنطقة ، رعاية متخصصة للأطفال المصابين بالسرطان واضطرابات الدم. مع 350 حالة سرطان جديدة سنويا وإجراء 135 عملية زرع خلايا جذعية.",
      insuranceCode: "TC001",
    },
    service: {
      id: "acb1ae4c-6e95-461f-a4e2-b558bcb9ebae",
      name: "standard",
    },
    doctor: {
      id: "FPKcwaUuVWeOzpH1SlEm3i9nE1N2",
      email: "doctor@vc.com",
      phoneNumber: "+966501232567",
      specialityId: "051a205e-6ae8-475a-abfd-cbe8fc5d9435",
      firstName: "دكتور",
      lastName: "المنصة",
      gender: "MALE",
      birthDate: "1980-01-01T00:00:00.000Z",
    },
    files: [],
    timeline: [
      {
        id: "94119ba7-4867-4aa5-8074-22aae4001929",
        reservationId: "1b32562c-37dd-47b4-b6b8-cb911e65448e",
        type: "APPOINTMENT_CONFIRMED_BY_DOCTOR",
        context: '{"doctorId":"FPKcwaUuVWeOzpH1SlEm3i9nE1N2"}',
        source: "DOCTOR",
        createdAt: "2025-09-07T07:16:08.887Z",
        createdBy: "FPKcwaUuVWeOzpH1SlEm3i9nE1N2",
      },
      {
        id: "c941f3a8-2ce4-43a1-8393-6ea9f22734fc",
        reservationId: "1b32562c-37dd-47b4-b6b8-cb911e65448e",
        type: "DOCTOR_ASSIGNED",
        context:
          '{"doctor":{"id":"FPKcwaUuVWeOzpH1SlEm3i9nE1N2","firstName":"دكتور","lastName":"المنصة","specialityId":"051a205e-6ae8-475a-abfd-cbe8fc5d9435"}}',
        source: "SYSTEM",
        createdAt: "2025-09-07T07:07:11.791Z",
        createdBy: "eaoBj5cUOGa4NOVOLi5Wo3La4fq1",
      },
      {
        id: "6cbea029-c938-4ee0-b873-f520e1864a1b",
        reservationId: "1b32562c-37dd-47b4-b6b8-cb911e65448e",
        type: "RESERVATION_CREATED",
        context:
          '{"patient":{"firstName":"مريض","lastName":"المنصة","gender":"male"},"reservation":{"specialityId":"051a205e-6ae8-475a-abfd-cbe8fc5d9435","serviceId":"acb1ae4c-6e95-461f-a4e2-b558bcb9ebae","urgent":false,"scheduledDate":"2025-09-27T16:00:00.000Z"}}',
        source: "PATIENT",
        createdAt: "2025-09-07T07:05:11.325Z",
        createdBy: "DLoLelLtXEfN7SqBAz6fYL62kwu1",
      },
    ],
  };
}
