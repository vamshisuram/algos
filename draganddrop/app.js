const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

// look for dragstart event - add class .dragging (opacity 0.5)
draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
});

// look for dragend - remove class
draggables.forEach((draggable) => {
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

// container - dragover event
// get element (using .dragging (only one))
// container.appendchild
containers.forEach((container) => {
  container.addEventListener("dragover", () => {
    const elm = document.querySelector(".dragging");
    container.appendChild(elm);
  });
});
