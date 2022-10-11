import { AxiosInstance } from "axios"

export type Dictionary<T> = { [key: string]: T }

export type Query = Dictionary<string | (string | null)[]>

export interface Location {
	name?: string
	path?: string
	hash?: string
	query?: Dictionary<string | (string | null)[] | null | undefined>
	params?: Dictionary<string>
	append?: boolean
	replace?: boolean
}

export interface Constructor {
	$axios?: AxiosInstance
	HttpClient?: any
	app?: { $cookies: any }
	redirect(status: number, path: string, query?: Query): void
	redirect(path: string, query?: Query): void
	redirect(location: Location): void
	redirect(status: number, location: Location): void
	store?: any
}
