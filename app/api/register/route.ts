import { NextResponse } from "next/server"
import { connectMongo } from "@/lib/mongodb"
import Registration from "@/models/Registration"


export async function POST(req: Request) {
  try {
    await connectMongo()
    const body = await req.json()

    const registration = await Registration.create({
      fullName: body.fullName,
      email: body.email,
      school: body.school,
      role: body.role,
      hasTeam: body.hasTeam,
    })

    return NextResponse.json(registration, { status: 201 })
  } catch (error: any) {
    console.log(error)

    // Error de duplicado (índice único en email)
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "Este correo ya está registrado" },
        { status: 400 }
      )
    }

    // Cualquier otro error
    return NextResponse.json(
      { message: "Error al guardar el registro" },
      { status: 500 }
    )
  }
}