import { useState, useEffect } from "react";
import "./running-contest.css"

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Running time = {count}</h1>;
}

export function Running({ ques, ratngs }) {
  return (
    <>

      <div className="running-container">

        <Timer />
        <button>Refresh to verify submission</button>

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
                <td>4</td>
              </tr>
              <tr>
                <td>2</td>
                <td> <a href={`https://leetcode.com/problems/${ques[1][1]} `}
                  target="_blank"
                  rel="noopener noreferrer">Problem B</a> </td>
                <td>{ratngs[1]}</td>
                <td>4</td>
              </tr>
              <tr>
                <td>3</td>
                <td> <a href={`https://leetcode.com/problems/${ques[2][1]} `}
                  target="_blank"
                  rel="noopener noreferrer">Problem C</a> </td>
                <td>{ratngs[2]}</td>
                <td>4</td>
              </tr>
              <tr>
                <td>4</td>
                <td> <a href={`https://leetcode.com/problems/${ques[3][1]} `}
                  target="_blank"
                  rel="noopener noreferrer">Problem D</a> </td>
                <td>{ratngs[3]}</td>
                <td>4</td>
              </tr>


            </tbody>
          </table>

        </div>

      </div>


    </>
  );
}