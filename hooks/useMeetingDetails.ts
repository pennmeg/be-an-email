import { useState } from "react";
import { SalariesType } from "../types/index";

const DEFAULT_MEETING_TIME = 0.25;
const DEFAULT_ATTENDEES = { salary: 100000, people: 1 };

export function useMeetingDetails() {
  const [meetingTime, setMeetingTime] = useState(DEFAULT_MEETING_TIME);
  const [attendees, setAttendees] = useState<SalariesType[]>([
    DEFAULT_ATTENDEES,
  ]);

  const resetDefaults = () => {
    setMeetingTime(DEFAULT_MEETING_TIME);
    setAttendees([DEFAULT_ATTENDEES]);
  };

  return {
    attendees,
    setAttendees,
    meetingTime,
    setMeetingTime,
    resetDefaults,
  };
}
