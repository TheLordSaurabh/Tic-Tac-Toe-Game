import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({ scores, is_x_playing }) => {
  const { x_score, o_score } = scores;
  let x_bottom = "";
  let o_bottom = "";
  if(is_x_playing == true){
    o_bottom = "inactive";
  }
  else{
    x_bottom = "inactive";
  }
  return (
    <div className="scoreboard">
      <span className={`score x-score ${x_bottom}`}>X - {x_score}</span>
      <span className={`score o-score ${o_bottom}`}>O - {o_score}</span>
    </div>
  )
}
