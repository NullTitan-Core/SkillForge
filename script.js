function addSkill() {
    const input = document.getElementById("skillInput");
    const list = document.getElementById("skillList");

    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    list.appendChild(li);
    input.value = "";
}
