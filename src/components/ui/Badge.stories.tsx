import { Story } from "@ladle/react";

import { Badge, badgeVariants, variant } from "./Badge";

type BadgeParams = {
    variant: variant;
    label: string;
};

export const BadgeStory: Story<BadgeParams> = ({ variant, label }) => {
    return (
        <Badge variant={variant}>
            <p>{label}</p>
        </Badge>
    );
};

BadgeStory.args = {
    variant: "default",
    label: "Hello World",
};

BadgeStory.argTypes = {
    variant: {
        options: ["default", "secondary", "destructive", "outline"],
        control: {
            type: "select",
        },
    },
};

