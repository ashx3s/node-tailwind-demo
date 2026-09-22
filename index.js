const boxes = {
  ArrowUp: { el: document.getElementById("box-up"), index: 0 },
  ArrowDown: { el: document.getElementById("box-down"), index: 0 },
};

window.addEventListener("keydown", (e) => {
  const entry = boxes[e.key];
  console.log("event: ", e, "Entry", entry);
  // remove a color
  entry.el.classList.remove("bg-blue-500");
  // add a colour
  entry.el.classList.add("bg-red-500");
});
