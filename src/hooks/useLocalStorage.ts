"use client"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const isMounted = useRef(false)
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    const jsonState = localStorage.getItem(key)

    if (jsonState) {
      setValue(JSON.parse(jsonState))
    }
    return () => {
      isMounted.current = false
    }
  }, [key])

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      isMounted.current = true
    }
  }, [key, value])

  return [value, setValue]
}
