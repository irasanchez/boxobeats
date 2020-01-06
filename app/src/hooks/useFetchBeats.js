import { useState, useEffect } from "react";
import axios from "axios";

const useFetchBeats = () => {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BEATS_URL}`)
      .then(res => {
        console.log(res.data);
        setBeats(res.data.beats);
      })
      .catch(err => console.log(err));
  }, []);

  return beats;
};

export default useFetchBeats;
