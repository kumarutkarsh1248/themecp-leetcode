import { useState, useEffect } from "react"
import { ChooseContest } from "./choose-contest"
import { CreatedContest } from "./created-contest"
import { Running } from "./running-contest"
import { useAuth0 } from "@auth0/auth0-react"
import { getSecondsAgo, isContestRunning } from "./utility";

export default function Contest({leetcodeProfileName}) {
  const [themeCreated, setIsSubmitted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [questions, getQuestions] = useState([]);
  const [ratings, getRatings] = useState([]);
  const [startTime, getStartTime] = useState(0);

  const [running, setRunning] = useState(false);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!user) return;

    async function checkContest() {
      const result = await isContestRunning(user.email);

      if (!result.success) {
        // message can be
        console.log("Request failed:", result.message);
        return;
      }

      if (!result.data) {
        console.log("No contest found");
        return;
      }
      
      // we found the last con
      let sec = getSecondsAgo(result.data.start_time);
      if(sec < 50){ // contest running
        setIsSubmitted(true)
        setSelectedLevel(result.data.selected_level)
        setRunning(true)
        getQuestions([1, 2, 3, 4])
        getRatings([1, 2, 3, 4444])
        getStartTime(sec)
      }

      console.log("sec", sec)
    }

    checkContest();
  }, [user]);

  return (
    <>
      {!themeCreated ? (
        <ChooseContest
          setIsSubmitted={setIsSubmitted}
          setSelectedLevel={setSelectedLevel}
          leetcodeProfileName={leetcodeProfileName}
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
          start_time={startTime}
          leetcodeProfileName={leetcodeProfileName}
        />
      )}
    </>
  );
}