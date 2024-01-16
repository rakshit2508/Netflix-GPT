
export const checkValidData = (email , password) => {

    const isEmailValid =  /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password id not valid";

    return null; // if everything is ok return null
}