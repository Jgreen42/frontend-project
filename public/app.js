document.querySelector("#alpha_myFile").addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("recent-image", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
  const recentImagDataUrl = localStorage.getItem("recent-image");

  if (recentImagDataUrl) {
    document.querySelector("#content").setAttribute("src", recentImagDataUrl) &&
      document
        .querySelector("#loadImage")
        .setAttribute("src", recentImagDataUrl);
  }
  document.addEventListener("SubmitEvent", (event) => {
    if (event) {
      const reader2 = new FileReader();

      reader2.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
      });
    }
  });
});
