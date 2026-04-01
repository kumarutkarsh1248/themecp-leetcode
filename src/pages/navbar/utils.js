export async function removeEntry(sub){
    try {
        console.log("Sending info for user removal")
        const result = await axios.delete(`http://localhost:3002/remove_user/${sub}`);
        return result.data; 
    } catch (err) {
        console.error("Error in makeEntry:", err);
        throw err;
    }
}