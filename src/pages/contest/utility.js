import axios from "axios";

// Intercept all requests
// axios.interceptors.request.use(request => {
//     console.log("Full Axios Request:", request);
//     return request;
// });

function getRatings(level) {
    if (level == null || isNaN(level)) {
        return [1000, 1200, 1400, 1600];
    }

    let r1 = 1000;
    let r2 = 1200;
    let r3 = 1400;
    let r4 = 1600;

    for (let i = 0; i <= level; i++) {
        if (i % 4 === 1) r1 += 100;
        else if (i % 4 === 2) r2 += 100;
        else if (i % 4 === 3) r3 += 100;
        else if (i !== 0) r4 += 100;
    }
    return [r1, r2, r3, r4]; // return numbers, not strings
}

async function getQuestions(ratings) {
    // let allQuestions = ["a", "b", "c", "d"];
    let allQuestions = [];

    for (let rating of ratings) {
        try {
            const result = await axios.get("http://localhost:3002/problems/get", {
                params: {
                    rating: rating,
                    user_id: 0
                }
            });

            allQuestions.push([result.data[0]["id"], result.data[0]["url_title"]]);

        } catch (err) {
            console.log(err);
        }
    }
    return allQuestions;
}

async function registerContest(email, level, questions) {

    const data = {
        "email": email,
        "selected_level": level,
        "problem_id1": questions[0][0],
        "problem_id2": questions[1][0],
        "problem_id3": questions[2][0],
        "problem_id4": questions[3][0]
    }
    console.log(data)

    try {
        const result = await axios.post("http://localhost:3002/contest/add_contest", data)
    }
    catch (err) {
        console.log(err)
    }
}

async function isContestRunning(email) {
    try {
        const response = await axios.get(
            "http://localhost:3002/contest/is_contest_running",
            {
                params: { email },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error while checking contest status:", error);

        return {
            success: false,
            data: null,
            message: "Request failed",
        };
    }
}

function getSecondsAgo(timestamp) {
    const past = new Date(timestamp).getTime(); // ms
    const now = Date.now(); // ms

    const diffMs = now - past; // difference in ms
    return Math.floor(diffMs / 1000); // convert to seconds
}

async function getRecentSubmissions(username) {
  const res = await axios.get("http://localhost:3002/leetcode/recent-submissions", {
    params: {
      username: username
    }
  });

  return res.data;
}

async function getSubmissionTime(userName, question, count, submissionTime) {
  const submission = await getRecentSubmissions(userName);
  console.log(question)
  console.log(submission)

  const newTimes = [...submissionTime]; // copy

  for (const sub of submission) {
    for (let i = 0; i < 4; i++) {
      if (
        sub.titleSlug === question[i][1] &&
        sub.statusDisplay?.toLowerCase() === "accepted"
      ) {
        newTimes[i] = count;
      }
    }
  }
  return newTimes;
}

async function updateSubmissionTime(submissionTime, email){
    const data = {
        "email": email,
        "problem1_solved_at": submissionTime[0],
        "problem2_solved_at": submissionTime[1],
        "problem3_solved_at": submissionTime[2],
        "problem4_solved_at": submissionTime[3]
    }
    console.log(data)

    try {
        const result = await axios.post("http://localhost:3002/contest/update_submission_time", data)
    }
    catch (err) {
        console.log(err)
    }
}

export {
    getSecondsAgo,
    isContestRunning,
    registerContest,
    getQuestions,
    getRatings,
    getSubmissionTime,
    updateSubmissionTime
};