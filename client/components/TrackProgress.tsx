import React from 'react';

interface TrackProgressProps {
    left: number;
    right: number;
    isTime: boolean;
    onChange: (e) => void
}

const TrackProgress: React.FC<TrackProgressProps> = ({left, right, onChange, isTime}) => {
    const endTime = Math.floor(right/60) + ':' + right%60;
        return (
            <div style={{display: 'flex'}}>
                <input
                    type="range"
                    min={0}
                    max={right}
                    value={left}
                    onChange={onChange}
                />
                <div>{left} / {isTime ? endTime : right}</div>
            </div>
        );
    };

export default TrackProgress;
