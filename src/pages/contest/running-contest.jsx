import { useState, useEffect } from "react";
import { getSubmissionTime } from "./utility";
import "./running-contest.css"

function Timer({ start_time, count, setCount }) {
  // const [count, setCount] = useState(start_time, count, setCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        const newCount = prev + 1;

        if (newCount >= 50) {
          clearInterval(interval);
          window.location.reload(); //reload entire app
        }

        return newCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Running time = {count}</h1>;
}

export function Running({ ques, ratngs, start_time, leetcodeProfileName }) {
  const [count, setCount] = useState(start_time);
  const [submissionTime, setSubmissionTime] = useState([0, 0, 0, 0]);

  return (
    <>
      <div className="running-container">

        <Timer start_time={start_time} count={count} setCount={setCount} />
        <button onClick={async () => {

          try {
            const updated = await getSubmissionTime(
              leetcodeProfileName,
              ques,
              count,
              submissionTime
            );
            console.log(updated)

            setSubmissionTime(updated);
          }
          catch (err) {
            console.log("some error occured while getting the submissio status")
            console.log(err)
          }


        }}>Refresh to verify submission</button>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Status</th>
              </tr>

            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> <a href={`https://leetcode.com/problems/${ques[0][1]} `}
                  target="_blank"
                  rel="noopener noreferrer">Problem A</a> </td>
                <td>{ratngs[0]}</td>
                <td>{submissionTime[0] ? "Accepted" : "not yet done"}</td>
              </tr>
              <tr>
                <td>2</td>
                <td> <a href={`https://leetcode.com/problems/${ques[1][1]} `}
                  target="_blank"
                  rel="noopener noreferrer">Problem B</a> </td>
                <td>{ratngs[1]}</td>
                <td>{submissionTime[1] ? "Accepted" : "not yet done"}</td>
              </tr>
              <tr>
                <td>3</td>
                <td> <a href={`https://leetcode.com/problems/${ques[2][1]} `}
                  target="_blank"
                  rel="noopener noreferrer">Problem C</a> </td>
                <td>{ratngs[2]}</td>
                <td>{submissionTime[2] ? "Accepted" : "not yet done"}</td>
              </tr>
              <tr>
                <td>4</td>
                <td> <a href={`https://leetcode.com/problems/${ques[3][1]} `}
                  target="_blank"
                  rel="noopener noreferrer">Problem D</a> </td>
                <td>{ratngs[3]}</td>
                <td>{submissionTime[3] ? "Accepted" : "not yet done"}</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>


    </>
  );
}