export const apiKeyInfo = {
  apiKey: "f81980ff410e46f422d64ddf3a56dddd", // 3cbe5c4e11f13be89dfacaaeab649130  awaryjny
  baseUrl: "https://api.themoviedb.org/3",
  baseImgUrl: "https://image.tmdb.org/t/p/original/",
  searchOneMovie:
    "https://api.themoviedb.org/3/search/movie?api_key=3cbe5c4e11f13be89dfacaaeab649130&query=",
};

export const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKeyInfo.apiKey}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${apiKeyInfo.apiKey}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKeyInfo.apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKeyInfo.apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKeyInfo.apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKeyInfo.apiKey}&with_genres=99`,
  fetchAction: `/discover/movie?api_key=${apiKeyInfo.apiKey}&with_genres=28`,
};
