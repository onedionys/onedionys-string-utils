/**
 * Capitalizes the first letter of a string.
 * @param str The input string.
 * @returns The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string.
 * @param str The input string.
 * @returns The reversed string.
 */
export function reverseString(str: string): string {
    return str.split("").reverse().join("");
}
