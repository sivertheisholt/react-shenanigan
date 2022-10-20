/**
 * Create a new ID generator function that produces a new ID every time it is called. Will not repeat
 * until page is reloaded.
 * @param prefix Provide an optional prefix for the ID.
 * @returns
 */
export const createIdGenerator = (prefix: string = "") => {
	let counter = 0
	return (suffix: string = "") => `${prefix}${counter++}${suffix}`
}
