import { NextResponse, NextRequest } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

// type File = FormDataEntryValue | string | null 

export async function POST(req: Request, res: Response) {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    // const { image } = req.files as {image: Express.Mul};
    if (!file) {
        return NextResponse.json({ status: 405, msg: "No file recived" })
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");
    try {
        await writeFile(
            path.join(process.cwd(), "public/images/" + filename),
            buffer
        );
        return NextResponse.json({ status: 200, msg: "Upload success" })
    } catch (error) {
        console.log(error)
    }
}