import { useContext, useEffect } from "react";
import axios from "axios";

import DataContext from "../context/DataContext";

export default function DataLayer({ children }) {
  const { updateData } = useContext(DataContext);

  useEffect(() => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((r) => {
        r.data.forEach((id) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then((res) => {
              updateData({ ...res.data, hidden: false, scoreAdded: false });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <>{children}</>;
}
