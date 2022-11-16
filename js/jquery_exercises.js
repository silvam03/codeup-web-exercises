"use strict";
(function () {
    $(document).ready(function () {
        //First Exercise
        // alert("DOM has finished loading!");


        //Second Exercise(p1-Id Selectors)
        // let divContents = $('#player-1').html();
        // alert(divContents);
        //
        // let h1Contents = $('#player-1-name').html();
        // alert(h1Contents);

        //Second Exercise(p2-Class Selectors)
        // $('.codeup').css('border', '1px solid red');

        //Second Exercise(p3-Element Selectors)
        // $('li').css('font-size', '20px');
        // $('h1').css('background-color', 'yellow');
        // $('p').css('background-color', 'yellow');
        // $('li').css('background-color', 'yellow');
        // let h1Contents = $('h1').html();
        // alert(h1Contents);

        //Second Exercise(p3-Multiple Selectors)
        //$('h1, p, li').css('background-color', 'yellow');


        //Third Exercise(Mouse Events)
        $('h1').click(function () {
            $('h1').css('background-color', 'red');
        });

        $('p').dblclick(function () {
            $('p').css('font-size', '18px');
        });

        $('li').hover(
            function () {
                $(this).css('color', 'red');
            },
            function () {
                $(this).css('color', 'black')
            }
        );
    })

})();