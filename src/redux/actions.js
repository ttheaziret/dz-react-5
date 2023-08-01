import { types } from "./types"

function preloaderOn () {
    return {
        type: types.PRELOADER_ON
    }
}

function preloaderOff () {
    return {
        type: types.PRELOADER_OFF
    }
}

export function addUserAction (user) {
    return async function (dispatch) {

        dispatch(preloaderOn())

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options )
        
        if(response.status === 201) {
            dispatch(preloaderOff())
        }
        else if(response.status === 404) {
            dispatch(preloaderOff())
        }
    }
}

export function getUserAction () {
    return async function (dispatch) {

        dispatch(preloaderOn())

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
        
        if(response.status === 201) {
            dispatch(preloaderOff())
            return response
        }
        else if(response.status === 404) {
            dispatch(preloaderOff())
        }

        return response
    }
}



