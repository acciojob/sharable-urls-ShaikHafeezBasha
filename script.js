let h3 = document.getElementById("url");
let nam = document.getElementById("name");
let year = document.getElementById("year");
let btn = document.getElementById("button");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let x = `?name=${nam.value}&year=${year.value}`;
    let y = `?name=${nam.value}`;
    let z = `?year=${year.value}`;
    if (nam.value && year.value) {
        h3.textContent = h3.innerText + x;
    }
    if (nam.value && !year.value) {
        h3.textContent = h3.innerText + y;
    }
    if (!nam.value && year.value) {
        h3.textContent = h3.innerText + z;
    }
    nam.value = ' ';
    year.value = ' ';
})
