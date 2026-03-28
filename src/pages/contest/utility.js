import axios from "axios";

// Intercept all requests
// axios.interceptors.request.use(request => {
//     console.log("Full Axios Request:", request);
//     return request;
// });

export function getRatings(level) {
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

export async function getQuestions(ratings) {
    // let allQuestions = ["a", "b", "c", "d"];
    let allQuestions = [];

    for (let rating of ratings) {
        try {
            const result = await axios.get("http://localhost:3002/get", {
                params: {
                    rating: rating,
                    user_id: 0
                }
            });
            console.log("here", result.data[0]["url_title"])

            allQuestions.push(result.data[0]["url_title"]);

        } catch (err) {
            console.log(err);
        }
    }
    return allQuestions;
}