const robot = document.getElementById('robot-button');
const caption = document.getElementById('robot-caption');
let waveTimer;
robot.addEventListener('click', () => {
  clearTimeout(waveTimer);
  robot.classList.remove('waving');
  void robot.offsetWidth;
  robot.classList.add('waving');
  caption.textContent = 'Hello! What shall we build today?';
  waveTimer = setTimeout(() => {
    robot.classList.remove('waving');
    caption.textContent = 'A little curiosity, on wheels.';
  }, 2600);
});
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) links.forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-15% 0px -60% 0px'});
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
