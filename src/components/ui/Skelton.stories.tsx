import { Story } from "@ladle/react";
import { Skeleton } from "./Skelton";


type SkeletonParams = {
    width: string;
    height: string;
}

export const SkeletonStory: Story<SkeletonParams> = ({
    width: _width,
    height: _height,
}) => {

    const width = "100px";
    const height = "20px";

    console.debug(`w-[${width}] h-[${height}] rounded-full`);
    return (
        <Skeleton  className="w-[100px] h-[20px] rounded-full"/>
    );
};


SkeletonStory.args = {
    width: "100px",
    height: "20px",
};