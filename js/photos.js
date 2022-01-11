function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayPhotos(data))
}

loadPhotos()


function displayPhotos(photos) {
    const photoContainer = document.getElementById('photos')
    console.log(photoContainer)
    for (const photo of photos) {
        // const img = document.createElement('img')
        // img.style.display = 'block'
        // // const src = img.getAttribute("src");
        // img.setAttribute("src", `${photo.url}`);
        // photoContainer.appendChild(img);

        const div = document.createElement('div');
        div.innerHTML = `
         <img src="${photo.url}" alt="">
         <P>${photo.title}</p>
`
        photoContainer.appendChild(div);

    }
}

