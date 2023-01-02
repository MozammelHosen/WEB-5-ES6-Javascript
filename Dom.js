document.getElementById("addBorder").addEventListener("click", function () {
  // console.log("btn Clicked");
  const container = document.getElementById("friends-container");
  container.style.border = "3px solid red";
});
// Add Background Color

function addBackground() {
  const friends = document.getElementsByClassName("friend");
  for (const friend of friends) {
    friend.style.backgroundColor = "yellow";
  }
}
// add Friends
document.getElementById("add-friend").addEventListener("click", function () {
  const friendsContainer = document.getElementById("friends-container");
  const friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");
  friendDiv.innerHTML = `
            <h3 class="friend-name">friend-1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dicta.</p>
    `;
  friendsContainer.appendChild(friendDiv);
});
