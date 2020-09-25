const API_KEY = "iqzYUrD0PQPz1da9G453Gq7RR6O2";
// GET ALL THE MATCHES[UPCOMING MATCHS]
export const getMatches = () => {
  // eslint-disable-next-line no-template-curly-in-string
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

  return fetch(url)
    .then((Response) => {
      return Response.json();
    })
    .catch((error) => {
      console.log("ERROR : ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
