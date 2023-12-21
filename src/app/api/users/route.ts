
import { NextRequest, NextResponse } from 'next/server';
import User from '../../../../models/user.js';
import sequelize from "../../../../config/db";
import { DataTypes } from 'sequelize';
const models = User(sequelize, DataTypes)

export async function GET(req: NextRequest) {
    try {
        const users = await models.findAll();
        return NextResponse.json({ status: 200, data: users })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, error: 'Internal Server Error' });
    }
}

export async function POST(req: Request) {
    // Req Body
    // const { firstName, lastName, email } = await req.json();

    // Req from formdata
    const formData = await req.formData()
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    try {
        await models.create({
            firstName,
            lastName,
            email
        })
        return NextResponse.json({ status: 200, msg: "Data created" })
    } catch (error) {
        return NextResponse.json({ status: 500, msg: error })
    }
}
