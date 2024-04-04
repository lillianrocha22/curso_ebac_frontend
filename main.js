const formulario = document.getElementById('formulario');
const valor_b = document.getElementById("campo-b");

function validaForm() {
    const valor_a = document.getElementById("campo-a");
    return valor_b.value > valor_a.value;
}

// exemplo utilizando o evento Submit do formulário
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validaForm()) {        
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    } else {
        document.querySelector('.success-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'block';
    }
})

// exemplo utilizando o evento KeyUp do campo-b
valor_b.addEventListener('keyup', function() {
    if (validaForm()) {        
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    } else {
        document.querySelector('.success-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'block';
    }
})