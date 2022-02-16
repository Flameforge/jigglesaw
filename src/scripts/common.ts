export function scrollTo(element: HTMLElement): void {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop,
  });
}
