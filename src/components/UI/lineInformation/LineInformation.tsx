import React from 'react';
import cl from "./LineInformation.module.scss";

interface ILineInformation {
    category: string
    value: string | number
}

const LineInformation: React.FC<ILineInformation> = ({category, value}) => {
    return (
        <div className={cl.lineInformation}>
            <span className={cl.lineInformation_category}>{category}</span>
            <span className={cl.lineInformation_value}>{value}</span>
        </div>
    );
};

export default React.memo(LineInformation);
