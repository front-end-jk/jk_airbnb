import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailInfo from './c-cpns/detail-info'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'
const Detail = memo(() => {
  const dispatch= useDispatch()
  useEffect(() => { 
    dispatch(changeHeaderConfigAction({isFixed:false}))
  },[dispatch])

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfo />
    </DetailWrapper>
  )
})

export default Detail
