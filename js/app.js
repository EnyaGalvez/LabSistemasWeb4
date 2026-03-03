let globalXP = 0;
const missions = [];

const nameInput = document.getElementById('mission-name');
const descInput = document.getElementById('mission-desc');
const diffInput = document.getElementById('mission-diff');
const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('mission-list');
const xpDisplay = document.getElementById('global-xp');
const rankDisplay = document.getElementById('user-rank');

function updateRank() {
    if (globalXP < 50) {
        rankDisplay.innerText = "Novice";
    } else if (globalXP >= 50 && globalXP < 150) {
        rankDisplay.innerText = "Wizard";
    } else {
        rankDisplay.innerText = "Sorcerer";
    }
}

addBtn.onclick = function() {
    const name = nameInput.value;
    const desc = descInput.value;
    const xpValue = parseInt(diffInput.value);

    if (name === "" || desc === "") {
        alert("Por favor llena todos los campos");
        return;
    }

    const newMission = {
        nombre: name,
        descripcion: desc,
        xp: xpValue,
        estado: "PENDIENTE"
    };

    missions.push(newMission);
    console.log(newMission);

    const li = document.createElement('li');
    li.className = 'mission-item';
    li.innerHTML = `
        <div>
            <strong>${newMission.nombre}</strong> (${newMission.xp} XP)<br>
            <small>${newMission.descripcion}</small>
        </div>
        <button class="done-btn">Completar</button>
    `;

    const doneBtn = li.querySelector('.done-btn');
    doneBtn.onclick = function() {
        newMission.estado = "SUCCESSFUL";
        globalXP += newMission.xp;
        
        xpDisplay.innerText = globalXP;
        updateRank();

        li.innerHTML = `<span>${newMission.nombre} - ${newMission.estado}</span>`;
        li.classList.add('successful');
    };

    listContainer.appendChild(li);

    nameInput.value = "";
    descInput.value = "";
};