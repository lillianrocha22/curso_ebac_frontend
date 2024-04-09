$(document).ready(function() {
    
    // feat: incluir um li na lista de tarefas
    $('form').on('submit', function(e) {
        e.preventDefault();        
        const nomeTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li>${nomeTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $('#nome-tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('tarefa-concluida');
    })

});