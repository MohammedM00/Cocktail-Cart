$(document).ready(function() {
    const cocktails = {
        1: "Holiday Punch Recipe: Mix cranberry juice, orange juice, and pineapple juice. Add ginger ale and a scoop of raspberry sherbet. Enjoy!",
        2: "Eggnog Recipe: Mix eggnog with rum and a pinch of nutmeg. Serve chilled. Cheers!",
        3: "Cranberry Spritzer Recipe: Combine cranberry juice, sparkling water, and a squeeze of lime. Add ice and garnish with a lime slice. Cheers!",
        4: "Peppermint Mocha Martini Recipe: Shake together coffee liqueur, vodka, and a dash of peppermint schnapps. Garnish with a chocolate rim and crushed candy canes. Enjoy!",
        5: "Virgin Pina Colada Recipe: Blend pineapple juice, coconut cream, and crushed ice. Serve in a chilled glass with a pineapple slice. Cheers!"
    };

    // Initialize the text in #cocktail-details
    $("#cocktail-details").on("mouseleave", function() {
        $("#cocktail-recipe").text("Hover over a cocktail for the recipe or click for calories.");
    });

    // Display recipe on hover
    $(".cocktail-card").on("mouseenter", function() {
        const cocktailId = $(this).data("id");
        const recipe = cocktails[cocktailId];
        $("#cocktail-recipe").text(recipe);
    });

    // Display calories on click
    $(".cocktail-card").on("click", function(e) {
        e.stopPropagation(); // Prevent the click from bubbling to parent elements
        const calories = Math.floor(Math.random() * 200) + 100; // Generate random calories (100-299)
        $("#cocktail-recipe").text(`Approx. ${calories} calories`);
    });
});
