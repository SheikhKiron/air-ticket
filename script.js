window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});



// ======= Animation JS =======

document.addEventListener('DOMContentLoaded', () => {
  const town = document.querySelector('.town');
  const cards = document.querySelectorAll('.town .car');

  // Initially mark for animation
  town.classList.add('fade-up-animate');
  cards.forEach(card => card.classList.add('zoom-in-animate'));

  // Observer options: trigger when 20% of town is visible, or 100px before enter
  const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Fade up the section
        town.classList.add('visible');

        // Stagger each card's zoom-in
        cards.forEach((card, idx) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, idx * 200); // 200ms between each
        });

        observer.unobserve(town);
      }
    });
  }, options);

  io.observe(town);
});

