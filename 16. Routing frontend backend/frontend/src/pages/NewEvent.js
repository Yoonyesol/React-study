import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}
export default NewEventPage;

//브라우저에서 실행되는 코드이므로 어떤 브라우저 api에도 접근할 수 있다.
export async function action({ request, params }) {
  const data = await request.formData(); //form의 데이터에 접근

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  //검증 오류 발생 시 상태코드(백엔드에서 설정)
  if (response.status === 422) {
    return;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events"); //다른 페이지로 사용자를 리디렉션
}
