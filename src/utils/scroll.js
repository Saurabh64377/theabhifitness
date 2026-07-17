export function scrollToSection(id, delay = 0) {
  const scroll = () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  if (delay > 0) {
    setTimeout(scroll, delay);
  } else {
    scroll();
  }
}
