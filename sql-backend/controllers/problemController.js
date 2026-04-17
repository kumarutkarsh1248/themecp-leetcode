const { getDB } = require("../config/db");

async function getProblem(req, res) {
    const db = getDB();
    const rating = Number(req.query.rating);
    const user_id = Number(req.query.user_id);

    const sql = `
        SELECT p.url_title, p.id
        FROM problems p
        WHERE p.rating >= ? AND p.rating < ? + 100
          AND NOT EXISTS (
              SELECT 1
              FROM user_problems up
              WHERE up.problem_id = p.id
                AND up.user_id = ?
                AND up.status = 'solved'
          )
        ORDER BY p.rating ASC
        LIMIT 1;
    `;

    try {
        const [rows] = await db.query(sql, [rating, rating, user_id]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database query failed" });
    }
}

module.exports = { getProblem };