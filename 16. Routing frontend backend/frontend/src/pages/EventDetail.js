import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
}
export default EventDetailPage;

//request: 요청 객체를 담고 있다.
//params: 모든 라우트 파라미터가 담겨있다.(모든 라우트 파라미터에 접근 가능)
export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
