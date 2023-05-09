import { Separator } from "@radix-ui/react-separator";
import { Button } from "./Button";
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx"

const Header = () => {
    return (
        <div className="container flex flex-row justify-between items-center border bg-background p-4">
            <div className="flex flex-row items-center">
                <RxHamburgerMenu size={32}/>
            </div>
            <div className="flex flex-row items-center justify-end space-x-4">
                <Button variant={"outline"}>
                    <FaSignInAlt className="m-2"/>
                    <a>Login</a>
                </Button>
                <Button>
                    <FiUserPlus className="m-2"/>
                    <a>Sign Up</a>
                </Button>
                <FaUserCircle size={32}/>
            </div>
        </div>
    );
};

export { Header };
