fetch('recipes.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayRecipes(data.recipes); // Call a function to display recipes
  })
  .catch(error => console.error('Error loading JSON:', error));
