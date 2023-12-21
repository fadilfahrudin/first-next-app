import { NextRequest, NextResponse } from "next/server";
import { DataTypes } from "sequelize";
import Product from "../../../../models/product";
import path from "path";
import { writeFile } from "fs/promises";
import sequelize from "../../../../config/db";
const models = Product(sequelize, DataTypes);

export async function GET(req: NextRequest) {
    try {
        const products = await models.findAll();
        return NextResponse.json({ status: 200, data: products })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, error: 'Internal Server Error' });
    }
}

export async function POST(req: NextRequest) {

    const formData = await req.formData();
    const name = formData.get('name');
    const price = formData.get('price');
    const img = formData.get('img') as File;
    const description = formData.get('description');

    if (img.name === '') {
        return NextResponse.json({ status: 405, msg: "No file recived" })
    }

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name.replaceAll(" ", "_");
    const imgUrl = `/images/${filename}`;
    try {
        await writeFile(
            path.join(process.cwd(), "public/images/" + filename),
            buffer
        );
        await models.create({
            name,
            price,
            imgUrl: imgUrl,
            img: filename,
            description
        })
        return NextResponse.json({ status: 200, msg: "Data created" })
    } catch (error) {
        return NextResponse.json({ status: 500, msg: error })
    }
}

