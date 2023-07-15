
type StateType = {
    age: number
    childrenCount: number
    name: string
}

export const initialState: StateType = {
    age: 1,
    childrenCount: 2,
    name: 'Dimych'
}

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state
export const incubatorReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            return {...state, age: state.age + 1}
        case 'INCREMENT-CHILDREN-COUNT':
            return {...state, childrenCount: state.childrenCount + 1}
        default:
            return state
    }
}
export type ActionType = ReturnType<typeof IncrementAgeAC> | ReturnType<typeof IncrementChildrenCountAC>

export const IncrementAgeAC = () => {
    return {
        type: 'INCREMENT-AGE'
    } as const
}
export const IncrementChildrenCountAC = () => {
    return {
        type: 'INCREMENT-CHILDREN-COUNT'
    } as const
}