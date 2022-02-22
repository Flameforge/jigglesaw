export function winCheck(): void {
  let win = true;
  const squares = document.querySelectorAll('area');
  squares.forEach((square) => {
    const originalOrder = square.getAttribute('data-order');
    const actualOrder = square.style.order;

    if (actualOrder !== originalOrder) {
      win = false;
    }
  });

  if (win) {
    document.documentElement.style.setProperty('--win', '1');
  }
}
