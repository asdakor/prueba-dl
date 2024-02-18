const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$('#enviarFormulario').click(function(){
    var nombre = $('#nombre').val()
    var asunto = $('#asunto').val()
    alert('Muchas gracias por contactarnos, '+nombre+'.\n Dentro de unas horas te contactaremos por el asunto: '+asunto)
})