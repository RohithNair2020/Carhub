"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = (props: CustomButtonProps) => {
    const { text, onClick, disabled, customStyles, type, rightIcon } = props;
    return (
        <button
            disabled={disabled}
            type={type}
            className={`custom-btn ${customStyles}`}
            onClick={onClick}
        >
            <span className={`flex-1`}>{text}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        alt="button icon"
                        src={rightIcon}
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
};

export default CustomButton;
