"use client"
import { CrudPopup } from "@/components/crud-pupup";
import { useState } from "react";
import { useGetProductsQuery, useGetProductByIdQuery } from "../../../lib/redux-toolkit/reducer/products-slice"
import { useAppDispatch } from "../../../lib/redux-toolkit/hooks"
import { deletProduct } from "../../../lib/redux-toolkit/action/product-action"
export default function Dashboard() {
    const dispatch = useAppDispatch()

    const [popUp, setPopUp] = useState(false)
    const { data, isSuccess } = useGetProductsQuery({})
    const [method, setMethod] = useState('')
    const [id, setId] = useState(null)


    const BtnAction = (method: string, id: any) => {
        if (method === 'POST') {
            setMethod('POST')
        } else if (method === 'PUT') {
            setMethod('PUT')
            setId(id)
        } else if (method === 'DELETE') {
            return dispatch(deletProduct(id))
        }
        setPopUp(true)
    }

    return (
        <main className="w-screen min-h-screen p-10 relative">
            <div className="m-auto block w-1/2">
                <button type="button" className="bg-dark-25 text-dark-100 p-3 mb-2" onClick={() => BtnAction("POST", 0)}><i className="fi fi-sr-apps-add"></i> Add Product</button>
                <table className="table-auto w-[100%] text-center">
                    <thead className="bg-dark-25 uppercase">
                        <tr>
                            <th scope="col" className="border border-slate-600 px-6 py-3">id</th>
                            <th scope="col" className="border border-slate-600 px-6 py-3">name</th>
                            <th scope="col" className="border border-slate-600 px-6 py-3">price</th>
                            <th scope="col" className="border border-slate-600 px-6 py-3">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isSuccess && data.data.map((product: any) => (
                            <tr key={product.id}>
                                <td scope="row" className="border border-slate-600 text-white px-6 py-4">{product.id}</td>
                                <td className="border border-slate-600 text-white px-6 py-4">{product.name}</td>
                                <td className="border border-slate-600 text-white px-6 py-4">{product.price}</td>
                                <td className="border border-slate-600 text-white px-2 py-4 flex gap-4 justify-center">
                                    <button type="button" className="btn bg-dark-25 px-2 py-1 " onClick={() => BtnAction("PUT", product.id)}><i className="fi fi-sr-pencil text-dark-100"></i></button>
                                    <button type="button" className="btn bg-dark-25 px-2 py-1 " onClick={() => BtnAction("DELETE", product.id)}><i className="fi fi-ss-trash text-dark-100"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {popUp && <CrudPopup id={id} methode={method} popUp={() => setPopUp(false)} />}
        </main>
    )
}