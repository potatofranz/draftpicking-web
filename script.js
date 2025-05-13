const heroes = [
    { name: 'Aamon', img: 'Assets/Hero/Pickaamon.png' },
    { name: 'Akai', img: 'Assets/Hero/Pickakai.png' },
    { name: 'Aldous', img: 'Assets/Hero/Pickaldous.png' },
    { name: 'Alice', img: 'Assets/Hero/Pickalice.png' },
    { name: 'Alpha', img: 'Assets/Hero/Pickalpha.png' },
    { name: 'Alucard', img: 'Assets/Hero/Pickalucard.png' },
    { name: 'Angela', img: 'Assets/Hero/Pickangela.png' },
    { name: 'Argus', img: 'Assets/Hero/Pickargus.png' },
    { name: 'Arlot', img: 'Assets/Hero/Pickarlot.png' },
    { name: 'Atlas', img: 'Assets/Hero/Pickatlas.png' },
    { name: 'Aulus', img: 'Assets/Hero/Pickaulus.png' },
    { name: 'Aurora', img: 'Assets/Hero/Pickaurora.png' },
    { name: 'Badang', img: 'Assets/Hero/Pickbadang.png' },
    { name: 'Balmond', img: 'Assets/Hero/Pickbalmond.png' },
    { name: 'Bane', img: 'Assets/Hero/Pickbane.png' },
    { name: 'Barats', img: 'Assets/Hero/Pickbarats.png' },
    { name: 'Baxia', img: 'Assets/Hero/Pickbaxia.png' },
    { name: 'Beatrix', img: 'Assets/Hero/Pickbeatrix.png' },
    { name: 'Beleric', img: 'Assets/Hero/Pickbeleric.png' },
    { name: 'Benedetta', img: 'Assets/Hero/Pickbenedetta.png' },
    { name: 'Brody', img: 'Assets/Hero/Pickbrody.png' },
    { name: 'Bruno', img: 'Assets/Hero/Pickbruno.png' },
    { name: 'Carmila', img: 'Assets/Hero/Pickcarmila.png' },
    { name: 'Cecilion', img: 'Assets/Hero/Pickcecilion.png' },
    { name: 'Chang\'e', img: 'Assets/Hero/Pickchang_e.png' },
    { name: 'Chip', img: 'Assets/Hero/Pickchip.png' },
    { name: 'Chou', img: 'Assets/Hero/Pickchou.png' },
    { name: 'Cici', img: 'Assets/Hero/Pickcici.png' },
    { name: 'Claude', img: 'Assets/Hero/Pickclaude.png' },
    { name: 'Clint', img: 'Assets/Hero/Pickclint.png' },
    { name: 'Cyclops', img: 'Assets/Hero/Pickcyclops.png' },
    { name: 'Diggie', img: 'Assets/Hero/Pickdiggie.png' },
    { name: 'Dyroth', img: 'Assets/Hero/Pickdyroth.png' },
    { name: 'Edith', img: 'Assets/Hero/Pickedith.png' },
    { name: 'Esmeralda', img: 'Assets/Hero/Pickesmeralda.png' },
    { name: 'Estes', img: 'Assets/Hero/Pickestes.png' },
    { name: 'Eudora', img: 'Assets/Hero/Pickeudora.png' },
    { name: 'Fanny', img: 'Assets/Hero/Pickfanny.png' },
    { name: 'Faramis', img: 'Assets/Hero/Pickfaramis.png' },
    { name: 'Floryn', img: 'Assets/Hero/Pickfloryn.png' },
    { name: 'Franco', img: 'Assets/Hero/Pickfranco.png' },
    { name: 'Fredrin', img: 'Assets/Hero/Pickfredrin.png' },
    { name: 'Freya', img: 'Assets/Hero/Pickfreya.png' },
    { name: 'Gatotkaca', img: 'Assets/Hero/Pickgatotkaca.png' },
    { name: 'Gloo', img: 'Assets/Hero/Pickgloo.png' },
    { name: 'Gord', img: 'Assets/Hero/Pickgord.png' },
    { name: 'Granger', img: 'Assets/Hero/Pickgranger.png' },
    { name: 'Grock', img: 'Assets/Hero/Pickgrock.png' },
    { name: 'Guinevere', img: 'Assets/Hero/Pickguinevere.png' },
    { name: 'Gusion', img: 'Assets/Hero/Pickgusion.png' },
    { name: 'Hanabi', img: 'Assets/Hero/Pickhanabi.png' },
    { name: 'Hanzo', img: 'Assets/Hero/Pickhanzo.png' },
    { name: 'Harith', img: 'Assets/Hero/Pickharith.png' },
    { name: 'Harley', img: 'Assets/Hero/Pickharley.png' },
    { name: 'Hayabusa', img: 'Assets/Hero/Pickhayabusa.png' },
    { name: 'Helcurt', img: 'Assets/Hero/Pickhelcurt.png' },
    { name: 'Hilda', img: 'Assets/Hero/Pickhilda.png' },
    { name: 'Hylos', img: 'Assets/Hero/Pickhylos.png' },
    { name: 'Irithel', img: 'Assets/Hero/Pickirithel.png' },
    { name: 'Ixia', img: 'Assets/Hero/Pickixia.png' },
    { name: 'Jawhead', img: 'Assets/Hero/Pickjawhead.png' },
    { name: 'Johnson', img: 'Assets/Hero/Pickjohnson.png' },
    { name: 'Joy', img: 'Assets/Hero/Pickjoy.png' },
    { name: 'Julian', img: 'Assets/Hero/Pickjulian.png' },
    { name: 'Kadita', img: 'Assets/Hero/Pickkadita.png' },
    { name: 'Kagura', img: 'Assets/Hero/Pickkagura.png' },
    { name: 'Kaja', img: 'Assets/Hero/Pickkaja.png' },
    { name: 'Karina', img: 'Assets/Hero/Pickkarina.png' },
    { name: 'Karrie', img: 'Assets/Hero/Pickkarrie.png' },
    { name: 'Khaleed', img: 'Assets/Hero/Pickkhaleed.png' },
    { name: 'Khufra', img: 'Assets/Hero/Pickkhufra.png' },
    { name: 'Kimmy', img: 'Assets/Hero/Pickkimmy.png' },
    { name: 'Lancelot', img: 'Assets/Hero/Picklancelot.png' },
    { name: 'Lukas', img: 'Assets/Hero/Picklukas.png' },
    { name: 'Lapu Lapu', img: 'Assets/Hero/Picklapulapu.png' },
    { name: 'Layla', img: 'Assets/Hero/Picklayla.png' },
    { name: 'Leomord', img: 'Assets/Hero/Pickleomord.png' },
    { name: 'Lesley', img: 'Assets/Hero/Picklesley.png' },
    { name: 'Ling', img: 'Assets/Hero/Pickling.png' },
    { name: 'Lolita', img: 'Assets/Hero/Picklolita.png' },
    { name: 'Lunox', img: 'Assets/Hero/Picklunox.png' },
    { name: 'Luo Yi', img: 'Assets/Hero/Pickluoyi.png' },
    { name: 'Lylia', img: 'Assets/Hero/Picklylia.png' },
    { name: 'Martis', img: 'Assets/Hero/Pickmartis.png' },
    { name: 'Masha', img: 'Assets/Hero/Pickmasha.png' },
    { name: 'Mathilda', img: 'Assets/Hero/Pickmathilda.png' },
    { name: 'Melissa', img: 'Assets/Hero/Pickmelissa.png' },
    { name: 'Minotaur', img: 'Assets/Hero/Pickminotour.png' },
    { name: 'Minsitthar', img: 'Assets/Hero/Pickminsitthar.png' },
    { name: 'Miya', img: 'Assets/Hero/Pickmiya.png' },
    { name: 'Moskov', img: 'Assets/Hero/Pickmoskov.png' },
    { name: 'Nana', img: 'Assets/Hero/Picknana.png' },
    { name: 'Natalia', img: 'Assets/Hero/Picknatalia.png' },
    { name: 'Nathan', img: 'Assets/Hero/Picknathan.png' },
    { name: 'Nolan', img: 'Assets/Hero/Picknolan.png' },
    { name: 'Novaria', img: 'Assets/Hero/Picknovaria.png' },
    { name: 'Odette', img: 'Assets/Hero/Pickodette.png' },
    { name: 'Paquito', img: 'Assets/Hero/Pickpaquito.png' },
    { name: 'Parsha', img: 'Assets/Hero/Pickparsha.png' },
    { name: 'Phoveus', img: 'Assets/Hero/Pickphoveus.png' },
    { name: 'Popol and Kupa', img: 'Assets/Hero/Pickpopolandkupa.png' },
    { name: 'Rafaela', img: 'Assets/Hero/Pickrafaela.png' },
    { name: 'Roger', img: 'Assets/Hero/Pickroger.png' },
    { name: 'Ruby', img: 'Assets/Hero/Pickruby.png' },
    { name: 'Saber', img: 'Assets/Hero/Picksaber.png' },
    { name: 'Selena', img: 'Assets/Hero/Pickselena.png' },
    { name: 'Silvanna', img: 'Assets/Hero/Picksilvanna.png' },
    { name: 'Sun', img: 'Assets/Hero/Picksun.png' },
    { name: 'Suyou', img: 'Assets/Hero/Picksuyou.png' },
    { name: 'Terizla', img: 'Assets/Hero/Pickterizla.png' },
    { name: 'Thamuz', img: 'Assets/Hero/Pickthamuz.png' },
    { name: 'Tigreal', img: 'Assets/Hero/Picktigreal.png' },
    { name: 'Uranus', img: 'Assets/Hero/Pickuranus.png' },
    { name: 'Vale', img: 'Assets/Hero/Pickvale.png' },
    { name: 'Valentina', img: 'Assets/Hero/Pickvalentina.png' },
    { name: 'Valir', img: 'Assets/Hero/Pickvalir.png' },
    { name: 'Vexana', img: 'Assets/Hero/Pickvexana.png' },
    { name: 'Wanwan', img: 'Assets/Hero/Pickwanwan.png' },
    { name: 'Xavier', img: 'Assets/Hero/Pickxavier.png' },
    { name: 'Xborg', img: 'Assets/Hero/Pickxborg.png' },
    { name: 'Yin', img: 'Assets/Hero/Pickyin.png' },
    { name: 'Yisunshin', img: 'Assets/Hero/Pickyisunshin.png' },
    { name: 'Yuzhong', img: 'Assets/Hero/Pickyuzhong.png' },
    { name: 'Yve', img: 'Assets/Hero/Pickyve.png' },
    { name: 'Zhask', img: 'Assets/Hero/Pickzhask.png' },
    { name: 'Zhuxin', img: 'Assets/Hero/Pickzhuxin.png' },
    { name: 'Zilong', img: 'Assets/Hero/Pickzilong.png' }
];



