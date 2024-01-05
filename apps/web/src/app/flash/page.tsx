'use client'

import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'

import { Progress, ProgressBar, ProgressIndicator } from "@repo/ui"

const FLASH_CARDS_TOTAL = 12

export default function Flash() {
    const [flashCardsCount, setFlashCardsCount] = useState(0)
    const [shouldShowAnswer, setShouldShowAnswer] = useState(false)

    return (
        <div className="bg-gradient-to-t from-marine-600 to-marine-500 h-screen text-mirage-50 flex flex-col md:items-center">
            <div className="flex flex-1 flex-col items-center self-stretch py-20">
                <div className="space-y-4">
                    <span className="text-xl leading-heading font-bold">
                        Fundamentos do JavaScript
                    </span>
                    <Progress max={FLASH_CARDS_TOTAL} now={flashCardsCount}>
                        <ProgressBar />
                        <ProgressIndicator />
                    </Progress>
                </div>
                <div className="relative mt-20 w-full max-w-[420px] min-h-[416px]">
                    <motion.div 
                        className="rounded-lg inset-0 relative bg-mirage-50 h-full w-full px-5 py-6 z-20" 
                        animate={shouldShowAnswer ? { rotateY: 180 } : {}} 
                        transition={{ duration: 0.4}}
                    />
                    <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full text-center">
                        <AnimatePresence>
                            {shouldShowAnswer && (
                                <motion.p
                                    key='card-result'
                                    className="text-smoke-950 leading-base text-center flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1,delay: 0.5}}
                                >
                                    .map
                                </motion.p>)}
                            {!shouldShowAnswer && (
                                <motion.p
                                    key={'card-question'}
                                    className="text-smoke-950 leading-base text-center flex items-center justify-center"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}

                                >
                                    Método utilizado para percorrer um array e criar um novo array a
                                    partir do original com possíveis modificações.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="z-10 rounded-lg bg-mirage-50/60 mx-6 absolute h-20 left-4 right-4 -bottom-4" >
                        asd
                    </div>
                </div>
            </div>
            <button
                onClick={() => {
                    setShouldShowAnswer(true)
                    setFlashCardsCount(state => state + 1)
                }}
                className="bg-mirage-50 text-marine-500 py-8 w-full font-bold uppercase hover:bg-mirage-50/90 md:w-[320px] md:mb-16 md:rounded-full md:py-6"
            >
                Revelar resposta
            </button>
        </div>
    )
}