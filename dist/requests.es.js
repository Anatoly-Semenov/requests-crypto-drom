var p = Object.defineProperty
var C = (t, e, i) =>
	e in t
		? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
		: (t[e] = i)
var s = (t, e, i) => (C(t, typeof e != "symbol" ? e + "" : e, i), i)
class $ {
	constructor(e) {
		s(this, "httpClient")
		s(this, "cookies")
		s(this, "redirect")
		s(this, "store")
		var r
		const i =
				(e == null ? void 0 : e.$axios) || (e == null ? void 0 : e.HttpClient),
			a = (r = e == null ? void 0 : e.app) == null ? void 0 : r.$cookies,
			h = e == null ? void 0 : e.redirect,
			l = e == null ? void 0 : e.store
		;(this.httpClient = i),
			a && (this.cookies = a),
			h && (this.redirect = h),
			l && (this.store = l)
	}
}
class g extends $ {
	constructor(e) {
		super(e)
	}
	getCars(e) {
		return this.httpClient.$get("/cars-service/cars", { params: e })
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
	createCar(e) {
		return this.httpClient.$post("/cars-service/cars", e)
	}
	getColorsList() {
		return this.httpClient.$get("/cars-service/colors")
	}
	getBrandsList() {
		return this.httpClient.$get("/cars-service/brands")
	}
	getModelsList(e) {
		return this.httpClient.$get(`/cars-service/brands/${e}/models`)
	}
}
export { g as CarsService }
