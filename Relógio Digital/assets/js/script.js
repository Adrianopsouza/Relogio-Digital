// Seleciona os elementos do DOM que irão exibir as horas, minutos e segundos.
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Define um intervalo para executar a função 'time' a cada 1 segundo.
const relogio = setInterval(function time() {
    // Obtém a data e hora atual.
    let dateToday = new Date();
    
    // Extrai as horas, minutos e segundos da data atual.
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Formata as horas para adicionar um zero à esquerda se for menor que 10.
    if (hr < 10) hr = '0' + hr;

    // Formata os minutos para adicionar um zero à esquerda se for menor que 10.
    if (min < 10) min = '0' + min;

    // Formata os segundos para adicionar um zero à esquerda se for menor que 10.
    if (s < 10) s = '0' + s;

    // Atualiza o conteúdo de texto dos elementos com os valores formatados.
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

});
