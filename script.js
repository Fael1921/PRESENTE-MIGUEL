document.getElementById('gift').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    // Substitua o URL abaixo pelo URL da imagem de fundo que você deseja usar
    document.body.style.backgroundImage = 'url("https://c4.wallpaperflare.com/wallpaper/83/876/997/cruzeiro-esporte-clube-brazil-soccer-soccer-clubs-wallpaper-preview.jpg")';
    document.body.style.backgroundSize = 'cover'; // Ajusta a imagem para cobrir todo o fundo
    document.body.style.backgroundPosition = 'center'; // Centraliza a imagem
    document.getElementById('gift').style.display = 'none'; // Oculta a imagem do presente

    // Inicializa as partículas
    particlesJS.load('particles-js', 'particles-config.json', function() {
        console.log('particles.js loaded - callback');
    });
});
