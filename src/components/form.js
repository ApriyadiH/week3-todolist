import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {

    // Deklarasi keadaan awal variabel
    const [title, setTitle] = useState("");
    const [context,setContext] = useState("");
    const dispatch = useDispatch();

     // Event handler ketika menekan tombol "Add to od List"
     const onClickHandlerAdd = (event) => {
        if (title.trim() === ("")){
            alert("Please write a title");
            event.preventDefault();
        } else if (context.trim() === ("")){
            alert("Please write a context");
            event.preventDefault();
        } else {
            event.preventDefault() 
            setTitle("") 
            setContext("") 
            dispatch(
                addTodo({
                  title,
                  context
                }));
        }
     };

    // Event handler saat ada perubahan di input field title
    const onChangeHandlerTitle = (event) => {
        const isi_handler_title = event.target.value;
        setTitle(isi_handler_title);
    }

    // Event handler saat ada perubahan di input field context
    const onChangeHandlerContext = (event) => {
        const isi_handler_context = event.target.value;
        setContext(isi_handler_context);
    }


    return (
        <StContainerForm>
            <StInputGroup>
                <StFormLabel>Title</StFormLabel>
                <StAddInput value={title} onChange={onChangeHandlerTitle}></StAddInput>
                <StFormLabel>Context</StFormLabel>
                <StAddInput value={context} onChange={onChangeHandlerContext}></StAddInput>
            </StInputGroup>
            <StAddButton onClick={onClickHandlerAdd}>Add to-do List</StAddButton>
        </StContainerForm>
    )
}

export default AddForm

const StContainerForm = styled.form`
background-Color:  #eee ;
border-Radius:  12px ;
justify-Content:  space-between ;
margin:  0 auto ;
padding:  30px ;
display: flex ;
align-Items: center ;
`

const StInputGroup= styled.div`
align-Items:  center ;
display:  flex ;
gap:  20px ;
`

const StFormLabel= styled.label`
font-Size:  16px ;
font-Weight:  700 ; 
`

const StAddInput = styled.input`
border:  none ;
border-Radius:  12px ;
height:  40px ;
padding:  0 12px ;
width:  240px ;
`

const StAddButton = styled.button`
background-Color:  teal ;
border:  none ;
border-Radius:  10px ;
color:  #fff ;
font-Weight:  700 ;
height:  40px ;
width:  140px ;
`