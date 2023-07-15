import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ActionType, IncrementAgeAC, IncrementChildrenCountAC} from '../store/reducers/incubatorReducer';
import {AppRootStateType} from "../store/store";

export const Counter = () => {
    const age = useSelector<AppRootStateType, number>(state => state.students.age);
    const children = useSelector<AppRootStateType, number>(state => state.students.childrenCount);
    const dispatch = useDispatch();

    const addAgeHandler = () => {
        dispatch( IncrementAgeAC() )
    }
    const addChildrenHandler = () => {
        dispatch( IncrementChildrenCountAC() )
    }
    return (
        <div>
            <button onClick={ addAgeHandler }>{age}</button>
            <button onClick={ addChildrenHandler }>{children}</button>
        </div>
    );
};
