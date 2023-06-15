"use client";
import {
    CarCard,
    FilterComponent,
    Hero,
    Searchbar,
    ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    // const { searchParams } = props;
    const [allCars, setAllCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [fuel, setFuel] = useState("");
    const [limit, setLimit] = useState(9);

    const getCars = async (
        manufacturer: string,
        model: string,
        year: string,
        fuel: string,
        limit: number
    ) => {
        setLoading(true);
        try {
            const fetchedCars = await fetchCars(
                model || "",
                manufacturer || "",
                year || "2022",
                fuel || "",
                limit || 9
            );
            setAllCars(fetchedCars);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log(manufacturer, model, year, fuel, limit);
        getCars(manufacturer, model, year, fuel, limit);
    }, [manufacturer, model, year, fuel, limit]);
    return (
        <main className="overflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Explore the cars you might like</p>
                </div>
                <div className="home__filters">
                    <Searchbar
                        setManufacturer={setManufacturer}
                        setModel={setModel}
                    />
                    <div className="home__filter-container">
                        <FilterComponent
                            title="fuel"
                            options={fuels}
                            setFilter={setFuel}
                        />
                        <FilterComponent
                            title="year"
                            options={yearsOfProduction}
                            setFilter={setYear}
                        />
                    </div>
                </div>

                {allCars.length > 0 ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars?.map((car) => (
                                <CarCard car={car} key={Math.random()} />
                            ))}
                        </div>

                        {loading && (
                            <div className="mt-16 w-full flex-center">
                                <Image
                                    alt="loader"
                                    src="/loader.svg"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                        )}

                        <ShowMore
                            pageNo={limit / 9}
                            isNext={limit > allCars.length}
                            setLimit={setLimit}
                        />
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">
                            Oops! No Results
                        </h2>
                        {/* <p>{allCars?.message}</p> */}
                    </div>
                )}
            </div>
        </main>
    );
}
