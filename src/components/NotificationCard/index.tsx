import React from "react";
import { LuBell } from "react-icons/lu";
import { BsClock } from "react-icons/bs";
import { LuBarChart2 } from "react-icons/lu";

import "./index.css";

type INotification = {
    icon: "bell" | "stats" | "clock";
    action: "save" | "check";
    children?: React.ReactNode;
};

const Notification: React.FC<INotification> = ({ icon, action, children }) => {
    const getIcon = (icon: INotification["icon"]) => {
        switch (icon) {
            case "bell":
                return <LuBell style={{ width: "28px", height: "28px" }} />;
            case "clock":
                return <BsClock style={{ width: "28px", height: "28px" }} />;
            case "stats":
                return <LuBarChart2 style={{ width: "28px", height: "28px" }} />;
        }
    };

    const getAction = (action: INotification["action"]) => {
        switch (action) {
            case "check":
                return (
                    <div className="inline-flex items-center">
                        <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="blue">
                            <input
                                type="checkbox"
                                className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                                id="blue"
                                checked
                                readOnly
                            />
                            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-2.5 w-2.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </label>
                    </div>
                );
            case "save":
                return <p className="save">Save</p>;
        }
    };

    return (
        <div className="notification-root">
            <div className="notification-header">
                {getIcon(icon)}
                {getAction(action)}
            </div>
            {children}
        </div>
    );
};

export default Notification;
