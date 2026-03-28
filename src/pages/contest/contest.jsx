import { useState, useEffect } from "react"
import {ChooseContest} from "./choose-contest"
import {CreatedContest} from "./created-contest"

export default function Contest() {
  const [themeCreated, setIsSubmitted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);

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