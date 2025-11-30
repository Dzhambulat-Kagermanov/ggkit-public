export const concatQueryParams = (
	params: Record<string, string | number | undefined>
) =>
	Object.entries(params).reduce(
		(acc, [key, value], index) =>
			`${acc}${value !== undefined ? (index === 0 ? '?' : '&') : ''}${
				value !== undefined ? `${key}=${value}` : ''
			}`,
		''
	)
