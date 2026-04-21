import React from 'react';
import TeamCard from '../Components/TeamCard';
import Footer from '../Components/Footer';
import Navbar from './Navbar';

// Importing your PNGs
import rafaelImg from '../assets/team/Raf.png'; 
import rykieImg from '../assets/team/Rykie.png';
import gioImg from '../assets/team/Gio.png';
import martinaImg from '../assets/team/Martina.png';

const MeetTheTeam = ({ setCurrentPage }) => {
  return (
    <div className="team-page-container">
      <Navbar setCurrentPage={setCurrentPage} />
      
      <main style={{ flexGrow: 1, padding: '40px 0' }}>
      <h1 style={{ 
        textAlign: 'center', 
        fontFamily: 'Ubuntu', 
        color: 'var(--ocean-twilight)', 
        fontSize: '3.5rem', 
        letterSpacing: '-1px' // Makes it look professional like the mockup
      }}>
        <i style={{ fontWeight: '500' }}>Meet the Pogis &</i> <b style={{ fontWeight: '800' }}>Martina</b>
      </h1>

        {/* This class "team-grid" from your App.css is what makes them a row! */}
        <div className="team-grid">
        <TeamCard 
          name="Raf" 
          role="Dev" 
          image={rafaelImg} 
          bio="No.1 Pogi Model" 
          socials={{ 
            instagram: "https://instagram.com/rrahffy", 
            linkedin: "https://www.linkedin.com/in/rafael-jack-rafanan-5b1031341/",
            github: "https://github.com/rrahffy" 
          }} 
        />
        <TeamCard
          name="Rykie" 
          role="Dev" 
          image={rykieImg} 
          bio="No.1 Pogi Head Scratcher" 
          socials={{ 
            instagram: "https://instagram.com/rylelvr", 
            linkedin: "https://www.linkedin.com/in/rykie-shaul-lenon-48887a250/",
            github: "https://github.com/KaitoMikazuki" 
          }} 
        />
        <TeamCard 
          name="Gio" 
          role="Dev" 
          image={gioImg} 
          bio="Gio is just there" 
          socials={{ 
            instagram: "https://instagram.com/glansalty", 
            linkedin: "https://linkedin.com/in/",
            github: "https://github.com/VGioR" 
          }} 
        />
        <TeamCard 
          name="Martina" 
          role="Dev" 
          image={martinaImg} 
          bio="Enjoying Your Presence" 
          socials={{ 
            instagram: "https://instagram.com/llamartina.s", 
            linkedin: "https://www.linkedin.com/in/martina-llamas-074873358/",
            github: "https://github.com/tinatams" 
          }} 
        />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeetTheTeam;