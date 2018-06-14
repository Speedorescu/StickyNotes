$( () => {

   liDelete();
    drag();

    let $addBtn = $(".addNote");
    let $ul = $("ul");
    let $li = $("li");
    let $killEmAll = $(".deleteAll");

   // console.log();

    $addBtn.on("click", ()=>{
        $ul.append(`<li class="drag">
            <button class="delete"><img src="images/iconmonstr-x-mark-4-32.png" alt=""></button>
            <textarea class="header" placeholder="Dodaj nagłówek"></textarea>
            <textarea class="text" placeholder="Dodaj treść notatki"></textarea>
        </li>`);
        liDelete();
        drag();
    });

    function liDelete(){
        $('.delete').click(function() {
            $(this).parent($li).remove();
        });
    }

    $killEmAll.on("click", ()=> {
        $ul.children().remove();
    });

   function drag(){
       $('.drag').draggable({
           containment: 'window',
           cursor: 'move',
           delay: 200,
           distance: 30,
           opacity: 0.8
       })
   }

   let body = $('body');
   $(window).on('scroll', function(){
       body.css('background-position', 'center ' + -($(this).scrollTop()*0.2) + 'px')
   });

});