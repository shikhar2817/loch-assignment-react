import React, { useEffect, useState } from "react"

import "./index.css"
import Notification from "../NotificationCard"
import Input from "../Input"
import { FaCaretDown } from "react-icons/fa6";
import Ticker from "../Ticker";

const Notifications: React.FC<{}> = () => {
    const [width, setWidth] = useState(0);

    const calcWidth = () => {
        const elem = document.getElementById("notification-wrapper")
        if (elem) {
            const parentWidth = elem.offsetWidth;
            if (window.innerWidth > 1100) {
                setWidth((parentWidth / 100) * 60)
            }
            if (window.innerWidth <= 1100) {
                setWidth(   parentWidth)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', calcWidth)
        calcWidth()
        return () => {
            window.removeEventListener('resize', calcWidth)
        }
    }, [])

    return <div className="notifications-root" style={{ width: width }}>
        <Ticker duration={10}>
            <Notification action="save" icon="bell">
                <p className="notification-text">We'll be sending notifications to you here</p>
                <Input className="input-notification" placeholder="hello@loch.one" />
            </Notification>
            <Notification action="check" icon="stats">
                <p className="notification-para">Notify me when any wallets move more than</p>
                <div className="custom-select">
                    <select defaultValue={"$1000.00"}>
                        <option value={"$1000.00"}>$1000</option>
                    </select>
                    <FaCaretDown />
                </div>
            </Notification>
            <Notification action="check" icon="clock">
                <p className="notification-para notification-para-2">Notify me when any wallet dormant for</p>
                <div className="custom-select custom-select-2">
                    <select defaultValue={"30"}>
                        <option value={"30"}> {`> 30Days`}</option>
                    </select>
                    <FaCaretDown />
                </div>
                <p className="notification-para mt-1">becomes active</p>
            </Notification>
        </Ticker>
        <div className="overshadow" />
    </div>
}

export default Notifications;