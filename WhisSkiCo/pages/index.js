
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div class="pointer-events-none relative">
        <iframe class=" w-full aspect-video " src="https://www.youtube.com/embed/zYjGmpWZpi8?&autoplay=1&loop=1&playlist=zYjGmpWZpi8&mute=1&controls=0&amp;start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="flex w-1/2 absolute bottom-16 bg-black ml-20 mr-20   items-center">
          <div class="flex flex-col p-10  ">
            <p class=" text-4xl" >Ski Camps Designed for you</p>
            <p class=" text-xl mt-2" >
              Three ski addicts, sharing their struggles, as they try to figure it out. Progress is the aim of the game, while not taking yourself too seriously.
            </p>
          </div>
        </div>
      </div>
      <div class="m-20 ">
        <div class="flex justify-center mt-20 hover:scale-105  ">
          <Link href="/courses">
            <a class="text-5xl " >Check out our upcoming camps</a>
          </Link>
        </div>
        <div class="flex justify-between m-20  ">
          <div>
            First upcoming camp
          </div>
          <div>
            Second upcoming camp
          </div>
        </div>
        <div class="flex justify-center mt-20 hover:scale-105 ">
          <Link href="/about">
            <a class="text-5xl">Get to know us</a>
          </Link>
        </div>
      </div>
    </>

  )
}