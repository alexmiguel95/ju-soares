import { Trans } from 'react-i18next';
import styled from 'styled-components';
import backgroundBanner from '../assets/img/background-banner.webp';

const Banner = () => {
    return (
        <StyledContainer>
            <StyledText>
                <Trans i18nKey="pages.home.textOne">
                    <span className="featured-text">{{ textStyle: 'conquistar' }}</span>
                </Trans>
            </StyledText>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Sacramento&display=swap');
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    background-image: url(${backgroundBanner});
    font-size: 30px;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 400px;
    width: 100%;

    .featured-text {
        font-size: 30px;
        color: #fff;
        background-color: #ac0000;
        font-family: 'Sacramento', cursive;
    }
`;

const StyledText = styled.div`
    max-width: 576px;

    text-align: center;
    line-height: 2.5;
`;

export default Banner;
