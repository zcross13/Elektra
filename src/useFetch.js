const axios = require('axios').default;
const { useEffect, useState } = require("react")


const useFetch = (url) => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchData = async ()  => {
            setLoading(true)
            try{
            const response = await axios.get('/teslas')
            console.log(response)
            setApiData(response.data)
        }catch(err){
            setError(err)
        }
        setLoading(false)
        }
        fetchData()
    }, [url])


// const reFetchData = async ()  => {
//     setLoading(true)
//     try{
//     const response = await fetch(url)
//     setApiData(response.data)
// }catch(err){
//     setError(err)
// }
// setLoading(false)
// }

return {apiData,loading,error}
}

module.exports= {useFetch}