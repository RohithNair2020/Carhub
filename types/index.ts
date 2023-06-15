import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    text: string;
    disabled?: boolean;
    customStyles?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type: "button" | "submit" | "reset" | undefined;
    rightIcon?: string;
}

export interface SearchManufacturerProps {
    selected: string;
    setSelected: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface FilterComponentProps {
    title: string;
    options: OptionProps[];
    setFilter: (e: any) => void;
}

export interface ShowMoreProps {
    pageNo: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}
