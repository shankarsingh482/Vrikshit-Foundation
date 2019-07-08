import React from 'react';
import './leaderboard.css'
import LeaderBoardData from './constants';
import LeaderGrid from '../common/leadergrid'
class Leaderboard extends React.Component{
render()
{
  return (
  <div id="fh5co-content-section" class="fh5co-section-gray">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Our Leadership </h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
        {LeaderBoardData.map(p =><LeaderGrid image = {p.image} quotes ={p.quotes} position ={p.position} /> )}
				</div>
			</div>
		</div>
  )
}



}


export default Leaderboard;
