import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getID, toggleTodo} from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ToDoComplete = () => {
    
    // Ambil variabel
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onClickHandlerDelete(id){
        let sementara = window.confirm('Are you sure ?'); 
        if (sementara === true) {
            dispatch(
                deleteTodo({
                    id
                }));
        } else {}
    }

    function onClickHandlerCancel(id){
        dispatch(
            toggleTodo({
                id
            }));
    }   

    function onClickHandlerId(id){
        navigate(`/${id}`)
        dispatch(
            getID({
                id
            }));
    }   
    
    return (
        <StListWrapper>
            {todos.map((todo) => {
                if (todo.is_done === true){
                    return(
                        <StContainerToDo key={todo.td_id}>
                            <div>
                                <StIdButton onClick={() =>onClickHandlerId(todo.td_id)}> More Details </StIdButton>
                                <StTitleToDo>{todo.title}</StTitleToDo>
                                <div>{todo.context}</div>
                            </div>
                            <StButtonSet>
                                <StDeleteButton onClick={() =>onClickHandlerDelete(todo.td_id)} > Delete </StDeleteButton>
                                <StCompleteButton onClick={() => onClickHandlerCancel(todo.td_id)} > Cancel </StCompleteButton>
                            </StButtonSet>
                        </StContainerToDo>
                    )  
                } return null; 
            },
            )
            }
        </StListWrapper>
    )
}

const ToDoWorking = () => {

    // Ambil variabel
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onClickHandlerDelete(id){
        let sementara = window.confirm('Are you sure ?'); 
        if (sementara === true) {
            dispatch(
                deleteTodo({
                    id
                }));
        } else {}
    }

    function onClickHandlerComplete(id){
        dispatch(
            toggleTodo({
                id
            }));
    }   

    function onClickHandlerId(id){
        navigate(`/${id}`)
        dispatch(
            getID({
                id
            }));
    }   
    
    return (
        <StListWrapper>
            {todos.map((todo) => {
                if (todo.is_done === false){
                    return(
                        <StContainerToDo key={todo.td_id}>
                            <div>
                                <StIdButton onClick={() =>onClickHandlerId(todo.td_id)}> More Details </StIdButton>
                                <StTitleToDo>{todo.title}</StTitleToDo>
                                <div>{todo.context}</div>
                            </div>
                            <StButtonSet>
                                <StDeleteButton onClick={() =>onClickHandlerDelete(todo.td_id)} > Delete </StDeleteButton>
                                <StCompleteButton onClick={() => onClickHandlerComplete(todo.td_id)} > Done </StCompleteButton>
                            </StButtonSet>
                        </StContainerToDo>
                    )  
                } return null; 
            },
            )
            }
        </StListWrapper>
    )
}

export {ToDoComplete, ToDoWorking}

const StListWrapper = styled.div`
        display:flex;
        flex-Wrap:  wrap  ;
        gap:  12px  ;
    `

const StContainerToDo = styled.div`
    border:  4px solid seagreen ;
    border-Radius:  12px  ;
    padding:  12px 24px 24px  ;
    width:  270px ;
`

const StTitleToDo = styled.h2`
    display:  block  ;
    overflow-wrap: anywhere;
    font-Size:  1.5em  ;
    margin-Block-Start:  0.83em  ;
    margin-Block-End:  0.83em  ;
    margin-Inline-Start:  0px  ;
    margin-Inline-End:  0px  ;
    font-Weight:  bold ;
`

const StButtonSet = styled.div`
    display:  flex  ;
    gap:  10px  ;
    margin-Top:  24px  ;      
`

const StDeleteButton = styled.button`
    background-Color:  #fff  ;
    border:  2px solid red  ;
    border-Radius:  8px  ;
    cursor:  pointer  ;
    height:  40px  ;
    width:  50% ;
`

const StCompleteButton = styled.button`
    background-Color:  #fff  ;
    border:  2px solid green  ;
    border-Radius:  8px  ;
    cursor:  pointer  ;
    height:  40px  ;
    width:  50% ;
`

const StIdButton = styled.button`
    border: 0px;
    height: 40px;
    background-color: rgb(255, 255, 255);
    padding : 0px;
    cursor: pointer;
`