type arrayProp = string | number | (string | number)[]

/**
 * Checks if prop is array
 */
export function makePropArray(n: arrayProp): (string | number)[] {
  let a = [];

  if (Array.isArray(n)) {
    a = n;
  } else {
    a.push(n);
  }

  return a;
}
