import { json, type RequestHandler } from "@sveltejs/kit";

type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export const GET: RequestHandler = async ({ fetch, url }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const skip = url.searchParams.get('skip') ?? 0
    const limit = url.searchParams.get('limit') ?? 10
    const data: Todo[] = (await res.json() ?? []).slice(skip, limit)
    return json(data, { status: 200 })
}

export const POST: RequestHandler = async ({ fetch }) => {
    return json({ message: 'POST request' })
}