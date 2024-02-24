import "tailwindcss/tailwind.css";
import EventListPage from "@/components/list-event-page";
import listEventPage from "@/list-event-page";
export default function eventList() {
  return <EventListPage events={listEventPage} />;
}
