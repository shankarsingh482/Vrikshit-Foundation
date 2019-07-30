import React from 'react';
import TopBanner from '../../banner/topBanner';
import Feature from '../../features/features';
import MainGallery from '../../mainGallery/mainGallery';
import Leaderboard from '../../leaderboard/leaderboard';
import Support from '../../supportUS/supportus';
const Home = () => {
  return (
    <>
      <TopBanner />
      <Feature />
      <MainGallery />
      <Leaderboard />
      <Support />
    </>
  );
};

export default Home;
