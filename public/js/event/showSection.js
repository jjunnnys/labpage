document.addEventListener('DOMContentLoaded', () => {
  const trigger = new ScrollTrigger({
    offset: {
      x: 0,
      y: 600,
    },
    toggle: {
      visible: 'showSection',
      hidden: 'hideSection',
    },
  });
});
