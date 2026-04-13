export const $ = <T extends Element = Element>(selector: string): T | null =>
  document.querySelector<T>(selector);

export const $$ = <T extends Element = Element>(
  selector: string,
): NodeListOf<T> => document.querySelectorAll<T>(selector);
