import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'afro-jewels-currency'

/** Fixed conversion rate: 1 USD = GHS_RATE GHS */
export const GHS_RATE = 15.5

/** Supported currencies */
export const CURRENCIES = /** @type {const} */ (['USD', 'GHS'])

const CurrencyContext = createContext(null)

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return CURRENCIES.includes(stored) ? stored : 'USD'
    } catch {
      return 'USD'
    }
  })

  // Persist on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, currency)
    } catch {
      // localStorage unavailable — silently continue
    }
  }, [currency])

  const toggleCurrency = useCallback(() => {
    setCurrency((c) => (c === 'USD' ? 'GHS' : 'USD'))
  }, [])

  /**
   * formatPrice(usdValue) → e.g. "$148.00" or "GH₵ 2,294.00"
   *
   * usdValue should always be the raw USD number from products.json / cart state.
   * All price arithmetic stays in USD; conversion happens at display time only.
   */
  const formatPrice = useCallback(
    (usdValue) => {
      const amount = currency === 'GHS' ? usdValue * GHS_RATE : usdValue
      if (currency === 'GHS') {
        // Intl.NumberFormat with GHS locale produces "GH₵ X,XXX.XX"
        return new Intl.NumberFormat('en-GH', {
          style: 'currency',
          currency: 'GHS',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(amount)
      }
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    },
    [currency]
  )

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency must be used within a CurrencyProvider')
  return ctx
}
