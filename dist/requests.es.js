var l = Object.defineProperty
var $ = (a, e, i) =>
	e in a
		? l(a, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
		: (a[e] = i)
var s = (a, e, i) => ($(a, typeof e != "symbol" ? e + "" : e, i), i)
class d {
	constructor(e) {
		s(this, "httpClient")
		s(this, "cookies")
		s(this, "redirect")
		s(this, "store")
		var C
		const i =
				(e == null ? void 0 : e.$axios) || (e == null ? void 0 : e.HttpClient),
			t = (C = e == null ? void 0 : e.app) == null ? void 0 : C.$cookies,
			h = e == null ? void 0 : e.redirect,
			p = e == null ? void 0 : e.store
		;(this.httpClient = i),
			t && (this.cookies = t),
			h && (this.redirect = h),
			p && (this.store = p)
	}
}
class g extends d {
	constructor(e) {
		super(e)
	}
	getCars() {
		return this.httpClient.$get("/cars-service/cars")
	}
	getCarDetail(e) {
		return this.httpClient.$get(`/cars-service/cars/${e}`)
	}
	deleteCar(e) {
		return this.httpClient.$delete(`/cars-service/cars/${e}`)
	}
	updateCar(e, i) {
		return this.httpClient.$put(`/cars-service/cars/${e}`, i)
	}
	createCar(e, i) {
		return this.httpClient.$put(`/cars-service/cars/${e}`, i)
	}
}
export { g as CarsService }
