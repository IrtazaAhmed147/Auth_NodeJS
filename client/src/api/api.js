export const signUp = async (data) => {
    try {
        const response = await fetch("http://localhost:5000/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        const res = await response.json()
        console.log(res);
        return res
    } catch (error) {
        console.log(error);

    }
} 
export const loginUser = async (data) => {
    try {
        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        const res = await response.json()
        console.log(res);
        return res
    } catch (error) {
        console.log(error);

    }
} 