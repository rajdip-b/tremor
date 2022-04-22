import React from 'react';

import { DeltaBgColors, DeltaTypes, mapInputsToDeltaType } from '@common/component-utils';
import { classNames, parseBgClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface DeltaBarProps {
    widthPercentage: number,
    deltaType: string,
    isIncreasePositive: boolean,
    barBgColor?: string,
    markerBgColor?: string
}

const DeltaBar = ({
    widthPercentage,
    deltaType,
    isIncreasePositive = true,
    barBgColor = 'bg-gray-200',
    markerBgColor = 'bg-gray-400'
}: DeltaBarProps) => {
    return(
        <BarWrapper bgColor={ classNames(parseBgClassNames(barBgColor)) }>
            <div className="w-1/2 h-full flex justify-end bg-transparent rounded-l-full">
                { deltaType===DeltaTypes.Decrease ? (
                    <div 
                        className={ classNames(
                            DeltaBgColors[mapInputsToDeltaType(deltaType, isIncreasePositive)],
                            'rounded-l-full'
                        ) } 
                        style={ {'width': `${widthPercentage}%`} } 
                    />
                ) : null}
            </div>
            <div className={ classNames(
                parseBgClassNames(markerBgColor),
                'h-5 w-0.5'
            ) } 
            />
            <div className="w-1/2 h-full flex justify-start bg-transparent rounded-r-full">
                { deltaType===DeltaTypes.Increase ? (
                    <div 
                        className={ classNames(
                            DeltaBgColors[mapInputsToDeltaType(deltaType, isIncreasePositive)],
                            'rounded-r-full'
                        ) } 
                        style={ {'width': `${widthPercentage}%`} } 
                    />
                ) : null}
            </div>
        </BarWrapper>
    );
};

export default DeltaBar;