function httpGet(url = "https://api.waifu.im/random/") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    if (xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        alert("Aïe ! ça marche pas...");
    }
    return data;
}

function makeImage() {
    let data = httpGet("https://api.waifu.im/random/?many=true&is_nsfw=false");
    let allImages = data["images"];
    for (var i = 0 ; i < allImages.length ; ++i) {
        let url = allImages[i]["url"];
        let item = `
        <div class="item">
            <a href="${url}"><img src="${url}"></a>
        </div>
        `;
        document.querySelector("#gallery").insertAdjacentHTML("afterbegin", item);
    }
}
