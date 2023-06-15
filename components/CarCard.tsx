"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { CarDetails, CustomButton } from "@/components";
import { calculateCarRent, generateCarImageURL } from "@/utils";

interface CarCardProps {
    car: CarProps;
}

const CarCard = (props: CarCardProps) => {
    const { city_mpg, transmission, drive, make, model, year } = props.car;
    const [open, setIsOpen] = useState(false);
    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">$</span>
                {carRent}
                <span className="self-end text-[14px] font-medium">/day</span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    alt="car image"
                    src={generateCarImageURL(props.car, "0")}
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image
                            src="/steering-wheel.svg"
                            width={20}
                            height={50}
                            alt="steering wheel"
                        />
                        <p className="text-[14px]">
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image
                            src="/tire.svg"
                            width={20}
                            height={50}
                            alt="tire"
                        />
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image
                            src="/gas.svg"
                            width={20}
                            height={50}
                            alt="steering wheel"
                        />
                        <p className="text-[14px]">{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        type="button"
                        text="View More"
                        customStyles="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-17px font-bold"
                        rightIcon="/right-arrow.svg"
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                </div>
            </div>
            <CarDetails
                isOpen={open}
                closeModal={() => setIsOpen(false)}
                car={props.car}
            />
        </div>
    );
};

export default CarCard;
