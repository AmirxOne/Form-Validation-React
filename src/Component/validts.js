export const validts = (data, type) => {
    const error = {};


    if (!data.phone) {
        error.phone = "Enter your mobile Number"
    } else if (!/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/.test(data.phone)) {
        error.phone = "The entered mobile number is not valid"
    } else {
        delete error.phone
    }

    if (!data.password) {
        error.password = "Enter your Password"
    } else if (Object.keys(data.password).length < 8) {
        error.password = "The min password is 8 characters"
    } else if (Object.keys(data.password).length >= 9) {
        error.password = "The max password is 8 characters"
    } else {
        delete error.password
    }


    if (type === "signUp") {

        if (!data.firstName.trim()) {
            error.firstName = "Your first name is not valid"
        } else {
            delete error.firstName
        }

        if (!data.lastName.trim()) {
            error.lastName = "Your last name is not valid"
        } else {
            delete error.lastName
        }

        if (!data.email) {
            error.email = "Enter your Email"
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            error.email = "Email address is invalid"
        } else {
            delete error.email
        }

        if (!data.pConfirm) {
            error.pConfirm = "Confirm the password"
        } else if (data.pConfirm !== data.password) {
            error.pConfirm = "Password do not mach"
        } else {
            delete error.pConfirm
        }

        if (data.isAccept) {
            delete error.isAccept
        } else {
            error.isAccept = "You did not accept"
        }

    }

    return error;
}