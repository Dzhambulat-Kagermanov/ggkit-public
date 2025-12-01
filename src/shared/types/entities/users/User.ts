import type { TUsersProfilePersonalInfoEntity } from './Profile'

export type TUsersUserEntity = Pick<
	TUsersProfilePersonalInfoEntity,
	'avatarPath' | 'name'
>
