const app = require("./app");
const { connectDB } = require("./config/db");

async function startServer() {
    try {
        await connectDB();
        app.listen(3002, () => {
            console.log("Server is running on port 3002");
        });
    } catch (error) {
        console.log("Server start failed:", error);
    }
}

startServer();