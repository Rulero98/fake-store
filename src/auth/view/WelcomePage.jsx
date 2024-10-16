import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"

import { NavLink } from "react-router-dom"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { ListItems } from "../components/ListItems"

import './WelcomePage.css'

export const WelcomePage = () => {

  const { data } = useFetch('https://api.escuelajs.co/api/v1/categories')
  const [noImg, setNoImg] = useState(0)


  const onPrevImg = () => {
    if (noImg > 0) setNoImg(noImg - 1)
  }
  const onNexImg = () => {
    if (noImg < data.length - 1) setNoImg(noImg + 1)
  }
  return (
    <>
      <div className="w__container">
        <h3 className="w__title mb-5">FakeShop</h3>
        <SlArrowLeft className="w__btn" onClick={onPrevImg}> Prev </SlArrowLeft>

        <ListItems items={data} noItem={noImg} />

        <SlArrowRight className="w__btn" onClick={onNexImg}> Next </SlArrowRight>


      </div>

      <div className="w__container justify-content-center w-25 gap-3">
        <NavLink to={'login'} className={'w-25 btn btn-outline-primary m-10'} >Sing In</NavLink>
        <NavLink to={'register'} className={'w-25 btn btn-outline-secondary m-10'}>Sign Up</NavLink>

      </div>

    </>
  )
}
