import React from "react";
import { GoBell } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import "./index.css"

type ITextSection = {
    align: 'left' | 'right'
    primaryText: string
    secondaryText: string
    icon: 'bell' | 'eye'
}

const TextSection: React.FC<ITextSection> = ({
    align,
    primaryText,
    secondaryText,
    icon
}) => {

    const selectIcon = (icon: ITextSection['icon']) => {
        switch (icon) {
            case "bell": return <GoBell style={{ width: "32px", height: "32px" }} />
            case "eye": return <MdOutlineRemoveRedEye style={{ width: "32px", height: "32px" }} />
        }
    }

    return <div className={`
        text-section-wrapper 
        ${align == 'right' ? 'text-section-wrapper-right' : ''}
    `}>
        {selectIcon(icon)}
        <h2 className="text-section-primary">{primaryText}</h2>
        <p className="text-section-secondary">{secondaryText}</p>
    </div>
}

export default TextSection;