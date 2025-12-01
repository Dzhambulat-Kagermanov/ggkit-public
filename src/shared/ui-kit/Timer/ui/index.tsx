import { useEffect, useState, type FC, type ReactNode } from 'react'

interface Props {
	isReverse?: boolean
	startSeconds?: number
	intervalTimeMs?: number
	formatFunc?: (seconds: number) => ReactNode
}

export const UiTimer: FC<Props> = ({
	startSeconds = 0,
	isReverse,
	intervalTimeMs = 1000,
	formatFunc,
}) => {
	const [seconds, setSeconds] = useState(startSeconds)

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(cur => {
				if (isReverse) {
					if (cur - 1 < 0) {
						clearInterval(interval)
						return cur
					}

					return cur - 1
				} else return cur + 1
			})
		}, intervalTimeMs)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return formatFunc ? formatFunc(seconds) : seconds
}
