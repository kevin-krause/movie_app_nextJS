import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MovieInfo } from '@/src/components/MovieInfo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
        >
            <h1 className="mb-3 p-1 border-b-[1px] border-zinc-400" id="title">
                Movie App
            </h1>
            <div id="movie">
                <MovieInfo />
            </div>
        </main>
    )
}
