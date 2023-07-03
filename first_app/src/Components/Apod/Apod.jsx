import React from 'react'
import './Apod.css'

var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";


req.open("GET", url + api_key);
req.send();

function Apod(){

        req.addEventListener("load", async function(){
            if(req.status == 200 && req.readyState == 4){
            var response = JSON.parse(req.responseText);
            document.getElementById("title").textContent = response.title;
            document.getElementById("date").textContent = response.date;
            document.getElementById("pic").src = response.hdurl;
            document.getElementById("explanation").textContent = response.explanation;
        }
        })

        

        return(
            <>
                <div className="apodmain">
                    <h1>NASA Astronomy Picture Of The Day</h1>
                    <h2 id="title"></h2>
                    <h3>Date: <span id="date"></span></h3>
                    <img id="pic" src="" alt="NASA Picture Of The Day" width="100%"/>
                    <p id="explanation"></p>
                </div>
            </>
        )
}

export default Apod; 