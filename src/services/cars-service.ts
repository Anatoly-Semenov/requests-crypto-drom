import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { CarsService as ICarsService } from "@drom/types"

type Car = ICarsService.Car

export default class CarsService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getCars(): Promise<Car[]> {
		return this.httpClient.$get("/cars-service/cars")
	}

	getCarDetail(id: string): Promise<Car> {
		return this.httpClient.$get(`/cars-service/cars/${id}`)
	}

	deleteCar(id: string): Promise<Car> {
		return this.httpClient.$delete(`/cars-service/cars/${id}`)
	}

	updateCar(id: string, car: ICarsService.CreateCarDto): Promise<Car> {
		return this.httpClient.$put(`/cars-service/cars/${id}`, car)
	}

	createCar(id: string, car: ICarsService.CreateCarDto): Promise<Car> {
		return this.httpClient.$put(`/cars-service/cars/${id}`, car)
	}

	getColorsList(): Promise<ICarsService.Color[]> {
		return this.httpClient.$get("/cars-service/colors")
	}

	getBrandsList(): Promise<ICarsService.Brand[]> {
		return this.httpClient.$get("/cars-service/brands")
	}

	getModelsList(): Promise<ICarsService.Model[]> {
		return this.httpClient.$get("/cars-service/models")
	}
}
