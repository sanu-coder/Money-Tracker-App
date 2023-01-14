import { createContext, useReducer } from "react"

const initialState = {
    budget : 2000,

    expenses : [
        {id : 12, name : 'shopping', cost : '40'},
        {id : 12, name : 'shopping', cost : '40'},
        {id : 13, name : 'shopping', cost : '40'},
        {id : 14, name : 'shopping', cost : '40'},
        {id : 15, name : 'shopping', cost : '40'},

    ]
}

export const AppContext = createContext();