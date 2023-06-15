import { CarProps } from "@/types";

export async function fetchCars(
    model: string,
    manufacturer: string,
    year: string,
    fuel: string,
    limit: number
) {
    const headers = {
        "X-RapidAPI-Key": "694ba17131msh0da483e4e338195p1f5b54jsned8a6a096071",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel=${fuel}&limit=${limit}`;
    const response = await fetch(url, { headers });
    const result = await response.json();
    return result;
}

export const generateCarImageURL = (car: CarProps, angle: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
    url.searchParams.append("customer", "inneutrinos");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", year.toString());
    url.searchParams.append("angle", angle);

    return `${url}`;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathName = `${
        window.location.pathname
    }?${searchParams.toString()}`;
    return newPathName;
};
