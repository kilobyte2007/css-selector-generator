import isElement from 'iselement';

/**
 * Check whether element is matched uniquely by selector.
 * @param element
 * @param selector
 * @param [root]
 * @return {boolean}
 */
export function testSelector (element, selector, root = document) {
  const result = root.querySelectorAll(selector);
  return (result.length === 1 && result[0] === element);
}

/**
 * Find all parent elements of the element.
 * @param {Element} element
 * @param {Element} root
 * @return {Array.<Element>}
 */
export function getParents (element, root = document.querySelector(':root')) {
  const result = [];
  let parent = element;
  while (isElement(parent) && parent !== root) {
    result.push(parent);
    parent = parent.parentElement;
  }
  return result;
}
