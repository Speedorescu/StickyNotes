$( () => {

   liDelete();
    h2Clean();
    pClean();

    let $addBtn = $(".addNote");
    let $ul = $("ul");
    let $li = $("li");
    let $killEmAll = $(".deleteAll");

   // console.log($killEmAll);

    $addBtn.on("click", ()=>{
        $ul.append(`<li>     
                <button class="delete"><img src="images/iconmonstr-x-mark-4-32.png" alt=""></button>
                       <h2 contenteditable="true">Kliknij, by dodać nagłówek</h2>
                <p contenteditable="true">Kliknij, by dodać tekst</p>
                       </li>`);
        liDelete();
        h2Clean();
        pClean();
    });

    function liDelete(){
        $('.delete').click(function() {
            $(this).parent($li).remove();
        });
    }

    function h2Clean(){
        $('h2').click(function() {
            $(this).empty();
        });
    }

    function pClean(){
        $('p').click(function() {
            $(this).empty();
        });
    }

    $killEmAll.on("click", ()=> {
        $ul.children().remove();

    })

});