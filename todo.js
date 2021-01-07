$('ul').on("click", "li" ,function()
{ $(this).toggleClass('grey')

})

$('ul').on("click",'span', function(event) 
{ 
     
     $(this).parent().remove() 
     event.stopPropagation()
    })
$('input').on('keypress', function(event) {

if (event.which === 13) { 
    let newTodo = $(this).val ()

$(this).val('')

$('ul').append(`<li > ${newTodo}<span class="close">&times;</span></li>`)
}

})