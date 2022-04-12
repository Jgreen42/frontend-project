document.querySelector(".imgGrab").addEventListener("submit", (e)=> {
    e.preventDefault()
    console.log("working");
    const data = new FormData(e.target);
  console.log('data rendered', data);

});

