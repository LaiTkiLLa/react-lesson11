import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const InitialState = {
    loading: false,
    error: '',
    found: false
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: InitialState,
    reducers: {
        setFind: (state,action: PayloadAction<boolean>) => {
            return {...state, found: action.payload}
        },
        setLoading: (state,action: PayloadAction<boolean>) => {
            return {...state, loading: action.payload}
        },
        setError: (state,action: PayloadAction<string>) => {
            return {...state, error: action.payload}
        }
    }
})

export const {setFind, setLoading, setError} = searchSlice.actions
export default searchSlice.reducer