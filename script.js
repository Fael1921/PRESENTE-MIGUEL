document.getElementById('gift').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    // Substitua o URL abaixo pelo URL da nova imagem de fundo, se necessário
    document.body.style.backgroundImage = 'url("https://github.com/Fael1921/PRESENTE-MIGUEL/blob/main/Design%20sem%20nome.png?raw=true")';
    document.body.style.backgroundSize = 'cover'; // Ajusta a imagem para cobrir todo o fundo
    document.body.style.backgroundPosition = 'center'; // Centraliza a imagem
    document.getElementById('gift').style.display = 'none'; // Oculta a imagem do presente

    // Inicializa as partículas
    particlesJS.load('particles-js', 'particles-config.json', function() {
        console.log('particles.js loaded - callback');
    });

    // Toca a música
    var audio = document.getElementById('background-music');
    audio.play();
});
