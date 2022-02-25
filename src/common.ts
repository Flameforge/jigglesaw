export function scrollTo(element: HTMLElement): void {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop,
  })
}

export function getImage(): string {
  const cssValue = getComputedStyle(document.documentElement).getPropertyValue(
    '--image-url'
  )
  const removeUrlEncapsulation = cssValue
    .substring(4, cssValue.length - 1)
    .replace(/["]+/g, '')
  return removeUrlEncapsulation
}

export function setImage(url: string) {
  document.documentElement.style.setProperty('--image-url', `url("${url}")`)
}

export function getColumns(): string {
  const cssValue = getComputedStyle(document.documentElement).getPropertyValue(
    '--grid-columns'
  )
  return cssValue
}

export function setColumns(size: number) {
  document.documentElement.style.setProperty('--grid-columns', String(size))
}

export function getRows(): string {
  const cssValue = getComputedStyle(document.documentElement).getPropertyValue(
    '--grid-rows'
  )
  return cssValue
}

export function setRows(size: number) {
  document.documentElement.style.setProperty('--grid-rows', String(size))
}
