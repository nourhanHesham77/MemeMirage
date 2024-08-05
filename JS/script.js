function clear(){
    $(".meme-container").html(null);
}


async function getAllMemes() {
    const res = await fetch("https://api.memegen.link/templates/");
    let data = await res.json();
    console.log(data);
    if (Array.isArray(data)) {
        data.forEach((meme) => {
            // Append each meme to the container
            $(".meme-container").append(`
                <div class="meme" id="${meme.id}">
                    <img src="${meme.example.url}" alt="${meme.name}" class="meme-image">
                    <div class="meme-view">
                        <a class="download-btn" data-url="${meme.example.url}">
                            <i class="fas fa-circle-down"></i>
                        </a>
                    </div>
                </div>
            `);
        });

        // Add event listener for download buttons
        document.querySelectorAll('.download-btn').forEach(button => {
            button.addEventListener('click', async function() {
                const imageUrl = this.getAttribute('data-url');
                try {
                    const response = await fetch(imageUrl);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = imageUrl.split('/').pop();
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    alert('Your file has downloaded!');
                } catch (error) {
                    console.error('Error downloading image:', error);
                }
            });
        });
    }
}


$(".meme-container").on("click", ".meme", function () {
    clear();
    let id = $(this).attr("id");
    console.log("Clicked on id:", id);
    singleMeme(id);
  })

  //singleMeal
  async function singleMeme(id){
    let result = await fetch(`https://api.memegen.link/templates/${id}`);
    let memeData = await result.json();
    // let meal = mealData.meals[0];
    console.log(memeData);
    
    //   $('.meme-container').append(`
    //     <div class="singleMeme">
    //     <div class="img-Container">
    //     <img src="${meal.strMealThumb}" >
    //     <h2>${meal.strMeal}</h2>
    //     </div>
       
    //     </div>
    //     `)
     
    // })
  }

getAllMemes();


// $(".meme-container").on("click", ".meme", function () {
//     clear();
//     let id = $(this).attr("id");
//     console.log("Clicked on id:", id);
//     singleMeme(id);
// })

// function singleMeme(){

// }


