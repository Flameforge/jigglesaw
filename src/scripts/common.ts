export function scrollTo(element: HTMLElement): void {
  console.log('🚀 ~ file: common.ts ~ line 2 ~ scrollTo ~ element', element);
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
