// Função de rolagem suave
function scrollTo(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }
  
  // Evento de clique para os links de navegação
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      scrollTo(targetElement);
    });
  });
  
  // Evento de clique para o botão de rolagem para o topo
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  scrollToTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    scrollTo(document.body);
  });
  
  // Mostrar/Esconder o botão de rolagem para o topo
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });  