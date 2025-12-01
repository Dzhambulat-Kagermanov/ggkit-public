import { EnEventsTypesEntity } from '@/shared/types/entities'
import type { TRenderMappingConfig } from '../types/configs'

export const RENDER_MAPPING_CONFIG: TRenderMappingConfig = {
	[EnEventsTypesEntity.COMPETITIONS]: { text: 'Конкурсы' },
	[EnEventsTypesEntity.CHAMPIONSHIPS]: { text: 'Чемпионаты' },
	[EnEventsTypesEntity.OLYMPIADS]: { text: 'Олимпиады' },
	[EnEventsTypesEntity.TOURNAMENTS]: { text: 'Турниры' },
}
