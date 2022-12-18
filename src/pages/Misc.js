import React from 'react';
import Navigation from './blocks/Navigation';
import Footer from './blocks/Footer'
import '../css/Misc.scss'
import SpotifyNowPlaying from './Spotify/Spotify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

function Misc() {
  const likes = ['Basketball (Lakers fan!) 🏀', 'Baseball ⚾', 'Soccer ⚽', 'Ski ⛷', 'Dogs 🐕', 'Killer Whale 🐋', 'Coffee ☕', 'Coca-Cola 🥤'];
  return (
    <div class="body">
      <Navigation></Navigation>
      <div id="misc">
        <div className="wrapper">
          <section className="intro">
            <header>
              <h2>fun facts</h2>
            </header>
          </section>
          <section className="resume_top">
            <header>
              <h2>I like...</h2>
            </header>
            <ul>
              {likes.map((value, index) => { return <li>{value}</li> })}
            </ul>
          </section>
          <section className="resume">
            <header>
              <h2><FontAwesomeIcon icon={faSpotify} size='xl' className='spotify_icon'/> I am playing...</h2>
            </header>
            <SpotifyNowPlaying/>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Misc;
