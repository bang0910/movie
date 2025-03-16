import Banner from "../../shared/components/Layout/Banner";
import Header from "../../shared/components/Layout/Header";
import ListMovie from "../../shared/components/Layout/ListMovie";
import Search from "../../shared/components/Layout/Search";
import { useState, useEffect } from "react";
import { MovieProvider } from "../../context/MovieProvider";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";
      const response1 = await fetch(url1, options);
      const response2 = await fetch(url2, options);
      const data1 = await response1.json();
      const data2 = await response2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };

    fetchMovie();
  }, []);
  return (
    <>
      <MovieProvider>
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <Search title={"Kết quả tìm kiếm"} data={movieSearch} />
        ) : (
          <>
            <div className="bg-black p-5">
              <ListMovie title="Phim Hot" data={movie} />
              <ListMovie title="Phim Nổi Bật" data={movieRate} />
            </div>
          </>
        )}
      </MovieProvider>
    </>
  );
};
export default Home;
