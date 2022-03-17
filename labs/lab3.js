document.getElementById("noteTitle").value = localStorage.getItem("title");
document.getElementById("notes").value = localStorage.getItem("notes");

function saveTitle() {
  let title = document.getElementById("noteTitle").value;
  localStorage.setItem("title", title);
}

function saveText() {
  let note = document.getElementById("notes").value;
  localStorage.setItem("notes", note);
}

function clearText() {
  localStorage.clear();
}
