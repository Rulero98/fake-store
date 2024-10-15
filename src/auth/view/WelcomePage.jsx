import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"

import './WelcomePage.css'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { ListItems } from "../components/ListItems"

export const WelcomePage = () => {

  const { data } = useFetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
  const [noImg, setNoImg] = useState(0)


  const onPrevImg = () => {
    if (noImg > 0) setNoImg(noImg - 1)
  }
  const onNexImg = () => {
    if (noImg < 9) setNoImg(noImg + 1)
  }
  return (
    <>
      <div className="w__container">

        <SlArrowLeft className="w__btn" onClick={onPrevImg}> Prev </SlArrowLeft>

        <ListItems items={data} noItem={noImg} />

        <SlArrowRight className="w__btn" onClick={onNexImg}> Next </SlArrowRight>

      </div>
    </>
  )
}
