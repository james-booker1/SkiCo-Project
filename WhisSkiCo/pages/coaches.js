export default function Coaches({ coaches }) {
  return (
    <div class="pt-20">
      <div class="m-20">
        <p class="text-3xl">Meet our amazing WhisSkiCo team</p>
      </div>
      <div class="m-20">
        {coaches.map((coach) => (
          <div class="flex justify-between items-center m-10">
            <p class="flex justify-center w-1/3 text-3xl">{coach.firstname} {coach.lastname}</p>
            <p class="flex justify-center w-1/3 text-xl">{coach.bio}</p>
            <div class="flex justify-center w-1/3 text-xl">
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