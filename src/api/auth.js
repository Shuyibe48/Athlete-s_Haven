// save a user to database as a student
export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        picture: user.photoURL,
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

// make a instructor
export const makeInstructor = (email, isIns) => {
    const currentUser = {
        role: 'instructor',
        isIns: isIns
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json()).then(data => console.log(data))
}


// make a admin
export const makeAdmin = (email, isAdm) => {
    const currentUser = {
        role: 'admin',
        isAdm: isAdm
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}


// Get user
export const getUser = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`)
    const user = await response.json()
    return user
}

// Get a single user
export const getASingleUser = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
    const user = await response.json()
    return user
}