import { useParams } from "react-router-dom";
//라우트의 식별자를 써서 접근한다.

function EventDetailPage() {
  const event = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <h2>eventId: {event.id}</h2>
    </>
  );
}
export default EventDetailPage;
