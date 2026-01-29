function toggleDark() {
  document.body.classList.toggle("dark");
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}

function openVideo(title) {
  localStorage.setItem("videoTitle", title);
  window.location.href = "watch.html";
}

function searchVideos() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let videos = document.querySelectorAll(".video-card");

  videos.forEach(video => {
    let text = video.innerText.toLowerCase();
    video.style.display = text.includes(input) ? "" : "none";
  });
}
