export const handler = async () => {
    console.log("test it ran")

    const data = { name: "hello"}

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}