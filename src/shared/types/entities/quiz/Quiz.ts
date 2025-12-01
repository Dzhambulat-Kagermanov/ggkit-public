import type { EnQuizStatusesEntity } from './Statuses'

export type TQuizQuizEntity = {
	uuid: string
	status: EnQuizStatusesEntity
	name: string
	description: string
	totalVotes: number
	endDateTime?: string // Timestamp
	votedValue?: string
	variants: {
		value: string
		renderText: string
		currentVotes: number
	}[]
}
