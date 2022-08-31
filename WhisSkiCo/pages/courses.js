
export default function Courses({ courses }) {
  return (
    <div className="pt-20">
      <h1 className="m-20">Courses go here</h1>
      <div>
    {courses.map((course) => (
      course.name
    ))}
      </div>
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