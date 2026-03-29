import "./profile.css"
import { getUserData } from "./utils"
import { useEffect, useState } from "react";


export default function Profile() {

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getUserData("nvnukumarutkarsh");
                console.log(result)
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return <>
        <div className="profile">
            <div className="profile-container">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    </>
}