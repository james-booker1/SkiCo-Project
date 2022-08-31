export default function Coaches({ coaches }) {
  return (
    <div className="pt-20">
      <div className="m-20">
        <p className="text-3xl">Meet our amazing WhisSkiCo team</p>
      </div>
      <div className="m-20">
        {coaches.map((coach) => (
          <div className="flex justify-between items-center m-10">
            <p className="flex justify-center w-1/3 text-3xl">{coach.firstname} {coach.lastname}</p>
            <p className="flex justify-center w-1/3 text-xl">{coach.bio}</p>
            <div className="flex justify-center w-1/3 text-xl">
              photo box
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/coaches')
  const coaches = await res.json()

  return {
    props: {
      coaches,
    },
  }
}