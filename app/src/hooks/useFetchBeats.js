import { useState, useEffect } from "react";
// import axios from "axios";
import firebase from "../firebase";
import "firebase/firestore";
const useFetchBeats = () => {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    const fetchBeats = async () => {
      const db = firebase.firestore();
      console.log("db: ", db);
      const data = await db.collection("beats");
      console.log(data);
      setBeats(data.map(doc => doc.data()));
    };
    fetchBeats();
  }, []);

  return beats;
};

export default useFetchBeats;
