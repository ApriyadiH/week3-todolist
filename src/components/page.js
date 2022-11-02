import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Page = () => {

    const param = useParams();
    const navigate = useNavigate();
    const pages = useSelector((state) => state.todos.pages);

    return (
        <StContainerPage>
            <StCardPage>
                <div>
                    <StCardHeader>
                        <div>
                            ID : {param.id} 
                        </div>
                        <StBackButton  onClick={() => {navigate("/");}}> Return </StBackButton>
                    </StCardHeader>
                    <StCardTitle> {pages[0].title} </StCardTitle>
                    <StCardContext> {pages[0].context} </StCardContext>
                </div>
            </StCardPage>
        </StContainerPage>
    )
}

export default Page

const StContainerPage = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`

const StCardPage = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

const StCardHeader = styled.div`
    display: flex;
    height: 80px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 24px;
    -webkit-box-align: center;
    align-items: center;
`

const StBackButton = styled.button`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`

const StCardTitle = styled.h1`
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    padding: 0px 24px;
`

const StCardContext = styled.div`
    padding: 0px 24px;
`