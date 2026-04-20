import React from 'react';
import TeamCard from '../components/TeamCard';
import Footer from '../components/Footer';
import rafaelImg from '../assets/team/Rafael.png';
import rykieImg from '../assets/team/Rykie.png';
import gioImg from '../assets/team/Gio.png';
import martinaImg from '../assets/team/Martina.png';

const MeetTheTeam = () => {
  return (
    <div className="min-h-screen bg-[#FCF1DE] flex flex-col font-sans">
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2E41AF] mb-4">Meet the Team</h1>
          <div className="h-1.5 w-24 bg-[#F68660] mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <TeamCard name="Rafael" role="Dev" image={rafaelImg} bio="..." />
          <TeamCard name="Rykie" role="Dev" image={rykieImg} bio="..." />
          <TeamCard name="Gio" role="Dev" image={gioImg} bio="..." />
          <TeamCard name="Martina" role="Dev" image={martinaImg} bio="..." />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeetTheTeam;