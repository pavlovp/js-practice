const getData = () => {
    return new Promise(function (resolve, reject) {
        let savedItems = window.localStorage.getItem('entries');
        let isError = Math.floor(Math.random() * 10 > 7)

        if (isError) {
            var er = new Error("RANDOM ERROR")
            reject(er)
        }
        else {
            var t = setTimeout(() => {
                const data = JSON.parse(savedItems)
                resolve(data)
            }, 1500)
        }
    })
}

export default getData