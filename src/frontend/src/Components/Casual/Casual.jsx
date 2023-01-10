import React from 'react';
import './Casual.css'

import Meme from './Assets/Meme.png'

export default function casual() {

    return (
            <div className="body-common">
                <div>
                    Gaming is easily one of my most crucial pastimes. A part of my day is always dedicated to it. Simulation games are my most favourite. I equally love sliding into virtual worlds to play online. Here are some of my most favourite titles; if you are into either of them, lets have a cup of tea over it sometime :)
                    <div className="game_group">
                        <div className="game_img" id="ksp" onClick={()=>{window.open('https://store.steampowered.com/bundle/9245/Kerbal_Space_Program_Complete_Edition/','mywindow');}}></div>
                        <div className="game_img" id="subnautica" onClick={()=>{window.open('https://store.epicgames.com/en-US/p/subnautica','mywindow');}}></div>
                        <div className="game_img" id="rl" onClick={() => {window.open('https://store.epicgames.com/en-US/p/rocket-league','mywindow');}}></div>
                        <div className="game_img" id="cs" onClick={() => {window.open('https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/','mywindow');}}></div>
                    </div>
                </div>
                <div>
                    Meming is my next favourite thing. I love to delve deeper into the history of trending memes and find out what gave them their funny edge.
                </div>
                <img alt="Meme" src={Meme} className="meme_div" />
                <div>
                    Last but not the least, I ocassionally pick up my pencil and drawing book. While I would not say drawing is my passion, I let the artist in me take control once in a while and draw a line here and a curve there. You can have a romp around my tiny art
                    gallery <a href="https://photos.app.goo.gl/xUt6P46QvXgjAyBa6" target="_blank" rel="noreferrer">here</a>.
                </div>
        </div>
    );
  }