"use client";

import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";
import { SearchButton } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbar = (props: any) => {
    const { setManufacturer, setModel } = props;
    const [selectedManufacturer, setSelectedManufacturer] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedManufacturer && !selectedModel) {
            return alert("Please fill in the search bar");
        }
        setModel(selectedModel.toLowerCase());
        setManufacturer(selectedManufacturer.toLowerCase());
    };

    // const updateSearchParams = (model: string, manufacturer: string) => {
    //     const searchParams = new URLSearchParams(window.location.search);

    //     if (model) {
    //         searchParams.set("model", model);
    //     } else {
    //         searchParams.delete("model");
    //     }

    //     if (manufacturer) {
    //         searchParams.set("manufacturer", manufacturer);
    //     } else {
    //         searchParams.delete("manufacturer");
    //     }

    //     const newURL = `${window.location.pathname}?${searchParams.toString()}`;

    //     router.push(newURL);
    // };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={selectedManufacturer}
                    setSelected={setSelectedManufacturer}
                />
                <SearchButton customStyles="sm:hidden"></SearchButton>
            </div>

            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car model"
                />
                <input
                    type="text"
                    name="model"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                ></input>
                <SearchButton customStyles="sm:hidden" />
            </div>
            <SearchButton customStyles="max-sm:hidden" />
        </form>
    );
};

export default Searchbar;
