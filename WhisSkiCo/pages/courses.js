import CourseComponent from "../components/courses"

export default function Courses({ courses }) {
  return (
    <div className="pt-20">
      <p className="m-20 text-3xl">See below for upcoming courses</p>
      <CourseComponent courses={courses} />
    </div>
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