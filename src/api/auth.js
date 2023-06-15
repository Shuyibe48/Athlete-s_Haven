// save a user to database
export const saveUser = user => {
    const currentUser = {
        email: user.email,
        role: 'student',
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
export const makeInstructor = email => {
    const currentUser = {
        role: 'instructor',
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}


// make a admin
export const makeAdmin = email => {
    const currentUser = {
        role: 'admin',
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}