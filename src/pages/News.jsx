import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

import '../scss/News.scss';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function News() {
  const [value, setValue] = React.useState(0);
  const { theme, toggle } = useContext(ThemeContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="News" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="content">
        <Box sx={{ width: '100%', borderBottom: '2px solid', borderColor: theme.color }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                '& .MuiTab-root': {
                  color: 'black',
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                },
                '& .MuiTabs-indicator': {
                  color: 'black',
                  backgroundColor: theme.color10,
                  height: '4px',
                },
              }}
            >
              <Tab
                label="HaloFilms News 1"
                {...a11yProps(0)}
                style={{
                  color: 'var(--primary-color-3)',
                }}
              />
              <Tab
                label="HaloFilms News 2"
                {...a11yProps(1)}
                style={{
                  color: 'var(--primary-color-3)',
                }}
              />
              <Tab
                label="HaloFilms News 3"
                {...a11yProps(2)}
                style={{
                  color: 'var(--primary-color-3)',
                }}
              />
              <Tab
                label="HaloFilms News 4"
                {...a11yProps(3)}
                style={{
                  color: 'var(--primary-color-3)',
                }}
              />
              <Tab
                label="HaloFilms News 5"
                {...a11yProps(4)}
                style={{
                  color: 'var(--primary-color-3)',
                }}
              />
              <Tab
                label="HaloFilms News 6"
                {...a11yProps(5)}
                style={{
                  color: 'var(--primary-color-3)',
                }}
              />
              <Tab
                label="HaloFilms News 7"
                {...a11yProps(6)}
                style={{
                  color: 'var(--primary-color-3)',
                }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <strong
              style={{
                color: theme.color10,
              }}
            >
              Blockbuster Films Dominate the Summer Box Office
            </strong>
            <br />
            <br />
            In a summer filled with highly anticipated releases, blockbuster films have once again
            proven their dominance at the box office. Movies like "Superhero Showdown" and "Galactic
            Odyssey" have not only met but exceeded expectations, breaking records for opening
            weekend earnings.
            <br />
            <br />
            "Superhero Showdown," featuring a star-studded cast and groundbreaking special effects,
            raked in an impressive $200 million in its opening weekend, solidifying its place as a
            major contender for the summer box office crown. Meanwhile, "Galactic Odyssey," the
            latest installment in a beloved sci-fi franchise, boasted a jaw-dropping $250 million
            opening weekend, thrilling both fans and industry insiders.
            <br />
            <br />
            The success of these films comes as a welcome sign for Hollywood after a challenging
            period due to the COVID-19 pandemic. Audiences are clearly eager to return to theaters
            and experience the magic of the silver screen once again. With several more big-budget
            releases on the horizon, the summer of cinema is in full swing.
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <strong
              style={{
                color: theme.color10,
              }}
            >
              Oscar Nominations Announced: Diversity and Inclusion in Focus
            </strong>
            <br />
            <br />
            The Oscars, the pinnacle of recognition in the film industry, have announced their list
            of nominees for the upcoming awards ceremony. This year, there's a strong emphasis on
            diversity and inclusion, signaling a positive shift in the industry's commitment to
            representational cinema.
            <br />
            <br />
            Films like "The Road Less Traveled," a heartfelt drama exploring the challenges faced by
            underrepresented communities, and "Voices of Change," a documentary shedding light on
            social justice issues, have received well-deserved nominations in multiple categories.
            This recognition reflects a broader movement in Hollywood towards telling more diverse
            and inclusive stories.
            <br />
            <br />
            The Academy's acknowledgment of these films is a promising step forward in ensuring that
            the stories and voices of all communities are celebrated on the grand stage of cinema.
            As we approach the awards ceremony, anticipation is high for a more representative and
            equitable Hollywood.
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <strong
              style={{
                color: theme.color10,
              }}
            >
              Streaming Services Compete for Original Content
            </strong>
            <br />
            <br />
            The battle for original content among streaming giants is heating up. With Netflix,
            Amazon Prime, and Disney+ leading the charge, these platforms are investing heavily in
            unique series and movies to attract and retain subscribers.
            <br />
            <br />
            "Streaming Sensation," a highly anticipated Netflix series, boasts a star-studded cast
            and an intriguing plotline that's generating substantial buzz. Meanwhile, "Prime's
            Hidden Gems" on Amazon Prime explores lesser-known indie films, catering to a more niche
            but discerning audience. And Disney+ continues to expand its vast library with beloved
            franchises and new original content.
            <br />
            <br />
            The streaming wars have created a thriving ecosystem of original content, giving viewers
            an abundance of choices and quality entertainment. With no signs of slowing down, this
            competition promises even more captivating content in the future.
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <strong
              style={{
                color: theme.color10,
              }}
            >
              Film Festivals Adapt to Pandemic Challenges
            </strong>
            <br />
            <br />
            Film festivals worldwide have had to pivot and adapt in response to the ongoing
            challenges posed by the COVID-19 pandemic. To ensure that cinephiles can still enjoy the
            best in independent and international cinema, festivals are increasingly offering
            virtual components alongside traditional in-person screenings.
            <br />
            <br />
            The hybrid approach has allowed festivals to reach wider audiences while maintaining the
            charm of the in-person experience. Virtual events provide accessibility to film
            enthusiasts who might not have been able to attend in the past, ensuring that the magic
            of film festivals remains alive even in these trying times.
            <br />
            <br />
            As the world gradually recovers, the resilience and innovation of the film festival
            community are shining through, promising an exciting future for this essential part of
            the industry.
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <strong
              style={{
                color: theme.color10,
              }}
            >
              Iconic Movie Theater Reopens After Renovation
            </strong>
            <br />
            <br />
            The historic Grand Palace Theater, a beloved landmark in the heart of the city, has
            finally reopened its doors to the public after an extensive and eagerly awaited
            renovation. Moviegoers can now enjoy the latest releases in the lap of luxury, complete
            with state-of-the-art sound and visuals that rival the most modern cinemas.
            <br />
            <br />
            The Grand Palace Theater, which has stood as a symbol of cinematic grandeur for
            generations, has been meticulously restored to its former glory. With plush seating,
            crystal chandeliers, and an ornate décor that transports visitors to a bygone era, it's
            more than just a cinema; it's an experience.
            <br />
            <br />
            The reopening of this iconic theater is a testament to the enduring appeal of the silver
            screen and the enduring love for the cinematic arts.
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <strong
              style={{
                color: theme.color10,
              }}
            >
              The Changing Landscape of Film Distribution
            </strong>
            <br />
            <br />
            The way movies are distributed is undergoing a significant transformation. With the rise
            of streaming services and the decline of traditional theaters, industry experts are
            reevaluating distribution strategies to adapt to the shifting landscape.
            <br />
            <br />
            While theaters are still a cornerstone of cinematic experiences, streaming platforms are
            making waves by providing convenient access to a wide array of content. This change has
            sparked discussions about the future of film distribution, prompting studios to explore
            new avenues for reaching audiences and maximizing profitability.
            <br />
            <br />
            As we navigate this evolving landscape, one thing is certain: the way we consume and
            distribute films will continue to evolve, offering both challenges and opportunities for
            the industry.
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            <strong
              style={{
                color: theme.color10,
              }}
            >
              Reimagining Classic Films for a New Generation
            </strong>
            <br />
            <br />
            Hollywood studios are revisiting classic films with modern reimaginings, offering a
            fresh take on beloved stories. From "The New Wizard of Oz" with cutting-edge visual
            effects to "Remastered Romeo and Juliet," which adds a contemporary twist to the
            timeless tale of love and tragedy, these projects aim to introduce these classic stories
            to a younger and more tech-savvy audience.
            <br />
            <br />
            "The New Wizard of Oz" promises to take viewers on a visually stunning journey through
            the land of Oz, leveraging the latest in CGI and 3D technology to bring the story to
            life as never before. Meanwhile, "Remastered Romeo and Juliet" explores the age-old tale
            against the backdrop of a modern metropolis, making the story relatable to a whole new
            generation of moviegoers.
            <br />
            <br />
            These reimaginings are breathing new life into cherished classics and capturing the
            imagination of both die-hard fans and newcomers to these timeless stories.
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}

export default News;
