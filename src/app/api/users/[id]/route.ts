
import { NextRequest, NextResponse } from 'next/server';
import User from '../../../../../models/user.js';
import { DataTypes } from 'sequelize';
import sequelize from "../../../../../config/db";
const models = User(sequelize, DataTypes)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const id = params.id
    const formData = await req.formData()
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')

    try {
        await models.update({
            firstName,
            lastName,
            email
        }, {
            where: {
                id: id
            }
        })
        return NextResponse.json({ status: 200, msg: "Data updated" })
    } catch (error) {
        return NextResponse.json({ status: 500, msg: error })
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const id = params.id
    try {
        await models.destroy({
            where: {
                id: id
            }
        })
        return NextResponse.json({ status: 200, msg: "Data deleted" })
    } catch (error) {
        return NextResponse.json({ status: 500, msg: error })
    }
}