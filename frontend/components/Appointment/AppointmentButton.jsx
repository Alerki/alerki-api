import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import Modal from '../Modal/Modal'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import appointmentActins from '../../store/actions/appointmentActions.js'
import serviceActions from '../../store/actions/serviceActions.js'
import ServiceItem from './ServiceItem'
import api from '../../http'
import clsButton from './appointment-buttons.module.css'
import cls from '../../styles/pages/home/base.module.css'


const useFiltredServices = (services, sort) => {
  const filtred = useMemo(() => {
    if (services) {
      return services.filter(service => service.name.toLowerCase().includes(sort.toLowerCase()))
    }
  }, [services, sort])

  return filtred
}

const defaultShowButtonsState = {
  service: false,
  master: false,
  date: false,
  time: false,
  confirm: false,
}

const defaultShowModalsState = {
  service: false,
  master: false,
  date: false,
  time: false,
  confirm: false,
}

const defaultAppointmentState = {
  serviceID: null,
  masterServiceID: null,
  masterID: null,
  appointmentStartTime: null,
}

const AppointmentButton = () => {
  const dispatch = useDispatch()
  const appointmentStore = useSelector(store => store.appointment)
  const appointments = appointmentStore.appointments
  const serviceStore = useSelector(store => store.service)
  const services = serviceStore.services

  const [showButtons, setShowButtons] = useState(defaultShowButtonsState)
  const [showModal, setShowModal] = useState(defaultShowModalsState)
  const [appointment, setAppointment] = useState(defaultAppointmentState)
  
  const [servicesFilter, setServicesFilter] = useState('')
  const filtredServices = useFiltredServices(services, servicesFilter)

  // upload services
  useEffect(() => {
    dispatch(serviceActions.upload())
  }, [])

  // find services if it's need
  const findIfRequire = (e) => {
    let ifUpload = true
    for (let i of services) {
      if (i.name.includes(e.target.value)) {
        ifUpload = false
        break
      }
    }

    if (ifUpload) {
      dispatch(serviceActions.find({
        name: e.target.value
      }))
    }
  }

  // close windows
  const closeSelectServiceWindow = () => {
    setShowModal({...showModal, service: false})
    setShowButtons({...showButtons, service: true})
  }

  const closeSelectMasterWindow = () => {
    setShowModal({...showModal, master: false})
  }

  const selectServiceWindow = (
    <Modal
      show={showModal.service}
      onClose={closeSelectServiceWindow}
      padding={false}
    >
      <div>
        <Input 
          className={['modal_heading', cls.service_search_input].join(' ')}
          placeholder="service name"
          onChange={e => {
            findIfRequire(e)
            setServicesFilter(e.target.value)
          }}
        />

        <div 
          className={[clsButton.services_wrapper, 'pb-2'].join(' ')}
          onClick={e => {
            if (e.target.dataset.id) {
              setAppointment({
                ...appointment,
                serviceID: e.target.dataset.id,
              }) 

              setShowModal({...showModal, service: false, master: true})
            }
          }}
        >
          <div>
            {
              services
                ? filtredServices.map(e => {
                  return (
                    <ServiceItem 
                      key={e.id} 
                      data-id={e.id}
                      className="modal_paddings"
                    >
                      {e.name}
                    </ServiceItem>
                  )
                })
                : null
            }
          </div>
        </div>
      </div>

      {
        showButtons.service
          ? <div>
              <Button 
                className="middle muted"
                onClick={e => setShowModal({...showModal, service: false})}
              >
                close
              </Button>

              <Button 
                className="middle primary"
                onClick={e => setShowModal({...showModal, service: false})}
              >
                confirm
              </Button>
            </div>

          : null
      }
    </Modal>
  )

  const selectMasterWindow = (
    <Modal 
      show={showModal.master}
      onClose={closeSelectMasterWindow}
      padding={false}
    >
      <div>
      

        <div 
          className={[clsButton.services_wrapper, 'pb-2'].join(' ')}
          onClick={e => {
            if (e.target.dataset.id) {
              setAppointment({
                ...appointment,
                serviceID: e.target.dataset.id,
              })

              setShowModal({...showModal, master: false})
              setShowModal({...showModal, date: true})
            }
          }}
        >
          <div>
            {
              services
                ? filtredServices.map(e => {
                  return (
                    <ServiceItem 
                      key={e.id} 
                      data-id={e.id}
                      className="modal_paddings"
                    >
                      {e.name}
                    </ServiceItem>
                  )
                })
                : null
            }
          </div>
        </div>
      </div>

      {
        showButtons.master
          ? <div>
              <Button 
                className="middle muted"
                onClick={e => setShowModal({...showModal, master: false})}
              >
                close
              </Button>

              <Button 
                className="middle primary"
                onClick={e => setShowModal({...showModal, master: false})}
              >
                confirm
              </Button>
            </div>
          : null
      }

    </Modal>    
  )
  return (
    <div className={clsButton.buttons_wrapper}>
      {selectServiceWindow}
      {selectMasterWindow}

      {/* master modal in future */}
      <div 
        className={clsButton.service_button}
        onClick={e => setShowModal({...showModal, service: true})}
      >
        <span className={clsButton.button_inscription}>Service</span>
      </div>

      <div 
        className={clsButton.master_button}
        onClick={e => setShowModal({...showModal, master: true})}
      >
        <span className={clsButton.button_inscription}>Master</span>
      </div>
    </div>
  )
}


export default AppointmentButton