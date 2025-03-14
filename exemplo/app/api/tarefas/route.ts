import { NextResponse } from "next/server"; //extrai o objeto NextResponse da biblioteca next/server

// Função assíncrona que será usada para lidar com requisições HTTP GET
export async function GET(){ 
    return NextResponse.json({mensagem: "Olá Mundo!!!"}) // Retorna uma resposta JSON com a mensagem "Olá Mundo!!!"
}