// Menampilkan dropdown berdasarkan pencarian
function filterDropdown(id) {
    const searchInput = document.getElementById(`search-${id}`).value.toLowerCase();
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    dropdownItems.innerHTML = ''; // Kosongkan dropdown sebelum ditampilkan

    // Filter heroes berdasarkan pencarian
    heroes
        .filter(hero => hero.name.toLowerCase().includes(searchInput))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = hero.name;
            item.onclick = () => selectHero(hero, id);
            dropdownItems.appendChild(item);
        });
}

// Menampilkan gambar hero yang dipilih dengan animasi saat berubah
function selectHero(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img');

    if (existingImage) {
        // Jika ada gambar yang sudah ada, tambahkan animasi fly-out
        existingImage.classList.add('fly-out');
        // Ganti gambar setelah animasi fly-out selesai (0.5 detik)
        setTimeout(() => {
            updateHeroImage(hero, id);
        }, 500);
    } else {
        // Jika belum ada gambar, langsung tampilkan gambar baru
        updateHeroImage(hero, id);
    }
}

// Fungsi untuk meng-update gambar hero dengan animasi fly-in
function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
    document.getElementById(`search-${id}`).value = hero.name;
    document.getElementById(`dropdown-items-${id}`).innerHTML = ''; // Sembunyikan dropdown
}

