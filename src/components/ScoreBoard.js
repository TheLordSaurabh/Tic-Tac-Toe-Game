import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { x_score, o_score } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {x_score}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {o_score}</span>
    </div>
  )
}
