import styled from "styled-components";
import { ToDoComplete, ToDoWorking } from '../components/todo';

const List = () => {
    return (
        <StContainerList>
            <StTitleList>Working.. 🔥</StTitleList>
            <ToDoWorking/>
            <StTitleList>Done..! 🎉</StTitleList>
            <ToDoComplete/>
        </StContainerList>
    )
}

export default List;

const StContainerList = styled.div`
padding: 0 24px;
`
const StTitleList = styled.h2`
display: block;
font-Size: 1.5em;
margin-Block-Start: 0.83em;
margin-Block-End: 0.83em;
margin-Inline-Start: 0px;
margin-Inline-End: 0px;
font-Weight: bold;
`