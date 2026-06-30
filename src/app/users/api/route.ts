export const GET = async (req: Request, res: Response) => {
    console.log("GET request route handler");

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())

    console.log(req);
    console.log(res);

    return Response.json(users);
}

export const POST = () => {
    console.log("POST request route handler");
    return Response.json({message: "Request route handler POST"});
}