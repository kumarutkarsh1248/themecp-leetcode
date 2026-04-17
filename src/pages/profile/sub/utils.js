import axios from "axios";

async function getUserData(user) {
    try {
        const result = await axios.get(`http://localhost:3002/leetcode/${user}`, user);
        return result.data; 
    } catch (err) {
        console.error("Error in makeEntry:", err);
        throw err;
    }
}

async function saveProfileName(user_profile_name, email){

    try{
        const result = await axios.post("http://localhost:3002/users/save_profile_name", {
            user_profile_name: user_profile_name,
            email: email
        })
    }
    catch(err){
        console.log("error while saving the profile name")
    }
}

export {
    saveProfileName,
    getUserData
};