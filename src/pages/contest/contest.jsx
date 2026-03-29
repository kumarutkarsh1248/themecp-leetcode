import { useState, useEffect } from "react"
import {ChooseContest} from "./choose-contest"
import {CreatedContest} from "./created-contest"
import { useAuth0 } from "@auth0/auth0-react"

export default function Contest() {
  const [themeCreated, setIsSubmitted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      {!themeCreated ? (
        <ChooseContest
          onSubmit={() => setIsSubmitted(true)}
          setSelectedLevel={setSelectedLevel}
        />
      ) : (
        <CreatedContest level={selectedLevel} />
      )}
    </>
  );
}