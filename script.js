document.getElementById('gift').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    // Substitua o URL abaixo pelo URL da imagem de fundo que você deseja usar
    document.body.style.backgroundImage = 'url("https://www.mundoconectado.com.br/wp-content/uploads/2023/10/Cruzeiro-x-Flamengo-pelo-Brasileirao-2023-onde-assistir-ao-vivo.jpg")';
    document.body.style.backgroundSize = 'cover'; // Ajusta a imagem para cobrir todo o fundo
    document.body.style.backgroundPosition = 'center'; // Centraliza a imagem
    document.getElementById('gift').style.display = 'none'; // Oculta a imagem do presente

    // Inicializa as partículas
    particlesJS.load('particles-js', 'particles-config.json', function() {
        console.log('particles.js loaded - callback');
    });
});
