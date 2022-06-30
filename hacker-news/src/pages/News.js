import { useContext } from "react";

import DataContext from "../context/DataContext";
import NewsBlock from "../components/NewsBlock";

export default function News() {
  const { data, error } = useContext(DataContext);
  return (
    <div className="news mt-2">
      {error ? (
        <div>error</div>
      ) : data.length >= 30 ? (
        <div>
          {data
            .sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0))
            .slice(0, 31)
            .filter((d) => d.type === "story")
            .map((d, i) => {
              return <NewsBlock key={i} news={d} index={i} />;
            })}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
