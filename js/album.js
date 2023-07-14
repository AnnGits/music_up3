let container = document.querySelector(`.album`);

let search = new URLSearchParams(window.location.search);

console.log(window.location.search);//write "?id=1"
//new URLSearchParams избавляет от знаков вопроса и достаёт id (или любую другую переменную) как переменную)

let id = search.get(`id`);
console.log(id); // write 1

// готово! id это нужное нам число

let album = albums[id];

if (!album){
    container.innerHTML = `Error! Redirect on main page througth 5 seconds`;
    setTimeout (() => {
        window.location.pathname = `index.html`
    }, 5000);
    
} else {
    container.innerHTML += `
    <div class="card mb-3">
        <div class="row">
            <div class="col-4">
                <img src="${album.img}" alt="" class="img-fluid rounded-start">
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.description}</p>
                    <p class="card-text"><small class="text-muted">${album.year}</small></p>
                </div>
            </div>
        </div>
    </div>
    `;

    let playlist = document.querySelector(`.playlist`);

    let tracks = album.tracks;

    for (let g = 0; g < tracks.length; g++) {
        let track = tracks[g];

        playlist.innerHTML += `
        <li class="list-group-item d-flex align-items-center">
            <img src="assets/play-button.png" alt="" class="me-3" height="30px">
            <div>
                <div>${track.title}</div>
                <div class="text secondary">${track.author}</div>
            </div>
            <div class="ms-auto">${track.time}</div>
        </li>
        `
    }
}
