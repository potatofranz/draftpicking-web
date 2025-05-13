const heroes = [
    { name: 'Aamon', img: 'Asseets/HeroPick/aamon.png' },
    { name: 'Akai', img: 'Asseets/HeroPick/akai.png' },
    { name: 'Aldous', img: 'Asseets/HeroPick/aldous.png' },
    { name: 'Alice', img: 'Asseets/HeroPick/alice.png' },
    { name: 'Alpha', img: 'Asseets/HeroPick/alpha.png' },
    { name: 'Alucard', img: 'Asseets/HeroPick/alucard.png' },
    { name: 'Angela', img: 'Asseets/HeroPick/angela.png' },
    { name: 'Argus', img: 'Asseets/HeroPick/argus.png' },
    { name: 'Arlot', img: 'Asseets/HeroPick/arlot.png' },
    { name: 'Atlas', img: 'Asseets/HeroPick/atlas.png' },
    { name: 'Aulus', img: 'Asseets/HeroPick/aulus.png' },
    { name: 'Aurora', img: 'Asseets/HeroPick/aurora.png' },
    { name: 'Badang', img: 'Asseets/HeroPick/badang.png' },
    { name: 'Balmond', img: 'Asseets/HeroPick/balmond.png' },
    { name: 'Bane', img: 'Asseets/HeroPick/bane.png' },
    { name: 'Barats', img: 'Asseets/HeroPick/barats.png' },
    { name: 'Baxia', img: 'Asseets/HeroPick/baxia.png' },
    { name: 'Beatrix', img: 'Asseets/HeroPick/beatrix.png' },
    { name: 'Beleric', img: 'Asseets/HeroPick/beleric.png' },
    { name: 'Benedetta', img: 'Asseets/HeroPick/benedetta.png' },
    { name: 'Brody', img: 'Asseets/HeroPick/brody.png' },
    { name: 'Bruno', img: 'Asseets/HeroPick/bruno.png' },
    { name: 'Carmila', img: 'Asseets/HeroPick/carmila.png' },
    { name: 'Cecilion', img: 'Asseets/HeroPick/cecilion.png' },
    { name: 'Chang\'e', img: 'Asseets/HeroPick/chang_e.png' },
    { name: 'Chip', img: 'Asseets/HeroPick/chip.png' },
    { name: 'Chou', img: 'Asseets/HeroPick/chou.png' },
    { name: 'Cici', img: 'Asseets/HeroPick/cici.png' },
    { name: 'Claude', img: 'Asseets/HeroPick/claude.png' },
    { name: 'Clint', img: 'Asseets/HeroPick/clint.png' },
    { name: 'Cyclops', img: 'Asseets/HeroPick/cyclops.png' },
    { name: 'Diggie', img: 'Asseets/HeroPick/diggie.png' },
    { name: 'Dyroth', img: 'Asseets/HeroPick/dyroth.png' },
    { name: 'Edith', img: 'Asseets/HeroPick/edith.png' },
    { name: 'Esmeralda', img: 'Asseets/HeroPick/esmeralda.png' },
    { name: 'Estes', img: 'Asseets/HeroPick/estes.png' },
    { name: 'Eudora', img: 'Asseets/HeroPick/eudora.png' },
    { name: 'Fanny', img: 'Asseets/HeroPick/fanny.png' },
    { name: 'Faramis', img: 'Asseets/HeroPick/faramis.png' },
    { name: 'Floryn', img: 'Asseets/HeroPick/floryn.png' },
    { name: 'Franco', img: 'Asseets/HeroPick/franco.png' },
    { name: 'Fredrin', img: 'Asseets/HeroPick/fredrin.png' },
    { name: 'Freya', img: 'Asseets/HeroPick/freya.png' },
    { name: 'Gatotkaca', img: 'Asseets/HeroPick/gatotkaca.png' },
    { name: 'Gloo', img: 'Asseets/HeroPick/gloo.png' },
    { name: 'Gord', img: 'Asseets/HeroPick/gord.png' },
    { name: 'Granger', img: 'Asseets/HeroPick/granger.png' },
    { name: 'Grock', img: 'Asseets/HeroPick/grock.png' },
    { name: 'Guinevere', img: 'Asseets/HeroPick/guinevere.png' },
    { name: 'Gusion', img: 'Asseets/HeroPick/gusion.png' },
    { name: 'Hanabi', img: 'Asseets/HeroPick/hanabi.png' },
    { name: 'Hanzo', img: 'Asseets/HeroPick/hanzo.png' },
    { name: 'Harith', img: 'Asseets/HeroPick/harith.png' },
    { name: 'Harley', img: 'Asseets/HeroPick/harley.png' },
    { name: 'Hayabusa', img: 'Asseets/HeroPick/hayabusa.png' },
    { name: 'Helcurt', img: 'Asseets/HeroPick/helcurt.png' },
    { name: 'Hilda', img: 'Asseets/HeroPick/hilda.png' },
    { name: 'Hylos', img: 'Asseets/HeroPick/hylos.png' },
    { name: 'Irithel', img: 'Asseets/HeroPick/irithel.png' },
    { name: 'Ixia', img: 'Asseets/HeroPick/ixia.png' },
    { name: 'Jawhead', img: 'Asseets/HeroPick/jawhead.png' },
    { name: 'Johnson', img: 'Asseets/HeroPick/johnson.png' },
    { name: 'Joy', img: 'Asseets/HeroPick/joy.png' },
    { name: 'Julian', img: 'Asseets/HeroPick/julian.png' },
    { name: 'Kadita', img: 'Asseets/HeroPick/kadita.png' },
    { name: 'Kagura', img: 'Asseets/HeroPick/kagura.png' },
    { name: 'Kaja', img: 'Asseets/HeroPick/kaja.png' },
    { name: 'Karina', img: 'Asseets/HeroPick/karina.png' },
    { name: 'Karrie', img: 'Asseets/HeroPick/karrie.png' },
    { name: 'Khaleed', img: 'Asseets/HeroPick/khaleed.png' },
    { name: 'Khufra', img: 'Asseets/HeroPick/khufra.png' },
    { name: 'Kimmy', img: 'Asseets/HeroPick/kimmy.png' },
    { name: 'Lancelot', img: 'Asseets/HeroPick/lancelot.png' },
    { name: 'Lukas', img: 'Asseets/HeroPick/lukas.png' },
    { name: 'Lapu Lapu', img: 'Asseets/HeroPick/lapulapu.png' },
    { name: 'Layla', img: 'Asseets/HeroPick/layla.png' },
    { name: 'Leomord', img: 'Asseets/HeroPick/leomord.png' },
    { name: 'Lesley', img: 'Asseets/HeroPick/lesley.png' },
    { name: 'Ling', img: 'Asseets/HeroPick/ling.png' },
    { name: 'Lolita', img: 'Asseets/HeroPick/lolita.png' },
    { name: 'Lunox', img: 'Asseets/HeroPick/lunox.png' },
    { name: 'Luo Yi', img: 'Asseets/HeroPick/luoyi.png' },
    { name: 'Lylia', img: 'Asseets/HeroPick/lylia.png' },
    { name: 'Martis', img: 'Asseets/HeroPick/martis.png' },
    { name: 'Masha', img: 'Asseets/HeroPick/masha.png' },
    { name: 'Mathilda', img: 'Asseets/HeroPick/mathilda.png' },
    { name: 'Melissa', img: 'Asseets/HeroPick/melissa.png' },
    { name: 'Minotaur', img: 'Asseets/HeroPick/minotour.png' },
    { name: 'Minsitthar', img: 'Asseets/HeroPick/minsitthar.png' },
    { name: 'Miya', img: 'Asseets/HeroPick/miya.png' },
    { name: 'Moskov', img: 'Asseets/HeroPick/moskov.png' },
    { name: 'Nana', img: 'Asseets/HeroPick/nana.png' },
    { name: 'Natalia', img: 'Asseets/HeroPick/natalia.png' },
    { name: 'Nathan', img: 'Asseets/HeroPick/nathan.png' },
    { name: 'Nolan', img: 'Asseets/HeroPick/nolan.png' },
    { name: 'Novaria', img: 'Asseets/HeroPick/novaria.png' },
    { name: 'Odette', img: 'Asseets/HeroPick/odette.png' },
    { name: 'Paquito', img: 'Asseets/HeroPick/paquito.png' },
    { name: 'Parsha', img: 'Asseets/HeroPick/parsha.png' },
    { name: 'Phoveus', img: 'Asseets/HeroPick/phoveus.png' },
    { name: 'Popol and Kupa', img: 'Asseets/HeroPick/popolandkupa.png' },
    { name: 'Rafaela', img: 'Asseets/HeroPick/rafaela.png' },
    { name: 'Roger', img: 'Asseets/HeroPick/roger.png' },
    { name: 'Ruby', img: 'Asseets/HeroPick/ruby.png' },
    { name: 'Saber', img: 'Asseets/HeroPick/saber.png' },
    { name: 'Selena', img: 'Asseets/HeroPick/selena.png' },
    { name: 'Silvanna', img: 'Asseets/HeroPick/silvanna.png' },
    { name: 'Sun', img: 'Asseets/HeroPick/sun.png' },
    { name: 'Suyou', img: 'Asseets/HeroPick/suyou.png' },
    { name: 'Terizla', img: 'Asseets/HeroPick/terizla.png' },
    { name: 'Thamuz', img: 'Asseets/HeroPick/thamuz.png' },
    { name: 'Tigreal', img: 'Asseets/HeroPick/tigreal.png' },
    { name: 'Uranus', img: 'Asseets/HeroPick/uranus.png' },
    { name: 'Vale', img: 'Asseets/HeroPick/vale.png' },
    { name: 'Valentina', img: 'Asseets/HeroPick/valentina.png' },
    { name: 'Valir', img: 'Asseets/HeroPick/valir.png' },
    { name: 'Vexana', img: 'Asseets/HeroPick/vexana.png' },
    { name: 'Wanwan', img: 'Asseets/HeroPick/wanwan.png' },
    { name: 'Xavier', img: 'Asseets/HeroPick/xavier.png' },
    { name: 'Xborg', img: 'Asseets/HeroPick/xborg.png' },
    { name: 'Yin', img: 'Asseets/HeroPick/yin.png' },
    { name: 'Yisunshin', img: 'Asseets/HeroPick/yisunshin.png' },
    { name: 'Yuzhong', img: 'Asseets/HeroPick/yuzhong.png' },
    { name: 'Yve', img: 'Asseets/HeroPick/yve.png' },
    { name: 'Zhask', img: 'Asseets/HeroPick/zhask.png' },
    { name: 'Zhuxin', img: 'Asseets/HeroPick/zhuxin.png' },
    { name: 'Zilong', img: 'Asseets/HeroPick/zilong.png' }
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