export default (function() {
    if (!window.location.pathname.includes("index.html")) return // guarde clause
    const json = {
        "name": "Lea",
        "age": 30,
        "hair_color": "sort of blonde"
    }

    localStorage.setItem("fnyf", JSON.stringify(json))

    console.log(JSON.parse(localStorage.getItem("fnyf")).age)
})()