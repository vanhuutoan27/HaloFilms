import React, { useContext } from 'react';
import { data } from '../shared/ListOfFilms';
import { ThemeContext } from '../components/ThemeContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ShareIcon from '@mui/icons-material/Share';

import '../scss/Detail.scss';

function Detail() {
  const { id } = useParams();
  const film = data.find((obj) => obj.id === id);
  const { theme } = useContext(ThemeContext);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="Detail">
      <div className="detail_container">
        <div
          className="detail_content"
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
          <div className="content">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 4">
                <img src={film.poster} alt={film.title} className="detail_poster" />
              </Box>
              <Box gridColumn="span 8">
                <h3 className="detail_subtitle" style={{ color: theme.color10 }}>
                  New Movie 2023
                </h3>
                <h2 className="detail_title" style={{ color: theme.color }}>
                  {film.title}
                </h2>
                <div className="detail_info">
                  <p
                    className="detail_nation"
                    style={{ backgroundColor: theme.color, color: theme.color3 }}
                  >
                    {film.nation}
                  </p>
                  <p className="detail_genre">
                    {film.genre.map((genre, index) => (
                      <a key={index} href={`#!`} style={{ color: theme.color10 }}>
                        {genre}
                        {index < film.genre.length - 1 && ', '}
                      </a>
                    ))}
                  </p>
                  <p style={{ color: theme.color }}>
                    <CalendarMonthIcon
                      className="detail_custom_icon"
                      style={{ color: theme.color10 }}
                    />
                    {film.year}
                  </p>
                  <p style={{ color: theme.color }}>
                    <AccessTimeFilledIcon
                      className="detail_custom_icon"
                      style={{ color: theme.color10 }}
                    />
                    {film.time} min
                  </p>
                </div>
                <p
                  className="detail_desc"
                  style={{ backgroundColor: theme.backgroundColor2, color: theme.color }}
                >
                  {film.description}
                </p>
                <div className="detail_box">
                  <ul style={{ backgroundColor: theme.backgroundColor4, color: theme.color2 }}>
                    <li className="share">
                      <Link to="#!">
                        <ShareIcon />
                      </Link>
                      <Link to="#!">Share</Link>
                    </li>

                    <li className="streaming">
                      <h6>Prime Video</h6>
                      <span>Streaming Channels</span>
                    </li>

                    <li className="watch">
                      <Link
                        to={`/trailer/${film.id}`}
                        onClick={scrollToTop}
                        className="btn-play"
                        style={{
                          color: 'var(--primary-color-3)',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = theme.color10;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'var(--primary-color-3)';
                        }}
                      >
                        WATCH TRAILER
                      </Link>
                    </li>
                  </ul>
                </div>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
