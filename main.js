const accessKey = "aNAA5yKtgkXEq56khUFHmoeqmeznK8yn4DtFiJeQOpE";
const formEl = document.querySelector("form");
const inputEl = document.getElementById("serach_result")
const resultEl = document.querySelector(".serachResults");
const show = document.querySelector(".btn");
const showMainButton = document.querySelector(".btn .show_moreBtn");
let searchQuery = "";
let page = 1;

async function serachImages() {
    const key = inputEl.value
    const url = `https://api.unsplash.com/serach/photos?page=${page}&query=${key}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const result = data.result

    if (page === 1) {
        resultEl.innerHTML = "";
    }

    result.map((item) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("images1");
        const img = document.createElement("img");
        img.src = item.urls.small;
        img.alt = item.alt_description;
        const imageLinks = document.createElement("a");
        imageLinks.href = item.links.html;
        imageLinks.target = "_blank";
        imageLinks.textContent = item.alt_description
        imageWrapper.appendChild(img);
        imageWrapper.appendChild(imageLinks);
        resultEl.appendChild(imageWrapper);
        
    })
    page++
    if(page > 1){
        show.style.display = "block";
    }
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    serachImages();

})
showMainButton.addEventListener("click", () => {
    serachImages();
})