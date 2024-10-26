"use client"

import { useState } from "react"
import { CurrencyInputBox } from "@/components"
import useCurrencyInfo from "@/hooks/useCurrencyInfo"

export default function Home() {

  const [firstAmount, setFirstAmount] = useState<number>(0)
  const [secondAmount, setSecondAmount] = useState<number>(0)
  const [fromCurrency, setFromCurrency] = useState<string>("USD")
  const [toCurrency, setToCurrency] = useState<string>("PKR")

  const { data, error, isLoading, fetchData } = useCurrencyInfo(fromCurrency)

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setFirstAmount(secondAmount)
    setSecondAmount(firstAmount)
  }

  const convert = () => setSecondAmount(firstAmount * data[toCurrency])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(error) {
      fetchData()
    }
    convert()
  }

  return (

    <div className="flex flex-wrap items-center justify-center w-full h-screen bg-slate-600/70">

      <div className="w-full max-w-md border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/50">

        <form onSubmit={handleSubmit}>

          <CurrencyInputBox
            className="mb-1"
            label="From"
            amount={firstAmount}
            selectCurrency={fromCurrency}
            onCurrencyChange={(currency) => {
              setFromCurrency(currency)
              setSecondAmount(firstAmount * data[toCurrency])
              // convert()
            }}
            onAmountChange={(amount) => {
              setFirstAmount(amount)
              setSecondAmount(amount * data[toCurrency])
            }}
          />

          <div className="relative w-full h-0.5">
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
              Swap
            </button>
          </div>

          <CurrencyInputBox
            className="mt-1 mb-4"
            label="To"
            amount={secondAmount}
            selectCurrency={toCurrency}
            onCurrencyChange={(currency) => {
              setToCurrency(currency)
              setFirstAmount(secondAmount / data[toCurrency])
              // convert()
            }}
            onAmountChange={(amount) => {
              setSecondAmount(amount)
              setFirstAmount(amount / data[toCurrency])
            }}
          // amountDisabled
          />

          <p className={`text-black mb-3 ${!isLoading ? "hidden" : ""}`}>Loading...</p>

          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {fromCurrency} to {toCurrency}
          </button>

          <p className={`text-red-600 text-center mt-4 ${!error ? "hidden" : ""}`}>{error}</p>

        </form>
      </div>
    </div>
  );
}
