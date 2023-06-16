// Add a class
export const addClass = async classData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(classData),
    })

    const data = await response.json()
    return data
}


// Get all class
export const getAllClass = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
    const data = await response.json()
    return data
}


// Get user classes
export const getUserClasses = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${email}`)
    const classes = await response.json()
    return classes
}


// save select class
export const saveClass = async selectClassInfo=> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/saveClass`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(selectClassInfo),
    })

    const data = await response.json()
    return data
}