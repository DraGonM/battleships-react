import { Status } from '.'

export interface StatusesState {
    readonly loadCurrentUser: Status
    readonly loadResults: Status
    readonly loadResultsByUser: Status
    readonly [key: string]: Status
}
