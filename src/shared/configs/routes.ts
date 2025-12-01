import { Routing } from '../helpers/Routing'
import type {
	EnCrudActionsEntity,
	EnEventsSortTypesEntity,
	EnEventsStatusesEntity,
	EnEventsTypesEntity,
	EnQuizSortTypesEntity,
	EnQuizStatusesEntity,
} from '../types/entities'

export const ROUTES = {
	HOME: '/',
	EVENTS: Routing.getQueryParamsPath<{
		type?: EnEventsTypesEntity
		status?: EnEventsStatusesEntity
		sort?: EnEventsSortTypesEntity
		search?: string
	}>('/events'),
	EVENT_BY_UUID: Routing.getDynamicParamsPath('/events'),
	QUIZ: Routing.getQueryParamsPath<{
		search?: string
		sort?: EnQuizSortTypesEntity
		status?: EnQuizStatusesEntity
	}>('/quiz'),
	PROFILE_PERSONAL_INFO: '/profile/personal-info',
	PROFILE_EVENTS: '/profile/events',

	ADMIN_GROUPS: '/admin/groups',
	ADMIN_GROUPS_USERS: Routing.getDynamicParamsPath('/admin/groups'),
	ADMIN_EVENTS: Routing.getQueryParamsPath<{
		action?: EnCrudActionsEntity
	}>('/admin/events'),
	ADMIN_QUIZ: Routing.getQueryParamsPath<{
		action?: EnCrudActionsEntity
	}>('/admin/quiz'),
} as const
