import { NextRequest, NextResponse } from "next/server";
import Product from "../../../../../models/product";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import sequelize from "../../../../../config/db";
import { DataTypes } from "sequelize";
const models = Product(sequelize, DataTypes);

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const products = await models.findOne({
            where: {
                id: params.id
            }
        });
        return NextResponse.json({ status: 200, data: products })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, error: 'Internal Server Error' });
    }
}
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    // Set variabel
    const id = params.id;
    // // Get img axis from db where id = slug.id
    const { img, imgUrl } = await models.findOne({ where: { id: id } });

    // // get data from body
    const formData = await req.formData();
    const file = formData.get('img') as File;
    const name = formData.get('name');
    const price = formData.get('price');
    const description = formData.get('description');

    // 
    let updateImg = null;
    let updateImgUrl = null;
    try {
        if (file) {
            const filename = Date.now() + file.name.replaceAll(" ", "_");
            const buffer = Buffer.from(await file.arrayBuffer());
            updateImg = filename;
            updateImgUrl = `/images/${filename}`;
            await writeFile(
                path.join(process.cwd(), "public/images/" + filename),
                buffer
            );

            // delete old img
            fs.unlink(path.join("public/images", img), (err) => {
                if (err) {
                    console.error('Error deleting old file:', err);
                } else {
                    console.log('Old file deleted successfully');
                }
            })
        } else {
            updateImg = img;
            updateImgUrl = imgUrl;

        }
        await models.update({
            name,
            price,
            imgUrl: updateImgUrl,
            img: updateImg,
            description
        },
            {
                where: {
                    id: id
                }
            })
        return NextResponse.json({ status: 200, msg: "Data updated" })
    } catch (error) {
        return NextResponse.json({ status: 500, msg: error })
    }

}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    const { img } = await models.findOne({ where: { id: id } });
    try {
        await models.destroy({
            where: {
                id: id
            }
        })

        // delete img
        fs.unlink(path.join("public/images", img), (err) => {
            if (err) {
                console.error('Error deleting old file:', err);
            } else {
                console.log('Old file deleted successfully');
            }
        })
        return NextResponse.json({ status: 200, msg: "Deleted" })
    } catch (error) {
        return NextResponse.json({ status: 500, msg: error })
    }
}