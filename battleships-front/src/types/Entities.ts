import { User, Result } from ".";

export interface Entities {
    readonly users: { [key: string]: User }
    readonly results: { [key: string]: Result }
}