// Reset semua dropdown dan input dengan animasi fly-out
function resetAllDropdowns() {
    for (let i = 1; i <= 20; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        if (imageDisplay.innerHTML) {
            // Tambahkan kelas animasi fly-out
            imageDisplay.querySelector('img').classList.add('fly-out');
        }

        // Hapus nilai input dan dropdown setelah animasi selesai
        setTimeout(() => {
            document.getElementById(`search-${i}`).value = '';
            imageDisplay.innerHTML = '';
            document.getElementById(`dropdown-items-${i}`).innerHTML = '';
        }, 500); // Delay sesuai dengan durasi animasi (0.5 detik)
    }
}

 // Fungsi untuk mengupdate output NICKNAME=------------=-=-==-
 function updateOutput() {
    for (let i = 1; i <= 10; i++) {
        const inputText = document.getElementById('input' + i).value;
        document.getElementById('output' + i).textContent = ` ${inputText}`;
    }
}

// Fungsi untuk mereset semua input
function resetInputs() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('input' + i).value = '';
        document.getElementById('output' + i).textContent = ` `;
    }
}

// Fungsi untuk menukar nilai 1-5 dengan 6-10
function switchInputs() {
    for (let i = 1; i <= 5; i++) {
        const temp = document.getElementById('input' + i).value;
        document.getElementById('input' + i).value = document.getElementById('input' + (i + 5)).value;
        document.getElementById('input' + (i + 5)).value = temp;
    }
    // Update output setelah switch
    updateOutput();
}

 // Fungsi untuk menukar gambar dan nama tim
 function swapContent() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    const teamDisplay1 = document.getElementById('teamNameDisplay1');
    const teamDisplay2 = document.getElementById('teamNameDisplay2');
    const tempTeamDisplay = teamDisplay1.textContent;
    teamDisplay1.textContent = teamDisplay2.textContent;
    teamDisplay2.textContent = tempTeamDisplay;
}

// Fungsi untuk memuat gambar dari file lokal
function loadImage(event, imgId) {
    const img = document.getElementById(imgId);
    img.src = URL.createObjectURL(event.target.files[0]);
}

