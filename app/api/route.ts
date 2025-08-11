import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    return NextResponse.json({
        message: 'API is working',
        timestamp: new Date().toISOString()
    })
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        return NextResponse.json({
            message: 'Data received successfully',
            data: body,
            timestamp: new Date().toISOString()
        })
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid JSON data' },
            { status: 400 }
        )
    }
}
