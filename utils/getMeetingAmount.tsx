import { HOURS_PER_YEAR } from "../constants/Salaries";
import { MeetingType } from "../types/index";

export function getMeetingAmount(meetingDetails: MeetingType) {
  console.log("---- THE DETAILS", meetingDetails);

  // Get all salaries to determine hourly rate based on salary
  const allSalaries = meetingDetails.attendeeInformation.map((a) => a.salary);
  const estimatedHourlyRates = allSalaries.map((s) => s / HOURS_PER_YEAR);

  // Take hourly rate and multiply it by number of people in meeting
  const individualHourlyRates = meetingDetails.attendeeInformation.map(
    (a, index) => {
      return a.people * estimatedHourlyRates[index];
    }
  );

  // Determine the amount per person in relationship to the meeting
  const individualRatesPerMeeting = individualHourlyRates.map((i) => {
    return i * meetingDetails.meetingTime;
  });

  // Get total and format into usable dollar amount
  const total = individualRatesPerMeeting.reduce((acc, curr) => {
    return acc + curr;
  });

  console.log("---- THE TOTAL", total);

  return total;
}
