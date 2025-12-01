import type { EnQuizStatusesEntity } from './Statuses'

export type TQuizQuizEntity = {
	uuid: string
	status: EnQuizStatusesEntity
	name: string
	description: string
	totalVotes: number
	votedValue?: string
	variants: {
		value: string
		renderText: string
		currentVotes: number
	}[]
	endAt?: string // Timestamp
	createdAt: string // Timestamp
}
