import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import getT from 'next-translate/getT'
import userActions from '../../../store/actions/userActions.js'
import profileActions from '../../../store/actions/profileActions.js'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import Select from '../../UI/Select/Select'
import Modal from '../../Modal/Modal'
import InputServiceWindow from './InputServcieWindow'
import Toggle from '../../UI/Toggle/Toggle'
import cls from '../../../styles/pages/profile.module.css'


const defaultServiceData = {
  name: "",
  currency: "UAN",
  price: 1,
  location: "",
  duration: 1,
}
const ManageServiceWIndow = () => {
  const {t} = useTranslation('profile')
  const dispatch = useDispatch()
  const profileStore = useSelector(store => store.profile)
  const profile = profileStore.profile
  const userStore = useSelector(store => store.user)
  const user = userStore.user
  const [serviceData, setServiceData] = useState(defaultServiceData)
  const [showModal, setShowModal] = useState(false)

  if (serviceData.duration >= 60) {
    var durationView = Math.trunc(serviceData.duration / 60) + 'h. '
    if (serviceData.duration % 60 != 0) {
      durationView += serviceData.duration % 60 + 'm.'
    }
  }
  else {
    var durationView = serviceData.duration % 60 + 'm.'
  }
  
  const updateProfile = () => {
    dispatch(profileActions.upload({username: user.username}))
  }

  const createServiceData = () => {
    dispatch(userActions.createService(serviceData))
    setServiceData(defaultServiceData)
    setShowModal(false)
  }

  return (
    <>
      <InputServiceWindow 
        serviceData={serviceData}
        setServiceData={setServiceData}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Button
          className="muted middle br-1"
          onClick={e => setShowModal(false)}
        >
          cancel
        </Button>
        <Button
          className="primary middle br-1"
          onClick={e => {
            createServiceData()
            // updateProfile()
          }}
        >
          create
        </Button> 
      </InputServiceWindow>
      
      <Button
        className="little sceleton br-3"
        onClick={e => setShowModal(true)}
      >
        create +
      </Button> 
    </>
  )
}


export default ManageServiceWIndow
