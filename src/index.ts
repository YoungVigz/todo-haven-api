import makeApp from './app'

const port = process.env.PORT || 4000

makeApp().then(app => app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})).catch(e => console.log(e))

