"use client"

import { useGetProductByIdQuery } from "@/lib/redux-toolkit/reducer/products-slice"
import Image from "next/image"
import axios from "axios"
import { useEffect, useState } from "react"

export function CrudPopup({ methode, popUp, id }: Readonly<{ methode: string, popUp: any, id: any }>) {

    const { data, isSuccess } = useGetProductByIdQuery(id)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('https://dummyimage.com/6:4x200')
    const [imgSave, setImgSave] = useState('')

    const submit = async (e: any) => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('price', price.toString())
        formData.append('description', description)
        formData.append('img', imgSave)

        if (formData) {
            try {
                await axios(`http://localhost:3000/api/products${id == null ? '' : '/' + id}`, {
                    method: methode,
                    data: formData
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    const onImgChange = (e: any) => {
        if (e.target.files) {
            let getImg = e.target.files[0]
            setImg(URL.createObjectURL(getImg))
            setImgSave(getImg)
        }
    }

    useEffect(() => {
        if (isSuccess && methode === 'PUT') {
            setName(data.data.name)
            setPrice(data.data.price)
            setDescription(data.data.description)
            setImg(data.data.imgUrl)
        }
    }, [data, isSuccess, methode])

    return (
        <div className="w-1/2 h-[90%] py-5 blur-0 bg-opacity-90 rounded-lg bg-dark-25 absolute top-0 left-[50%] translate-x-[-50%] block">
            <h1 className="text-3xl text-dark-100 text-center">{methode} Data</h1>
            <form action="" onSubmit={submit} className="flex flex-col h-full justify-center items-center px-10 py-5  gap-3">
                <input className="w-full py-2 bg-dark-50 text-white placeholder:text-white px-3 border-2 border-dark-100  focus:outline-dark-75" type="text" name="name" id="name" value={name} placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
                <input className="w-full py-2 bg-dark-50 text-white placeholder:text-white px-3 border-2 border-dark-100  focus:outline-dark-75" type="number" name="price" id="price" value={price} placeholder="Product Price" onChange={(e) => setPrice(parseInt(e.target.value))} />
                <textarea rows={3} placeholder="Product Description" className="w-full py-2 bg-dark-50 text-white placeholder:text-white px-3 border-2 border-dark-100  focus:outline-dark-75" id="description" onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                <input className="w-full py-2 border-dark-100  focus:outline-dark-75" type="file" name="image" id="image" onChange={onImgChange} />
                <div className="overflow-hidden w-[200px] h-[100px] self-start">
                    <Image src={img} alt="nama img" width={200} height={100} className="object-cover aspect-auto" />
                </div>
                <div className="flex gap-4">
                    <button type="submit" className="border-2 border-dark-100 px-6 py-2">Submit</button>
                    <button type="button" className="border-2 border-dark-100 px-6 py-2" onClick={() => popUp()}>Cencel</button>
                </div>
            </form>
        </div>
    )
} 