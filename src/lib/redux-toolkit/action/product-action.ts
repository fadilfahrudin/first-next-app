import axios from "axios"

// export const updateProduct = (id: number,) => async () => {
//     try {
//         await axios.delete(`http://localhost:3000/api/products/${id}`)
//         window.location.reload()
//     } catch (error) {
//         console.log(error)
//     }
// }
export const deletProduct = (id: string) => async () => {
    try {
        await axios.delete(`http://localhost:3000/api/products/${id}`)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}