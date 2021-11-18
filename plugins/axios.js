export default function({$axios, redirect}) {
    $axios.onResponse(res => {
        return res.data
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code == 404) {
            redirect()
        }
    })
}