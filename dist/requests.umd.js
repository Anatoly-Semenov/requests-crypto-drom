;(function(t, i) {
	typeof exports == "object" && typeof module < "u"
		? i(exports)
		: typeof define == "function" && define.amd
		? define(["exports"], i)
		: ((t = typeof globalThis < "u" ? globalThis : t || self),
		  i((t.types = {})))
})(this, function(t) {
	"use strict"
	var C = Object.defineProperty
	var f = (t, i, s) =>
		i in t
			? C(t, i, { enumerable: !0, configurable: !0, writable: !0, value: s })
			: (t[i] = s)
	var a = (t, i, s) => (f(t, typeof i != "symbol" ? i + "" : i, s), s)
	class i {
		constructor(e) {
			a(this, "httpClient")
			a(this, "cookies")
			a(this, "redirect")
			a(this, "store")
			var d
			const l =
					(e == null ? void 0 : e.$axios) ||
					(e == null ? void 0 : e.HttpClient),
				r = (d = e == null ? void 0 : e.app) == null ? void 0 : d.$cookies,
				h = e == null ? void 0 : e.redirect,
				p = e == null ? void 0 : e.store
			;(this.httpClient = l),
				r && (this.cookies = r),
				h && (this.redirect = h),
				p && (this.store = p)
		}
	}
	class s extends i {
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
		updateCar(e, l) {
			return this.httpClient.$put(`/cars-service/cars/${e}`, l)
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
	;(t.CarsService = s),
		Object.defineProperties(t, {
			__esModule: { value: !0 },
			[Symbol.toStringTag]: { value: "Module" }
		})
})
