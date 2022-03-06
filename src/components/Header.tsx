import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import useWindowSize from '../hooks/useWindowSize';

const Header = () => {
    const { t } = useTranslation();
    const [width] = useWindowSize();

    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

    return (
        <StyledContainerMain>
            <StyledContainer>
                <StyledLogo>
                    <img src={require('../assets/img/logo-ju-soares.webp')} alt="Logo ju Soares" />
                </StyledLogo>
                {width >= 767.98 ? (
                    <StyledMenu>
                        <nav>
                            <ul>
                                <li>{t('header.optionOne')}</li>
                                <li>{t('header.optionTwo')}</li>
                                <li style={{ marginRight: '25px' }}>{t('header.optionThree')}</li>
                            </ul>
                        </nav>
                    </StyledMenu>
                ): (
                    <StyledContainerMenuHamburguer>
                        <MenuRoundedIcon onClick={() => setIsOpenDropdown(!isOpenDropdown)} />
                        {isOpenDropdown && (
                            <StyledMenuDropdown>
                                <nav>
                                    <ul>
                                        <li>{t('header.optionOne')}</li>
                                        <li>{t('header.optionTwo')}</li>
                                        <li style={{ marginRight: '25px' }}>{t('header.optionThree')}</li>
                                    </ul>
                                </nav>
                            </StyledMenuDropdown>
                        )}
                    </StyledContainerMenuHamburguer>
                )}  
            </StyledContainer>
        </StyledContainerMain>
    );
};

const StyledContainerMain = styled.header`
    position: relative;
    height: 130px;
    background: ${({ theme }) => theme.colors.background};
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: center;

    max-width: 1024px;
    margin: 0 auto;
`;

const StyledLogo = styled.figure`
    width: 250px;
    margin: 0;

    img {
        width: 250px;
    }
`;

const StyledMenu = styled.div`
    width: 70%;
    margin-top: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.secondary};

    ul {
        display: flex;
        justify-content: flex-end;

        padding-bottom: 9px;

        list-style-type: none;
        border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    }

    li {
        cursor: pointer;
        margin-left: 65px;
    }
`;

const StyledContainerMenuHamburguer = styled.div`
    margin: 0 auto;

    .MuiSvgIcon-root {
        width: 2em;
        height: 1.5em;
        margin-top: 10px;
    }
`;

const StyledMenuDropdown = styled.aside`
    position: absolute;
    left: -10px;
    bottom: -108px;

    ul {
        list-style-type: none;
    }

    li {
        margin: 10px 0;
        cursor: pointer;
    }
`;

export default Header;
