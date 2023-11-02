import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../shared/ListOfFilms';
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import Hero from '../components/Hero';
import '../scss/Home.scss';

function Home() {
  const [film, setFilm] = useState([]);
  const { theme } = useContext(ThemeContext);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="Home" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Hero />
      <div className="home_container">
        <div className="home_header">
          <p className="home_header_subtitle" style={{ color: theme.color10 }}>
            NOW SHOWING
          </p>
          <h2 className="home_header_title" style={{ color: theme.color }}>
            Movies In 2023
          </h2>
        </div>
        <div className="home_content">
          {data.map((film) => (
            <div className="home_column" key={film.id}>
              <div className="home_card">
                {/* <Link to={`/detail/${film.id}`} onClick={scrollToTop}> */}
                <div className="home_poster_card">
                  <img src={film.poster} alt={film.title} />
                  <ul class="overlay-btn">
                    <li>
                      <Link
                        to={`/detail/${film.id}`}
                        onClick={scrollToTop}
                        class="btn-play"
                        style={{
                          backgroundColor: 'var(--primary-color-3)',
                          color: '#ddd',
                          border: 'none',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = theme.color10;
                          e.target.style.color = 'var(--primary-color-3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'var(--primary-color-3)';
                          e.target.style.color = '#ddd';
                        }}
                      >
                        Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/trailer/${film.id}`}
                        onClick={scrollToTop}
                        class="btn-play"
                        style={{
                          backgroundColor: 'var(--primary-color-3)',
                          color: '#ddd',
                          border: 'none',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = theme.color10;
                          e.target.style.color = 'var(--primary-color-3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'var(--primary-color-3)';
                          e.target.style.color = '#ddd';
                        }}
                      >
                        Watch Now
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* </Link> */}

                <div className="home_row">
                  <Link to={`/detail/${film.id}`} onClick={scrollToTop}>
                    <h3
                      className="home_film_title"
                      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                    >
                      {film.title}
                    </h3>
                  </Link>

                  <h3 className="home_film_year" style={{ color: theme.color10 }}>
                    {film.year}
                  </h3>
                </div>
                <div className="home_row">
                  <div className="home_row_left">
                    <p
                      className="home_film_nation"
                      style={{
                        borderColor: theme.border,
                        color: theme.color10,
                      }}
                    >
                      {film.nation}
                    </p>
                  </div>
                  <div className="home_row_right">
                    <p className="home_film_time">
                      <WatchLaterIcon
                        className="home_custom_icon"
                        style={{ color: theme.color10 }}
                      />
                      <span style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                        {film.time} min
                      </span>
                    </p>
                    <p className="home_film_rating">
                      <ThumbUpIcon className="home_custom_icon" style={{ color: theme.color10 }} />
                      <span style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                        {film.rating}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
