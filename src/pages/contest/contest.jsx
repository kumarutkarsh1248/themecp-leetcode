import { useState, useEffect } from "react"
import { ChooseContest } from "./choose-contest"
import { CreatedContest } from "./created-contest"
import { Running } from "./running-contest"
import { useAuth0 } from "@auth0/auth0-react"
import { isContestRunning } from "./utility";

export default function Contest() {
  const [themeCreated, setIsSubmitted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [questions, getQuestions] = useState([]);
  const [ratings, getRatings] = useState([]);

  const [running, setRunning] = useState(false);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  useEffect( ()=>{
    if(!user) return

    async function checkContest() {

      const result = await isContestRunning(user.email);
      console.log("here", result);
    }

    checkContest();

  }, [user])

  return (
    <>
      {!themeCreated ? (
        <ChooseContest
          onSubmit={() => setIsSubmitted(true)}
          setSelectedLevel={setSelectedLevel}
        />
      ) : (

        !running ? (
          <CreatedContest
            level={selectedLevel}
            running={setRunning}
            copyQuestions={getQuestions}
            copyRatings={getRatings}
          />
        ) : <Running
          ques={questions}
          ratngs={ratings}
        />
      )}
    </>
  );
}