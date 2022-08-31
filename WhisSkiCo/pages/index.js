
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CourseComponent from '../components/courses'
import styles from '../styles/Home.module.css'

export default function Home({ courses }) {
  return (
    <>
      <div className="pointer-events-none relative">
        <iframe className=" w-full aspect-video " src="https://www.youtube.com/embed/zYjGmpWZpi8?&autoplay=1&loop=1&playlist=zYjGmpWZpi8&mute=1&controls=0&amp;start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="flex w-1/2 absolute bottom-16 bg-black ml-20 mr-20   items-center">
          <div className="flex flex-col p-10  ">
            <p className=" text-4xl" >Ski Camps Designed for you</p>
            <p className=" text-xl mt-2" >
              Three ski addicts, sharing their struggles, as they try to figure it out. Progress is the aim of the game, while not taking yourself too seriously.
            </p>
          </div>
        </div>
      </div>
      <div className="m-20 ">
        <div className="flex justify-center mt-20 hover:scale-105  ">
          <Link href="/courses">
            <a className="text-5xl " >Check out our upcoming camps</a>
          </Link>
        </div>
        <div className="carousel ">
          <div className="carousel-item">
          <CourseComponent courses={courses} />
          </div>
          {/* <div>
            First upcoming camp
          </div>
          <div>
            Second upcoming camp
          </div> */}
        </div>
        <div>
        <div className="flex justify-center mt-20 hover:scale-105 ">
          <Link href="/about">
            <a className="text-5xl">Get to know us</a>
          </Link>
        </div>
        <div className="flex justify-between align-center p-20">
          <div>
          Instagram
          </div>
          <div>
          Youtube
          </div>
        </div>
        <div>
          
        </div>
        </div>
      </div>
    </>

  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/courses')
  const courses = await res.json()

  return {
    props: {
      courses,
    },
  }
}