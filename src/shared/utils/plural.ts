/**
 * Склоняет слово в зависимости от числа.
 * @param n - число
 * @param forms - массив из трёх форм: [форма для 1, форма для 2-4, форма для остальных]
 * @example plural(1, ["год", "года", "лет"]) // "год"
 */
export const plural = (n: number, forms: [string, string, string]): string => {
	const abs = Math.abs(n)
	if (abs % 100 >= 11 && abs % 100 <= 14) {
		return forms[2]
	}
	switch (abs % 10) {
		case 1:
			return forms[0]
		case 2:
		case 3:
		case 4:
			return forms[1]
		default:
			return forms[2]
	}
}
