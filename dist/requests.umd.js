;(function(t, i) {
	typeof exports == "object" && typeof module < "u"
		? i(exports)
		: typeof define == "function" && define.amd
		? define(["exports"], i)
		: ((t = typeof globalThis < "u" ? globalThis : t || self),
		  i((t.types = {})))
})(this, function(t) {
	"use strict"
	var n = Object.defineProperty
	var $ = (t, i, s) =>
		i in t
			? n(t, i, { enumerable: !0, configurable: !0, writable: !0, value: s })
			: (t[i] = s)
	var p = (t, i, s) => ($(t, typeof i != "symbol" ? i + "" : i, s), s)
	class i {
		constructor(e) {
			p(this, "httpClient")
			p(this, "cookies")
			p(this, "redirect")
			p(this, "store")
			var C
			const a =
					(e == null ? void 0 : e.$axios) ||
					(e == null ? void 0 : e.HttpClient),
				l = (C = e == null ? void 0 : e.app) == null ? void 0 : C.$cookies,
				d = e == null ? void 0 : e.redirect,
				h = e == null ? void 0 : e.store
			;(this.httpClient = a),
				l && (this.cookies = l),
				d && (this.redirect = d),
				h && (this.store = h)
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
		updateCar(e, a) {
			return this.httpClient.$put(`/cars-service/cars/${e}`, a)
		}
		createCar(e, a) {
			return this.httpClient.$put(`/cars-service/cars/${e}`, a)
		}
	}
	;(t.CarsService = s),
		Object.defineProperties(t, {
			__esModule: { value: !0 },
			[Symbol.toStringTag]: { value: "Module" }
		})
})
