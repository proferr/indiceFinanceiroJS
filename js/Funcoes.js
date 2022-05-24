//VALIDAÇÕES
$('.validaNumero').live('keypress', function(event) {
    return (soNums(event,''));
});
$('.validaFormato').live('keydown', function(event) {
    Formata(this,20,event,2);
});