async function getAllMemes(){
    const res = await fetch("https://api.memegen.link/templates/");
    let data = await res.json();
    console.log(data);
    if (Array.isArray(data)) {
        data.forEach((meme) => {
            // console.log(meme.blank.example)
            $(".meme-container").append(`
                <div class="meme">
                    <img src="${meme.example.url}" alt="${meme.name}">
                    <a><i class="fa-solid fa-circle-down"></i></a>
                </div>`);
        });
    } else {
        console.error("Data is not an array:", data);
    }
}
getAllMemes();