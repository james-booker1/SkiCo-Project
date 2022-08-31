

export default function CourseComponent({ courses }) {
  return (
    <div className="m-20 flex flex-col">
      {courses.map((course) => (
        <div className="flex bg-white text-black flex-col justify-between items-center p-10 m-10">
          <p >{course.name}</p>
          <p>{course.description}</p>
          <p>${course.price}</p>
        </div>

      ))}
    </div>
  )
}

