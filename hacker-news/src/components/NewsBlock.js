import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import DataContext from "../context/DataContext";

function NewsBlock({ news, index }) {
  const [hidden, setHidden] = useState(false);
  const { updateScore } = useContext(DataContext);

  const handleNewsHide = (e) => {
    setHidden((prev) => !prev);
  };

  const handleScoreAdd = () => {
    updateScore(news, ++news.score);
  };

  return (
    <div className="row card mt-1 p-1">
      <div className="col-1">
        <strong>{index + 1}</strong>
      </div>
      {!hidden ? (
        <div className="col">
          <div className="row">
            <a rel="noreferrer" target="_blank" href={news.url}>
              <h5 className="fs-6">{news.title}</h5>
            </a>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn"
                onClick={handleScoreAdd}
                disabled={news.scoreAdded}
              >
                <i className="bi bi-arrow-up-circle-fill"></i>
              </button>
              Score: {news.score}
            </div>
            <div className="col">
              Author: <strong>{news.by}</strong>
            </div>
            {news.kids ? (
              <>
                <div className="col">Comments: {news.kids.length}</div>
                <div className="col">Last by: Test</div>
              </>
            ) : (
              <>
                <div className="col">Comments: 0</div>
                <div className="col"></div>
              </>
            )}
            <div className="col">
              <Link to={`/add-comment/${news.id}`}>Discusse</Link>
            </div>
            <div className="col" onClick={handleNewsHide}>
              Hide
            </div>
          </div>
        </div>
      ) : (
        <div className="col-1">
          <strong onClick={handleNewsHide}>Show</strong>
        </div>
      )}
    </div>
  );
}

export default NewsBlock;
