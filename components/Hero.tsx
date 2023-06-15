"use client";
import Image from "next/image";
import { CustomButton } from "@/components";

const Hero = () => {
    const triggerScroll = () => {};

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find, book or rent a car{" "}
                    <span className="text-primary-blue">
                        quickly and easily!
                    </span>
                </h1>
                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless
                    booking experience
                </p>
                <CustomButton
                    text="Book Now"
                    onClick={triggerScroll}
                    type="button"
                    disabled={false}
                    customStyles="bg-primary-blue text-white rounded-full mt-10"
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        alt="hero image"
                        src="/hero.png"
                        fill
                        className="object-contain"
                    ></Image>
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    );
};

export default Hero;
