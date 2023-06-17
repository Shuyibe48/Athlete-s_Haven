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
export const saveClass = async selectClassInfo => {
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


// Get all selected class
export const getAllSelectedClass = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/saveClass/${email}`)
    const data = await response.json()
    return data
}


// Delete a select class
export const deleteSelectClass = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/saveClass/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const result = await response.json()
    return result
}


// approved class
export const approvedClass = id => {
    const currentUser = {
        status: 'approved',
    }

    return fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json()).then(data => console.log(data))
}


// approved class
export const denyClass = id => {
    const currentUser = {
        status: 'deny',
    }

    return fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json()).then(data => console.log(data))
}


// send feedback for class
export const feedbackClass = (id, feedback) => {
    const currentUser = {
        feedback: feedback,
    }

    return fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json()).then(data => console.log(data))
}

