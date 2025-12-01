import { EnEventsTypesEntity } from '../../entities'

export const isEventsType = (type: unknown): type is EnEventsTypesEntity =>
	type === EnEventsTypesEntity.COMPETITIONS ||
	type === EnEventsTypesEntity.CHAMPIONSHIPS ||
	type === EnEventsTypesEntity.OLYMPIADS ||
	type === EnEventsTypesEntity.TOURNAMENTS
