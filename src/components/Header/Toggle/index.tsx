import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// import { Container,  } from './styles';

import Switch from 'react-switch';

interface Props {
    toggleTheme(): void;
}

const Toggle: React.FC<Props> = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                width={40}
                height={26}
                handleDiameter={20}
                offColor={colors.toggle}
                onColor={colors.toggle}
                activeBoxShadow={colors.text}
            />
        </>
    );
}

export default Toggle;