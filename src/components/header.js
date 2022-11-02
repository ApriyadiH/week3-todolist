import styled from "styled-components";

const Header = () =>{
    return (
        <StContainerHeader>
            <div>My Todo List</div>
            <div>React</div>
        </StContainerHeader>
    )
}

export default Header;

const StContainerHeader = styled.div`
align-items: center;
border: 1px solid #ddd;
display: flex;
height: 50px;
justify-content: space-between;
padding: 0 20px;
`