export default function Resorts({ resorts }) {
  return (
    <div class="pt-20">
      <h1 class="text-3xl m-20">Resorts we offer course at</h1>
      <div className="flex flex-col justify-between m-20">

        {resorts.map((resort) => (
          <div className="flex bg-white text-black flex-col justify-between items-center p-10 m-10">
            <p class="text-3xl">{resort.name}</p>
            <p>{resort.country}</p>
            <p>{resort.province}</p>
            <p>{resort.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/resorts')
  const resorts = await res.json()

  return {
    props: {
      resorts,
    },
  }
}