"use strict";
$(function() {
    $(document).ready(function() {
        //First Exercise
        // alert("DOM has finished loading!");

        //Second Exercise(p1)
        // let divContents = $('#player-1').html();
        // alert(divContents);
        //
        // let h1Contents = $('#player-1-name').html();
        // alert(h1Contents);

        //Second Exercise(p2)
        // $('.codeup').css('border', '1px solid red');

        //Second Exercise(p3)
        $('li').css('font-size', '20px');
        $('h1').css('background-color', 'yellow');
        $('p').css('background-color', 'yellow');
        $('li').css('background-color', 'yellow');
        let h1Contents = $('h1').html();
        alert(h1Contents);
    })

})