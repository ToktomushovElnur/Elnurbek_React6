//useEffect)))
import React, { useEffect, useState } from 'react';

const AnimatedHeaderWithEffect = () => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const handleFocus = () => {
            setIsFocused(true);
        };

        const handleBlur = () => {
            setIsFocused(false);
        };

        const inputElement = document.getElementById('animatedInput');

        inputElement.addEventListener('focus', handleFocus);
        inputElement.addEventListener('blur', handleBlur);

        return () => {
            inputElement.removeEventListener('focus', handleFocus);
            inputElement.removeEventListener('blur', handleBlur);
        };
    }, []);

    return (
        <div>
            <h1 className={isFocused ? 'focused' : ''}>Анимированный Заголовок</h1>
            <input id="animatedInput" type="text" placeholder="Фокус!" />
        </div>
    );
};

export default AnimatedHeaderWithEffect;

