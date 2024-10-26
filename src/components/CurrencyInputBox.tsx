import { useId } from "react";

const CurrencyInputBox = ({
    className = "",
    label,
    amount,
    selectCurrency,
    onAmountChange,
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false

}: {
    className?: string;
    label: string;
    amount: number;
    selectCurrency: string;
    onAmountChange: (amount: number) => void;
    onCurrencyChange: (currency: string) => void;
    amountDisabled?: boolean;
    currencyDisabled?: boolean
}) => {

    const amountInputID = useId();
    const selectCurrencyID = useId();

    const currencies = [
        { country: "Afghanistan", currency: "AFN" },
        { country: "Albania", currency: "ALL" },
        { country: "Armenia", currency: "AMD" },
        { country: "Netherlands Antilles", currency: "ANG" },
        { country: "Angola", currency: "AOA" },
        { country: "Argentina", currency: "ARS" },
        { country: "Australia", currency: "AUD" },
        { country: "Aruba", currency: "AWG" },
        { country: "Azerbaijan", currency: "AZN" },
        { country: "Bosnia and Herzegovina", currency: "BAM" },
        { country: "Barbados", currency: "BBD" },
        { country: "Bangladesh", currency: "BDT" },
        { country: "Bulgaria", currency: "BGN" },
        { country: "Bahrain", currency: "BHD" },
        { country: "Burundi", currency: "BIF" },
        { country: "Bermuda", currency: "BMD" },
        { country: "Brunei", currency: "BND" },
        { country: "Bolivia", currency: "BOB" },
        { country: "Brazil", currency: "BRL" },
        { country: "Bahamas", currency: "BSD" },
        { country: "Bhutan", currency: "BTN" },
        { country: "Botswana", currency: "BWP" },
        { country: "Belarus", currency: "BYN" },
        { country: "Belize", currency: "BZD" },
        { country: "Canada", currency: "CAD" },
        { country: "Congo, Democratic Republic of", currency: "CDF" },
        { country: "Switzerland", currency: "CHF" },
        { country: "Chile", currency: "CLP" },
        { country: "China", currency: "CNY" },
        { country: "Colombia", currency: "COP" },
        { country: "Costa Rica", currency: "CRC" },
        { country: "Cuba", currency: "CUP" },
        { country: "Cape Verde", currency: "CVE" },
        { country: "Czech Republic", currency: "CZK" },
        { country: "Djibouti", currency: "DJF" },
        { country: "Denmark", currency: "DKK" },
        { country: "Dominican Republic", currency: "DOP" },
        { country: "Algeria", currency: "DZD" },
        { country: "Egypt", currency: "EGP" },
        { country: "Eritrea", currency: "ERN" },
        { country: "Ethiopia", currency: "ETB" },
        { country: "Eurozone", currency: "EUR" },
        { country: "Fiji", currency: "FJD" },
        { country: "Falkland Islands", currency: "FKP" },
        { country: "Faroe Islands", currency: "FOK" },
        { country: "United Kingdom", currency: "GBP" },
        { country: "Georgia", currency: "GEL" },
        { country: "Guernsey", currency: "GGP" },
        { country: "Ghana", currency: "GHS" },
        { country: "Gibraltar", currency: "GIP" },
        { country: "Gambia", currency: "GMD" },
        { country: "Guinea", currency: "GNF" },
        { country: "Guatemala", currency: "GTQ" },
        { country: "Guyana", currency: "GYD" },
        { country: "Hong Kong", currency: "HKD" },
        { country: "Honduras", currency: "HNL" },
        { country: "Croatia", currency: "HRK" },
        { country: "Haiti", currency: "HTG" },
        { country: "Hungary", currency: "HUF" },
        { country: "Indonesia", currency: "IDR" },
        { country: "Israel", currency: "ILS" },
        { country: "Isle of Man", currency: "IMP" },
        { country: "India", currency: "INR" },
        { country: "Iraq", currency: "IQD" },
        { country: "Iran", currency: "IRR" },
        { country: "Iceland", currency: "ISK" },
        { country: "Jersey", currency: "JEP" },
        { country: "Jamaica", currency: "JMD" },
        { country: "Jordan", currency: "JOD" },
        { country: "Japan", currency: "JPY" },
        { country: "Kenya", currency: "KES" },
        { country: "Kyrgyzstan", currency: "KGS" },
        { country: "Cambodia", currency: "KHR" },
        { country: "Kiribati", currency: "KID" },
        { country: "Comoros", currency: "KMF" },
        { country: "South Korea", currency: "KRW" },
        { country: "Kuwait", currency: "KWD" },
        { country: "Cayman Islands", currency: "KYD" },
        { country: "Kazakhstan", currency: "KZT" },
        { country: "Laos", currency: "LAK" },
        { country: "Lebanon", currency: "LBP" },
        { country: "Sri Lanka", currency: "LKR" },
        { country: "Liberia", currency: "LRD" },
        { country: "Lesotho", currency: "LSL" },
        { country: "Libya", currency: "LYD" },
        { country: "Morocco", currency: "MAD" },
        { country: "Moldova", currency: "MDL" },
        { country: "Madagascar", currency: "MGA" },
        { country: "North Macedonia", currency: "MKD" },
        { country: "Myanmar", currency: "MMK" },
        { country: "Mongolia", currency: "MNT" },
        { country: "Macau", currency: "MOP" },
        { country: "Mauritania", currency: "MRU" },
        { country: "Mauritius", currency: "MUR" },
        { country: "Maldives", currency: "MVR" },
        { country: "Malawi", currency: "MWK" },
        { country: "Mexico", currency: "MXN" },
        { country: "Malaysia", currency: "MYR" },
        { country: "Mozambique", currency: "MZN" },
        { country: "Namibia", currency: "NAD" },
        { country: "Nigeria", currency: "NGN" },
        { country: "Nicaragua", currency: "NIO" },
        { country: "Norway", currency: "NOK" },
        { country: "Nepal", currency: "NPR" },
        { country: "New Zealand", currency: "NZD" },
        { country: "Oman", currency: "OMR" },
        { country: "Pakistan", currency: "PKR" },
        { country: "Panama", currency: "PAB" },
        { country: "Peru", currency: "PEN" },
        { country: "Papua New Guinea", currency: "PGK" },
        { country: "Philippines", currency: "PHP" },
        { country: "Poland", currency: "PLN" },
        { country: "Paraguay", currency: "PYG" },
        { country: "Qatar", currency: "QAR" },
        { country: "Romania", currency: "RON" },
        { country: "Serbia", currency: "RSD" },
        { country: "Russia", currency: "RUB" },
        { country: "Rwanda", currency: "RWF" },
        { country: "Saudi Arabia", currency: "SAR" },
        { country: "Solomon Islands", currency: "SBD" },
        { country: "Seychelles", currency: "SCR" },
        { country: "Sudan", currency: "SDG" },
        { country: "Sweden", currency: "SEK" },
        { country: "Singapore", currency: "SGD" },
        { country: "Saint Helena", currency: "SHP" },
        { country: "Sierra Leone", currency: "SLE" },
        { country: "Sierra Leone", currency: "SLL" },
        { country: "Somalia", currency: "SOS" },
        { country: "Suriname", currency: "SRD" },
        { country: "South Sudan", currency: "SSP" },
        { country: "Sao Tome and Principe", currency: "STN" },
        { country: "Syria", currency: "SYP" },
        { country: "Eswatini", currency: "SZL" },
        { country: "Thailand", currency: "THB" },
        { country: "Tajikistan", currency: "TJS" },
        { country: "Turkmenistan", currency: "TMT" },
        { country: "Tunisia", currency: "TND" },
        { country: "Tonga", currency: "TOP" },
        { country: "Turkey", currency: "TRY" },
        { country: "Trinidad and Tobago", currency: "TTD" },
        { country: "Tuvalu", currency: "TVD" },
        { country: "Taiwan", currency: "TWD" },
        { country: "Tanzania", currency: "TZS" },
        { country: "Ukraine", currency: "UAH" },
        { country: "Uganda", currency: "UGX" },
        { country: "United Arab Emirates", currency: "AED" },
        { country: "United States", currency: "USD" },
        { country: "Uruguay", currency: "UYU" },
        { country: "Uzbekistan", currency: "UZS" },
        { country: "Venezuela", currency: "VES" },
        { country: "Vietnam", currency: "VND" },
        { country: "Vanuatu", currency: "VUV" },
        { country: "Samoa", currency: "WST" },
        { country: "Central African Republic", currency: "XAF" },
        { country: "East Caribbean", currency: "XCD" },
        { country: "International Monetary Fund", currency: "XDR" },
        { country: "West African", currency: "XOF" },
        { country: "CFP Franc", currency: "XPF" },
        { country: "Yemen", currency: "YER" },
        { country: "South Africa", currency: "ZAR" },
        { country: "Zambia", currency: "ZMW" },
        { country: "Zimbabwe", currency: "ZWL" },
    ];

    return (
        <div className={`${className} gap-2 w-full bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label htmlFor={amountInputID} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputID}
                    type="number"
                    placeholder="Enter amount"
                    disabled={amountDisabled}
                    // value={amount===0 ? amountDisabled ? "0" : "" : amount}
                    value={amount===0 ? "" : Math.round(amount * 1000) / 1000}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5 text-black/80" />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right text-black/60">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    id={selectCurrencyID}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                    className="rounded-lg p-1 bg-gray-100 cursor-pointer text-center">
                    {/* <option value={undefined}>--- Select Currency ---</option> */}
                    {currencies.map(({ country, currency }) =>
                        <option key={currency}
                            value={currency}>
                            {`${country} (${currency})`}
                        </option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default CurrencyInputBox