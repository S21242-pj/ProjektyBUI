import axios from "axios";
import { useEffect, useState } from "react";

export default function Comments({ kids, lm = 0 }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    kids.forEach((k) => {
      axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${k}.json`)
        .then((res) => {
          setComments((prev) => [...prev, res.data]);
        })
        .catch((res) => {
          console.log(res);
        });
    });
  }, []);

  return (
    <div>
      {comments ? (
        comments.map((c, i) => (
          <div key={i} className={`m-${lm}`}>
            <p>{c.text}</p>
            {c.kids ? <Comments kids={c.kids} lm={lm + 2} /> : <div></div>}
          </div>
        ))
      ) : (
        <div>
          <p>loading...</p>
        </div>
      )}
    </div>
  );
}
