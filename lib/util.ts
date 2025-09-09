export function getHighestZIndexElement(
  elements: NodeListOf<Element>
): Element | null {
  let highest: Element | null = null;
  let highestZ = -Infinity;

  elements.forEach((el) => {
    const z = window.getComputedStyle(el).zIndex;
    const zIndex = parseInt(z, 10);

    if (!isNaN(zIndex) && zIndex > highestZ) {
      highestZ = zIndex;
      highest = el;
    }
  });

  return highest;
}

export function getIndex(element: Element) {
  const z = window.getComputedStyle(element).zIndex;
  return parseInt(z);
}
