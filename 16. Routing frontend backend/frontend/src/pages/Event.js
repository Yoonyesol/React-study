import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); //라우터 loader()에 의해 리턴받은 data

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

//loader 코드는 서버에서 실행되지 않는다. (브라우저에서 실행됨)
export async function loader() {
  const response = await fetch("http://localhost:8080/eventsww");

  if (!response.ok) {
    //오류 생성 및 처리 코드
    // return {
    //   isError: true,
    //   message: "Could not fetch events.",
    // };
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500, //백엔드 에러
    });
  } else {
    // const resData = await response.json();
    // //const res = new Response(); //새로운 응답객체 생성
    // return resData;
    return response;
  }
}
