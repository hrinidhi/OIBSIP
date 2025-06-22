const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (title && description) {
    addTask(title, description);
    form.reset();
  }
});

function addTask(title, description) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${title}</td>
    <td>${description}</td>
    <td><button class="delete-btn">X</button></td>
  `;

  tr.querySelector(".delete-btn").onclick = () => {
    tr.remove();
  };

  taskList.appendChild(tr);
}
