import Image from "next/image";
import React from "react";

const SearchButton = (props: { customStyles: string }) => {
    const { customStyles } = props;
    return (
        <button type="submit" className={`ml-3 z-10 ${customStyles}`}>
            <Image
                src="magnifying-glass.svg"
                alt="magnifying-glass"
                width={40}
                height={40}
                className="object-contain"
            />
        </button>
    );
};

export default SearchButton;
