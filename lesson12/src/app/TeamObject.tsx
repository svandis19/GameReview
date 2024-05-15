'use client';
import { useState, Fragment, useCallback } from "react"

type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return <div>Game clock</div>

}

type TeamProps = {
  name: string;
  score: number;
}

const Team = ({ name, score }: TeamProps) => {
  return (
    // <> kallast Fragment, erum ekki að returna neinu með þessu.
    <>
      <div>Name: {name}</div>
      <div>Score: {score || 0}</div>
    </>
  );
}

// búin að búa til TeamScore1 & updateTeamScore1 í const, til að geyma það. Kalla svo í það seinna til að byrta það á síðunni. 
export default function Home() {

  const [age, setAge] = useState(0);


  const [TeamOne, changeTeamOne] = useState(
    {
      name: "team name 1",
      teamScore: 0,
      buttonChangeTeam1: false
    }
  );
  const [TeamTwo, changeTeamTwo] = useState(
    {
      name: "team name 2",
      teamScore: 0,
      buttonChangeTeam1: false
    }
  );
  return (
    <div>
      <Header />
      <Team name={TeamOne.name} score={TeamOne.teamScore} ></Team>
      Change Team Name:
      <div>
        <input
          type="text"
          style={{ border: "1px solid #ddd" }}
          onChange={(e) => changeTeamOne({ ...TeamOne, name: e.target.value })}
        ></input>
      </div>
      Change Team Score:
      <div>
        <input
          type="number"
          style={{ border: "1px solid #ddd" }}
          onChange={(e) => changeTeamOne({ ...TeamOne, teamScore: e.target.value })}
        />
      </div>
      <Team name={TeamTwo.name} score={TeamTwo.teamScore} ></Team>
      Change Team Name:
      <div>
        <input
          type="text"
          style={{ border: "1px solid #ddd" }}
          onChange={(e) => changeTeamTwo({ ...TeamTwo, name: e.target.value })}
        ></input>
      </div>
      Change Team Score:
      <div>
        <input
          type="number"
          style={{ border: "1px solid #ddd" }}
          onChange={(e) => changeTeamTwo({ ...TeamTwo, teamScore: e.target.value })}
        />
      </div>
    </div>
  )
}
