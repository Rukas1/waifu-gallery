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

function makeImage(nbImage = 1) {
    // var gal = document.getElementById("gallery");
    // var div = document.createElement("div");
    // div.setAttribute("class", "item");
    // var img = document.createElement("img")
    // img.setAttribute("src", httpGet()["images"][0]["url"]);
    // div.appendChild(img);
    // gal.appendChild(div);

    for (var i = 0 ; i < nbImage ; ++i) {
        let url = httpGet()["images"][0]["url"];
    const item = `
        <div class="item">
            <a href="${url}"><img src="${url}"></a>
        </div>
    `;
    document.querySelector("#gallery").insertAdjacentHTML("afterbegin", item);
    }
}

makeImage(5);
