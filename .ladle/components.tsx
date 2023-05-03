import React from "react";
import type { GlobalProvider } from "@ladle/react";
import "tailwindcss/tailwind.css";
import "src/index.css"

export const Provider: GlobalProvider = ({ children, globalState }) => {
    return (
        <>
            {children}
        </>
    );
};
