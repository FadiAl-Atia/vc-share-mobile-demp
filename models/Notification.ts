export default interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  isRead?: Boolean;
  userId?: string;
  metadata?: JSON;
  actionUrl?: String;
  readAt?: Date;
  sentAt?: Date;

  // Related entities
  reservationId?: string;
  meetingId?: string;
  fileId?: string;

  // Audit
  createdAt: Date;
}
enum NotificationType {
  RESERVATION_CONFIRMED,
  RESERVATION_REVIEW_REQUESTED,
  RESERVATION_STATUS_CHANGED,
  DOCTOR_PRESCRIBED_TREATMENT,
  DOCTOR_REQUESTED_INFO,
  RESERVATION_CANCELLATION,
  DOCTOR_ASSIGNED,
  MEETING_SCHEDULED,
  MEETING_STARTED,
  MEETING_ENDED,
  FILE_UPLOADED,
  GENERAL_ANNOUNCEMENT,
}
