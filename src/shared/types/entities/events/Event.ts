import type { EnEventsStatusesEntity } from './Statuses'
import type { EnEventsTypesEntity } from './Types'

export type TEvent = {
	uuid: string
	imagePaths: string[]
	status: EnEventsStatusesEntity
	startDatetime: string // Timestamp
	finishDatetime: string // Timestamp
	name: string
	description: string
	eventType: EnEventsTypesEntity
}
