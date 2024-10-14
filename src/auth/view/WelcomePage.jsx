import { useFetch } from "../../hooks/useFetch"

export const WelcomePage = () => {

  const { data } = useFetch('https://api.escuelajs.co/api/v1/products')

  return (
    <>

      {data?.map(item => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}


    </>
  )
}
