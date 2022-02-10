import { SalariesType } from "../types/index";

export function updateMeetingAttendees(
  index: number,
  value: number,
  type: "Salary" | "People",
  attendees: SalariesType[],
  callBack: (attendees: SalariesType[]) => void
) {
  let temp = [...attendees];
  let item = { ...temp[index] };
  switch (type) {
    case "Salary":
      item.salary = value;
      break;
    case "People":
      item.people = value;
      break;
  }
  temp[index] = item;
  callBack(temp);
}
