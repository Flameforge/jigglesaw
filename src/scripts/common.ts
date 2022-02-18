export function scrollTo(element: HTMLElement): void {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop,
  });
}

export function removeAllChildNodes(parent: HTMLElement): void {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
