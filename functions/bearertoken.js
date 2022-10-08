export const handler = async (event, context) => {
  const bearerToken = [
    { test: "dummy data", anothertest: "naming is hard" },
    { yellow: "yellowww", blue: "blueeee" },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(bearerToken),
    };
  }

  return{
    statusCode: 401,
    body: JSON.stringify(
        {success: false,
        message: "you must be logged in to view"
    })
  }
};
