import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {EVENTS.map((e) => (
          <li key={e.id}>
            <Link to={`/events/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default EventsPage;
