"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components";
import { updateSearchParams } from "@/utils";

const ShowMore = (props: ShowMoreProps) => {
    const { pageNo, isNext, setLimit } = props;
    const handleNavigation = () => {
        const newLimit = (pageNo + 1) * 9;
        setLimit(newLimit);
    };
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    type="button"
                    text="Show More"
                    customStyles="bg-primary-blue rounded-full text-white"
                    onClick={handleNavigation}
                />
            )}
        </div>
    );
};

export default ShowMore;
