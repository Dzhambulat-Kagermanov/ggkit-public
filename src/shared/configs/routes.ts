import type {
	EnEventsSortTypesEntity,
	EnEventsStatusesEntity,
	EnEventsTypesEntity,
	EnQuizSortTypesEntity,
	EnQuizStatusesEntity,
} from '../types/entities'
import { concatQueryParams } from '../utils/concatQueryParams'

type TDynamicParam = string | number
type TQueryParams = Record<string, string | number>

class Paths {
	static getDynamicParamsPath(primaryPath: string) {
		return (dynamicParam: TDynamicParam) => `${primaryPath}/${dynamicParam}`
	}

	static getQueryParamsPath<QueryParams extends TQueryParams>(
		primaryPath: string
	) {
		return (queryParams?: QueryParams) =>
			queryParams !== undefined
				? `${primaryPath}${concatQueryParams(queryParams)}`
				: primaryPath
	}

	static getFullPath<
		DynamicParam extends TDynamicParam,
		QueryParams extends TQueryParams
	>(primaryPath: string) {
		return <K extends QueryParams | undefined>(
			dynamicParam: K extends undefined ? string : DynamicParam,
			queryParams: K = undefined
		) =>
			queryParams !== undefined
				? `${primaryPath}/${dynamicParam}${concatQueryParams(queryParams)}`
				: `${primaryPath}/${dynamicParam}`
	}
}

export const ROUTES = {
	HOME: '/',
	EVENTS: Paths.getQueryParamsPath<{
		type?: EnEventsTypesEntity
		status?: EnEventsStatusesEntity
		sort?: EnEventsSortTypesEntity
		search?: string
	}>('/events'),
	EVENT_BY_UUID: Paths.getQueryParamsPath('/events'),
	QUIZ: Paths.getQueryParamsPath<{
		search?: string
		sort?: EnQuizSortTypesEntity
		status?: EnQuizStatusesEntity
	}>('/quiz'),
	PROFILE_PERSONAL_INFO: '/profile/personal-info',
	PROFILE_EVENTS: '/profile/events',
} as const
