import { type FC, type HTMLAttributes } from 'react'
import type { TData } from '../model/Data'

interface Props extends HTMLAttributes<HTMLLIElement> {
	data: TData
}

export const EventCard: FC<Props> = ({
	className,
	data: {
		description,
		eventType,
		finishDatetime,
		imagePaths,
		name,
		startDatetime,
		status,
		uuid,
	},
	...props
}) => {
	return null
}
