const searchMealURL = 'https://themealdb.com/api/json/v1/1/search.php?s=';

    let searchInput = document.querySelector('#search-input');
    let searchButton = document.querySelector('#search-button');
    let noSearchText = document.querySelector('#no-search-text');

    let recipeInput = document.querySelector('#recipe-input');
    let recipeItem = document.querySelector('#recipe-item');
    let recipeImage = document.querySelector('#recipe-img');
    let recipeName = document.querySelector('#recipe-name');
    let recipeCategory = document.querySelector('#recipe-category');
    let recipeInstructions = document.querySelector('#recipe-instructions');

    recipeItem.style.display = 'none';

    searchButton.addEventListener('click', function() {

        let searchUrl = searchMealURL + recipeInput.value;
        fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                
                if (data.meals !== null) {
                    
                    noSearchText.style.display = 'none';
                    recipeItem.style.display = 'block';
                    
                    const recipe = data.meals[0];

                    recipeName.innerHTML = recipe.strMeal;
                    recipeImage.src = recipe.strMealThumb;

                    recipeCategory.innerHTML = recipe.strCategory;
                    recipeInstructions.innerHTML = recipe.strInstructions;

                    searchInput.value = '';
                }

            });
    });
