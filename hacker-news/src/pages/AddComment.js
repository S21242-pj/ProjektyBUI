import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import DataContext from "../context/DataContext";
import Comments from "../components/Comments";

export default function AddComment() {
  const { id } = useParams();
  const { data } = useContext(DataContext);

  const [news, setNews] = useState();

  useEffect(() => {
    setNews(data.find((d) => d.id == id));
  }, [data]);

  return news ? (
    <div className="p-3">
      <h3>{news.title}</h3>
      {news.kids ? <Comments kids={news.kids} /> : <div>No comments</div>}
    </div>
  ) : (
    <div>
      <p>loading...</p>
    </div>
  );
}
