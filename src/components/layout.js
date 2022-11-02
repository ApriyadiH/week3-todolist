import Header from "../components/header";
import AddForm from "../components/form";
import List from "../components/list";
import styled from "styled-components";

const Layout = () => {
   
    return (
        <StContainerLayout>
            <Header />
            <AddForm />
            <List />
        </StContainerLayout>
    )
}

export default Layout;

const StContainerLayout = styled.div`
margin: 0 auto;
max-Width: 1200px;
min-Width: 800px;
`