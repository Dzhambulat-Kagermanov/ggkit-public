import { AdminEventsScreen } from '@/screens/AdminEvents'
import { AdminGroupsScreen } from '@/screens/AdminGroups'
import { AdminGroupsUsersScreen } from '@/screens/AdminGroupsUsers'
import { AdminQuizScreen } from '@/screens/AdminQuiz'
import { EventsScreen } from '@/screens/Events'
import { EventsByUuidScreen } from '@/screens/EventsByUuid'
import { HomeScreen } from '@/screens/Home'
import { ProfileEventsScreen } from '@/screens/ProfileEvents'
import { ProfilePersonalInfoScreen } from '@/screens/ProfilePersonalInfo'
import { QuizScreen } from '@/screens/Quiz'
import { ROUTES } from '@/shared/configs/routes'
import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminSidebarLayout } from './layouts/AdminSidebar'
import { MainSidebarLayout } from './layouts/MainSidebar'

interface Props {}

export const App: FC<Props> = () => {
	return (
		<Routes>
			<Route element={<MainSidebarLayout />}>
				<Route path={ROUTES.HOME} element={<HomeScreen />} />
				<Route path={ROUTES.EVENTS()} element={<EventsScreen />} />
				<Route
					path={ROUTES.EVENT_BY_UUID(':uuid')}
					element={<EventsByUuidScreen />}
				/>
				<Route path={ROUTES.QUIZ()} element={<QuizScreen />} />
				<Route
					path={ROUTES.PROFILE_PERSONAL_INFO}
					element={<ProfilePersonalInfoScreen />}
				/>
				<Route path={ROUTES.PROFILE_EVENTS} element={<ProfileEventsScreen />} />
			</Route>
			<Route element={<AdminSidebarLayout />}>
				<Route path={ROUTES.ADMIN_GROUPS} element={<AdminGroupsScreen />} />
				<Route
					path={ROUTES.ADMIN_GROUPS_USERS(':uuid')}
					element={<AdminGroupsUsersScreen />}
				/>
				<Route path={ROUTES.ADMIN_EVENTS()} element={<AdminEventsScreen />} />
				<Route path={ROUTES.ADMIN_QUIZ()} element={<AdminQuizScreen />} />
			</Route>
		</Routes>
	)
}
