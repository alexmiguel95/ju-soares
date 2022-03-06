import styled from 'styled-components';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <StyledContainer>
            <Banner />
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
`;

export default Home;
