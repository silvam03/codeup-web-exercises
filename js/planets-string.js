(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    console.log(planetsArray.join(" <br> "));

//Bonus

    let str;
    let newPlanetsArray = [];
    planetsArray.forEach(function(planet) {
        // console.log(`<li>${planet}</li>`);
        // newPlanetsArray.push(`<li>${planet}</li>`);
        console.log("<li>" + planet + "</li>")
        newPlanetsArray.push("<li>" + planet + "</li>");
        // console.log(newPlanetsArray);
    });

    newPlanetsArray.unshift("<ul>");
    newPlanetsArray.push("</ul>");
    console.log(newPlanetsArray);
    str = newPlanetsArray.join('');
    console.log(str);



})();
