import { useState, useEffect } from "react";
import firebase from "../firebase";

const useFetchBeats = () => {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const db = firebase.firestore();
      // let data = [];
      let data = [];
      await db
        .collection("beats")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            data.push(doc.data());
          });
        });
      setBeats(data);
    };
    getData();
  }, []);

  return beats;
};

export default useFetchBeats;