// Fungsi untuk mengupdate nama tim yang ditampilkan
function updateTeamName() {
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    document.getElementById('teamNameDisplay1').textContent = team1;
    document.getElementById('teamNameDisplay2').textContent = team2;
}

// Fungsi untuk mereset gambar, nama tim, dan checkbox ke kondisi awal
function resetContent() {
    document.getElementById('team1').value = "Team 1";
    document.getElementById('team2').value = "Team 2";
    updateTeamName();

    document.getElementById('image1').src = "https://via.placeholder.com/300x200?text=Image+1";
    document.getElementById('image2').src = "https://via.placeholder.com/300x200?text=Image+2";

    document.getElementById('file1').value = "";
    document.getElementById('file2').value = "";

    // Reset checkbox dan gambar tambahan
    for (let i = 1; i <= 6; i++) {
        document.getElementById('checkbox' + i).unchecked = true;
        document.getElementById('extraImage' + i).style.display = "block";
    }
}

// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
function toggleImage(imageId) {
    const image = document.getElementById(imageId);
    const checkbox = document.getElementById('checkbox' + imageId.slice(-1));
    image.style.display = checkbox.checked ? "block" : "none";
}

// Fungsi untuk menukar semua (nama tim, gambar utama, dan status checkbox 1-3 dengan 4-6)
function switchAll() {
    // Tukar nama tim
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    const tempName = team1.value;
    team1.value = team2.value;
    team2.value = tempName;
    updateTeamName();

    // Tukar gambar utama
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    // Tukar status checkbox dan visibilitas gambar tambahan
    for (let i = 1; i <= 3; i++) {
        const checkboxA = document.getElementById('checkbox' + i);
        const checkboxB = document.getElementById('checkbox' + (i + 3));
        const extraImageA = document.getElementById('extraImage' + i);
        const extraImageB = document.getElementById('extraImage' + (i + 3));

        // Tukar status checkbox
        const tempChecked = checkboxA.checked;
        checkboxA.checked = checkboxB.checked;
        checkboxB.checked = tempChecked;

        // Tukar tampilan gambar berdasarkan checkbox
        extraImageA.style.display = checkboxA.checked ? "block" : "none";
        extraImageB.style.display = checkboxB.checked ? "block" : "none";
    }
}

    // Ambil elemen input dan output
    const tournamentnameInput = document.getElementById('tournamentnamemid');
    const tournamentnameOutput = document.getElementById('tournamentnameOutput');

    // Fungsi untuk menampilkan teks yang sama di output saat user mengetik
    tournamentnameInput.addEventListener('input', function() {
      tournamentnameOutput.textContent = tournamentnameInput.value;
    });

//timer

const phases = [
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
];

let currentPhaseIndex = 0; // Track the current phase
let timer = 60; // Timer duration in seconds
let timerInterval; // Store the interval for the timer
let timerRunning = false; // Track if the timer is running

const phaseElement = document.getElementById('phase');
const arrowElement = document.getElementById('arrow');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const nextPhaseButton = document.getElementById('nextPhase');
const resetButton = document.getElementById('reset');

// Update the UI based on the current phase
function updateUI() {
    if (currentPhaseIndex < phases.length) {
        const currentPhase = phases[currentPhaseIndex];
        phaseElement.textContent = `${currentPhase.type}`;
        arrowElement.src = currentPhase.direction; // Update arrow image
        timerElement.textContent = timer;
        nextPhaseButton.disabled = false; // Enable "Next Phase" button
    } else {
        // When all phases are completed
        phaseElement.textContent = "Finalizing";
        arrowElement.src = "/Assets/Other/Adjustment.gif"; // Remove arrow image
        timerElement.textContent = "VS";
        nextPhaseButton.disabled = true; // Disable the button
    }
}

// Start the timer
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                timerElement.textContent = timer;
            } else {
                clearInterval(timerInterval); // Stop timer when it reaches 0
                timerRunning = false; // Timer stops running
                moveToNextPhase(); // Automatically move to the next phase
            }
        }, 1000);
    }
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval); // Stop the timer
    timerRunning = false;
}

// Move to the next phase
function moveToNextPhase() {
    if (currentPhaseIndex < phases.length) {
        currentPhaseIndex++;
        updateUI();
        if (currentPhaseIndex < phases.length) {
            timer = 60; // Reset timer
            startTimer(); // Restart timer
        }
    }
}

// Reset the entire process
function reset() {
    clearInterval(timerInterval); // Stop the timer
    currentPhaseIndex = 0; // Reset phase index
    timer = 60; // Reset timer
    timerRunning = false;
    updateUI(); // Reset UI
}

// Button event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
nextPhaseButton.addEventListener('click', () => {
    stopTimer();
    moveToNextPhase();
});
resetButton.addEventListener('click', reset);

// Initialize the first phase
updateUI();