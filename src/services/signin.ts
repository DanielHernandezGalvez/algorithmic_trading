export const signinMock = async (email: string, password: string) => {
    if(email === "daniel@vuelostudios.com" && password === "12345") {
        return true
    } else {
        return false
    }
}