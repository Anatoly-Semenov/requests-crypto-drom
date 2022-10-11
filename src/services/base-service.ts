// Types
import type { Constructor } from "../types"

export default class BaseService {
	public httpClient
	public cookies
	public redirect
	public store

	constructor(constructor: Constructor) {
		const httpClient = constructor?.$axios || constructor?.HttpClient
		const cookies = constructor?.app?.$cookies
		const redirect = constructor?.redirect
		const store = constructor?.store

		this.httpClient = httpClient

		if (cookies) {
			this.cookies = cookies
		}
		if (redirect) {
			this.redirect = redirect
		}
		if (store) {
			this.store = store
		}
	}
}
