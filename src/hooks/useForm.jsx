import { useEffect, useState } from "react"

export const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState(initialForm)

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const onInputChange = ({ target }) => {
    const { value, name } = target
    console.log(value,name)
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return {
    ...formState,
    formState,
    onInputChange,
  }
}
