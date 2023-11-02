import React, { useContext } from 'react';
import { data } from '../shared/ListOfFilms';
import { ThemeContext } from '../components/ThemeContext';
import { Link, useParams } from 'react-router-dom';

import '../scss/Trailer.scss';

function Trailer() {
  const { id } = useParams();
  const film = data.find((obj) => obj.id === id);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="Trailer">
      <div
        className="trailer_content"
        style={{ background: theme.backgroundColor, color: theme.color }}
      >
        <div className="content">
          <h2>
            <Link to={`/detail/${film.id}`} style={{ color: theme.color10 }}>
              {film.title}
            </Link>
            <span style={{ color: theme.color }}> Trailer</span>
          </h2>
          <video controls autoPlay width="100%" height="100%">
            <source src={film.trailer} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
