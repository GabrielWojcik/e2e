import React from 'react';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    onChange,
    icon,
    backgroundColor,
    borderRadius,
}) => {
    const borderRadiusValue = borderRadius ? `${borderRadius}px` : '8px';

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '8px 8px 8px 40px', 
        border: '1px solid #ccc',
        borderRadius: borderRadiusValue,
        backgroundColor: backgroundColor || '#fff',
        position: 'relative',
        color: "#09093B"
    };

    return (
        <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>{label}</label>
            <div style={{ position: 'relative' }}>
                {icon && (
                    <img
                        src={icon}
                        alt="Input icon"
                        style={{
                            width: '20px',
                            height: '20px',
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: '2000'
                        }}
                    />
                )}
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                    style={inputStyle}
                />
            </div>
        </div>
    );
};

export default Input;
