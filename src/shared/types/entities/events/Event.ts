import type { TUsersUserEntity } from '../users'
import type { EnEventsMembersTypesEntity } from './Members'
import type { EnEventsStatusesEntity } from './Statuses'
import type { EnEventsTypesEntity } from './Types'

export type TEventsEventExpandEntity =
	| {
			uuid: string
			imagePaths: string[]
			status: EnEventsStatusesEntity.STARTED | EnEventsStatusesEntity.RECRUITING
			startDatetime: string // Timestamp
			finishDatetime: string // Timestamp
			name: string
			description: string
			organizeName: string
			membersType: EnEventsMembersTypesEntity.ONE
			members: TUsersUserEntity[]
	  }
	| {
			uuid: string
			eventType: EnEventsTypesEntity
			imagePaths: string[]
			status: EnEventsStatusesEntity.STARTED | EnEventsStatusesEntity.RECRUITING
			startDatetime: string // Timestamp
			finishDatetime: string // Timestamp
			name: string
			description: string
			organizeName: string
			membersType: EnEventsMembersTypesEntity.COMMANDS
			members: {
				commandName: string
				members: TUsersUserEntity[]
			}[]
	  }
	| {
			uuid: string
			imagePaths: string[]
			status: EnEventsStatusesEntity.FINISHED
			startDatetime: string // Timestamp
			finishDatetime: string // Timestamp
			name: string
			description: string
			organizeName: string
			membersType: EnEventsMembersTypesEntity.ONE
			members: (TUsersUserEntity & {
				place: number
			})[]
	  }
	| {
			uuid: string
			eventType: EnEventsTypesEntity
			imagePaths: string[]
			status: EnEventsStatusesEntity.FINISHED
			startDatetime: string // Timestamp
			finishDatetime: string // Timestamp
			name: string
			description: string
			organizeName: string
			membersType: EnEventsMembersTypesEntity.COMMANDS
			members: {
				place: number
				commandName: string
				members: TUsersUserEntity[]
			}[]
	  }

export type TEventsEventShrinkEntity = Pick<
	TEventsEventExpandEntity,
	| 'uuid'
	| 'imagePaths'
	| 'startDatetime'
	| 'finishDatetime'
	| 'name'
	| 'description'
> & {
	status: EnEventsStatusesEntity
	eventType: EnEventsTypesEntity
}
