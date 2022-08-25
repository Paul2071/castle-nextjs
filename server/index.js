//  import express from "express"
// // import next from "next"

// const app = express()

// app.listen(3000, () => {
//     console.log("app listening on port 3000")
// })


// app.get("/castledb", (req, res) => {
//     res.json({
//         message: "success"
//     })
// })


// const port = process.env.PORT || 3000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   const server = express()

//   server.all('*', (req, res) => {
//     return handle(req, res)
//   })

//   server.listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`)
//   });
//  "express": "nodemon ../nextjs-first/pages/_app",
// });