let arr = [
  {
    dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1524255684952-d7185b509571?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1604681527661-41ab3a47b2c4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1604514649606-2fdd0399de88?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1576743962824-171cdf11bcd9?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1576745266018-9c735f5e3aac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
];
let clutter = "";
arr.forEach(function (elem, idx) {
  // console.log(idx);
  console.log(elem, idx);
  clutter += ` <div class="story">
  <img id="${idx}" src="${elem.dp}" alt="" />
</div>`;
});
let stories = document.querySelector(".stories");
let screen = document.querySelector(".screen");
stories.innerHTML = clutter;
stories.addEventListener("click", function (dets) {
  console.log(arr[dets.target.id].story);
  screen.style.display = "block";
  screen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
  setTimeout(function () {
    screen.style.display = "none";
  }, 2000);
});
