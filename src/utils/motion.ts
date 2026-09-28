export const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function pad(n: number): string {
  return String(n).padStart(2, '0');
}