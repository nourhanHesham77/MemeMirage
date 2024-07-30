async function getAllMemes(){
    const res = await fetch("https://api.memegen.link/templates/");
    let data = await res.json();
    console.log(data);
    if (Array.isArray(data)) {
        data.forEach((meme) => {
            // console.log(meme.blank.example)
            $(".meme-container").append(`
                <div class="meme" id=${meme.id}>
                    <img src="${meme.example.url}" alt="${meme.name}">
                     <div class="meme-view">
<a href="${meme.example.url}" download>
            <i class="fas fa-circle-down"></i>
        </a>
          </div>
                </div>`);
        });
    } else {
        console.error("Data is not an array:", data);
    }
}
getAllMemes();

$(".meme-container").on("click", ".meme", function () {
    clear();
    let id = $(this).attr("idIS");
    console.log("Clicked on id:", id);
    singleMeal(id);
  })