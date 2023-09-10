import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //비동기화 코드
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true); //데이터 로딩중
    setError(null); //이전에 받았을지도 모르는 에러를 초기화
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      //정상적으로 데이터를 받아오지 못했을 때.
      //파싱 전에 오류 핸들러 처리해 주어야 한다.
      if (!response.ok) {
        throw new Error("Someting went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false); //응답을 받았던지 오류를 받았던지 상관없이 로딩상태 종료
  }, []);

  //최초 로딩 시에도 즉시 데이터를 가져온다
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); //함수가 변경되면 재실행

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
