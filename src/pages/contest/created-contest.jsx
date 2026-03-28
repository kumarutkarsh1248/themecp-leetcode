import { useState, useEffect } from "react"
import "./created-contest.css"
import { getRatings, getQuestions } from "./utility";

export function CreatedContest({ level }) {
    const ratings = getRatings(level);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const q = await getQuestions(ratings);
            setQuestions(q);
        }

        fetchData();
    }, [level]);

    return (
        <div className="created-contest">

            <div className="row">
                <label><b>Enter Contest Level :</b></label>
                <input type="number" value={level ?? ""} readOnly />
            </div>

            <div className="theme">Theme : mixed</div>

            <div className="middle-table">
                <div className="outer">
                    <div className="left">Problem Rating :</div>
                    <div className="right">
                        {ratings.map((r, i) => (
                            <button key={i} className={`cell b${i + 1}`}>{r}</button>
                        ))}
                    </div>
                </div>

                <div className="outer">
                    <div className="left">Problem Content :</div>
                    <div className="right">
                        {[1, 2, 3, 4].map((i) => (
                            <button key={i} className={`cell b${i} link`}>
                                <a
                                    href={`https://leetcode.com/problems/${questions[i - 1]}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Problem {i}
                                </a>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contest-duration">Contest Duration : 120 min</div>

            <div className="contest-countdown">
                Contest Starts in 15 sec before starting the contest
            </div>

            <button className="start-btn">Start</button>
        </div>
    );
}