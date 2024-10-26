import { fetchGetCarData } from "../../api/getCars"
import { CarModel } from "./props"

export const loadCarData = async (carId: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    const response = await fetchGetCarData(carId)
    try {
        if(response){
            setCarData(response)
        }
    } catch (error) {
        console.log("Erro ao buscar da API:", error)
    }
}

export const handlePrevioussItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    let response = null
    try {
        if(carData && carData?.id > 1) {
            response = await fetchGetCarData(carData.id - 1)
        }

        if(response) {
            setCarData(response)
        }
    } catch (error) {
        console.log("Erro ao chamar a API: ", error)
    }
}

export const handleNextItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    let response = null
    try {
        if(carData && carData?.id < 10) {
            response = await fetchGetCarData(carData.id + 1)
        }

        if(response) {
            setCarData(response)
        }
    } catch (error) {
        console.log("Erro ao chamar a API: ", error)
    }
}