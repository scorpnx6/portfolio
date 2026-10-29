const API = {

    BASE_URL: "https://digitalzn-production.up.railway.app",

    LOGIN: "/api/auth/login"

};

const form = document.getElementById("login-form");

const email = document.getElementById("email");

const password = document.getElementById("password");

const error = document.getElementById("error");

// Already logged in?
if(localStorage.getItem("token")){

    window.location.href="../calculator/suite.html";

}

form.addEventListener("submit", login);

async function login(e){

    e.preventDefault();

    error.textContent="";

    try{

        const response = await fetch(

            `${API.BASE_URL}${API.LOGIN}`,

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },

                body:JSON.stringify({

                    email:email.value.trim(),

                    password:password.value

                })

            }

        );

        const data = await response.json();

console.log("Status:", response.status);
console.log("Response:", data);

        if(!response.ok){

            throw new Error(data.message);

        }

        localStorage.setItem(

            "token",

            data.token

        );
        console.log("Token saved:", localStorage.getItem("token"));

        window.location.href="../calculator/suite.html";

    }

    catch(err){

        error.textContent = err.message;

    }

}