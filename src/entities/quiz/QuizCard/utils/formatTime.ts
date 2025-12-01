import { plural } from '@/shared/utils/plural'

export const formatTime = (totalSeconds: number): string => {
	if (totalSeconds < 0) totalSeconds = 0

	const secondsInMinute = 60
	const secondsInHour = secondsInMinute * 60 // 3600
	const secondsInDay = secondsInHour * 24 // 86400
	const secondsInMonth = secondsInDay * 30 // ≈ 2 592 000
	const secondsInYear = secondsInDay * 365 // ≈ 31 536 000

	let remaining = Math.floor(totalSeconds)

	const years = Math.floor(remaining / secondsInYear)
	remaining %= secondsInYear

	const months = Math.floor(remaining / secondsInMonth)
	remaining %= secondsInMonth

	const days = Math.floor(remaining / secondsInDay)
	remaining %= secondsInDay

	const hours = Math.floor(remaining / secondsInHour)
	remaining %= secondsInHour

	const minutes = Math.floor(remaining / secondsInMinute)
	const seconds = remaining % secondsInMinute

	const parts: string[] = []

	if (years > 0) {
		parts.push(`${years} ${plural(years, ['год', 'года', 'лет'])}`)
	}
	if (months > 0) {
		parts.push(`${months} ${plural(months, ['месяц', 'месяца', 'месяцев'])}`)
	}

	const timePart = `${String(hours).padStart(2, '0')}:${String(
		minutes
	).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
	parts.push(`${days} ${plural(days, ['день', 'дня', 'дней'])} ${timePart}`)

	return parts.join(' ')
}
