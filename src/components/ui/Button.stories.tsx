import { Story } from "@ladle/react";
import { Button, buttonVariants, size, variant } from "./Button";

type ButtonParams = {
    variant: variant;
    size: size;
    label: string;
};

export const ButtonStory: Story<ButtonParams> = ({ variant, size, label }) => {
    return (
        <Button variant={variant} size={size} onClick={() => alert("Hello World")}>
            <p>{label}</p>
        </Button>
    );
};

ButtonStory.args = {
    variant: "default",
    size: "default",
    label: "Hello World",
};

ButtonStory.argTypes = {
    variant: {
        options: ["default", "secondary", "destructive", "outline", "ghost"],
        control: {
            type: "select",
        },
    },
    size: {
        options: ["default", "sm", "lg"],
        control: {
            type: "select",
        },
    },
};
