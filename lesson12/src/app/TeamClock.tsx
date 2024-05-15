'use client';
import exp from "constants"
import Image from "next/image"
import { useState, Fragment, useCallback } from "react"

const Header = () => {
    return <div>Game clock</div>
}
// header = <div> game clock


// Team
// Props: name, Score
// Ert að senda name og score niður í þennan part kóðans
// Return: Skilar þér alltaf sama hlutnum. 

const Team = ({ name, score }: { name: string, score: number }) => {
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
    const [TeamScore1, updateTeamScore1,] = useState(0); // useState er geymsluplás
    const [teamName, changeTeamName] = useState("Team name 1");
    const [buttonChangeTeam, changeButtonTeamName] = useState(false);
    return (
        <div>
            <Header />
            <Team name={teamName} score={TeamScore1}></Team>
            <Team name={teamName} score={TeamScore1}></Team>
            <Team name={teamName} score={TeamScore1}></Team>
            <Team name={teamName} score={TeamScore1}></Team>
            Change Team Name:
            {buttonChangeTeam ? (
                <>
                    <input
                        style={{ border: "1px solid #ddd" }}
                        type="text"
                        placeholder="team name"
                        onChange={(e) => changeTeamName(e.target.value)}
                    ></input>
                    <button
                        style={{ border: "1px solid #eee" }}
                        onClick={() => changeButtonTeamName(false)}
                    >
                        Save
                    </button>
                </>
            ) : (
                <button
                    style={{ border: "1px solid #eee" }}
                    onClick={() => changeButtonTeamName(true)}
                >
                    Change Team Name
                </button>
            )}
            <Team name='Team 2' score={4} ></Team>
            Change Team Score 1:
            <input
                type="number"
                // e stendur fyrir change event, og fullt af öðru. Síðan kemur e er með eh target value
                onChange={(e) => updateTeamScore1(parseInt(e.target.value))} >
            </input>
        </div>
    );
}