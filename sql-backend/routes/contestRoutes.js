const express = require("express");
const router = express.Router();

const {
    getUserIdFromEmail,
    getProblemIds,
    addContest,
    isContestRunning,
    insertSolvedProblems
} = require("../controllers/contestController");

router.post("/add_contest", getUserIdFromEmail, addContest);
router.get("/is_contest_running", getUserIdFromEmail, isContestRunning);
router.post("/update_submission", getUserIdFromEmail, getProblemIds, insertSolvedProblems);

module.exports = router;