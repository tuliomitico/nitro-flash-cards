'use client'
import * as RadixProgress from '@radix-ui/react-progress'
import { createContext, useContext } from 'react';

interface ProgressProps {
  children: React.ReactNode;
  max: number;
  now: number;
}

const ProgressContext = createContext({} as {
  max:number;
  now: number;
})

export function Progress({ children, max, now }: ProgressProps): JSX.Element {
  return (
  <div className="flex items-center gap-3">
      <ProgressContext.Provider value={{max,now}}>
        {children}
      </ProgressContext.Provider>
  </div>)
}

export function ProgressBar () {
  const { max, now } = useContext(ProgressContext)
  return (
    <RadixProgress.Root className="h-3 flex-1 bg-marine-800 rounded-md">
      <RadixProgress.Indicator
        className={`h-3 bg-marine-300 rounded-md transition-all`}
        style={{ width: `${Math.ceil((now / max) * 100)}%` }}
      />
    </RadixProgress.Root>
  )
}

export function ProgressIndicator () {
  const { max, now } = useContext(ProgressContext)
  return (
    <span className="text-sm font-mono font-bold">{now.toString().padStart(2, '0')}/{max}</span>
  )
}