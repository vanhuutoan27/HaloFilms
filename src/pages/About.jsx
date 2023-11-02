import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

import '../scss/About.scss';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function About() {
  const [expanded, setExpanded] = React.useState('panel1');
  const { theme, toggle } = useContext(ThemeContext);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="About" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="content">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography style={{ fontWeight: 'bold' }}>About Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Welcome to HaloFilms!</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography style={{ fontWeight: 'bold' }}>Who We Are</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              HaloFilms is a premier online destination for movie enthusiasts. We are a dedicated
              team of cinephiles who have come together to create an exceptional platform for movie
              lovers like you. Our passion for film and the desire to provide a top-notch
              movie-watching experience inspired the creation of this website.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography style={{ fontWeight: 'bold' }}>Our Mission</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our mission is simple: to connect movie enthusiasts with the films they love. We've
              curated a vast and diverse collection of films spanning various genres, from thrilling
              action to heartwarming romance and mind-bending science fiction. Our commitment to
              excellence means we continually update our list to ensure you have access to the
              latest cinematic releases.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography style={{ fontWeight: 'bold' }}>Why Choose HaloFilms?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Easy Navigation: Our user-friendly website design makes it effortless to search for
              and find the movies you're looking for. With filters for genre, release year, IMDb
              rating, and more, your ideal movie is just a few clicks away.
              <br />
              In-Depth Information: Get in-depth information about each movie, including details
              about the cast and crew. Our comprehensive movie profiles are designed to enrich your
              viewing experience.
              <br />
              Community Interaction: Engage with fellow movie enthusiasts by leaving comments and
              ratings for your favorite films. Share your thoughts, recommendations, and insights
              with the community.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography style={{ fontWeight: 'bold' }}>Our Team</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              HaloFilms is a labor of love crafted by a passionate and dedicated team of individuals
              who share a common enthusiasm for cinema. Meet the core members of our team:
              <br />
              Van Huu Toan - Founder & Chief Movie Enthusiast
              <br />
              Van Huu Toan - Movie Researcher & Critic
              <br />
              Van Huu Toan - Web Developer & Technical Support
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography style={{ fontWeight: 'bold' }}>Join Our Community</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We invite you to join our community of movie aficionados and embark on an exciting
              cinematic journey. Connect with us on social media, subscribe to our newsletter, and
              stay up-to-date with the latest movie news, reviews, and recommendations.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography style={{ fontWeight: 'bold' }}>Contact Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your feedback is invaluable to us, and we welcome your questions, suggestions, and
              contributions. Please feel free to reach out to us via email at
              halofilms.contact.gmail.com. We greatly appreciate your input, as it helps us enhance
              our platform and cater to the needs of movie lovers like you.
              <br />
              Thank you for choosing HaloFilms. We are committed to delivering a superior
              movie-watching experience and look forward to sharing the magic of cinema with you.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default About;
