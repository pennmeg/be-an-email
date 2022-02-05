export type SalariesType = { salary: number; people: number };

export type MeetingType = {
  meetingTime: number;
  attendeeInformation: SalariesType[];
};
