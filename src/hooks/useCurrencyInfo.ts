import { useCallback, useEffect, useState } from "react"

const useCurrencyInfo = (currency: string) => {

    // Type or paste here Your API KEY
    // const apiKey = process.env.API_KEY
    const apiKey = "e89fed6426abe6e90e49d709"

    const [data, setData] = useState<{ [key: string]: number }>({})
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = useCallback(async (signal?: AbortSignal) => {
        try {
            const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;

            const response = (signal === undefined) ? await fetch(url, { signal }) : await fetch(url)

            if (!response.ok)
                throw new Error("Failed to fetch exchange rate")
            const body = await response.json()
            setData(body["conversion_rates"])
            setError(undefined)
        } catch (err) {
            if (err instanceof Error)
                setError(err.message + ", check your internet connection")
            else setError("Something went wrong.")
            // else setError(err)
        } finally {
            setIsLoading(false)
        }
    }, [currency])

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetchData(signal);

        return () => controller.abort()

    }, [currency, fetchData])


    return { data, error, isLoading, fetchData }
}

export default useCurrencyInfo