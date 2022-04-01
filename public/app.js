
const form = document.querySelector(".user-form");

form.addEventListener("submit", (e) => {
    const data = new FormData(e.target);
    const newUser = {
        name: data.get("name"),
        photoid: data.get("photoid"),
    };
    $.post({
        url: "/users" 


        
       