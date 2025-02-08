import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import { LocationPanel } from '../components/LocationPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingforDriver'

export const Home = () => {
  const [pickUp, setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanleRef = useRef(null)
  const confirmRideRef = useRef(null)
  const vehiclefoundRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehcilePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehiclefound, setVehiclefound] = useState(false)
  

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        opacity: 1,
        padding: 24,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1, // fix typo
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        opacity: 0,
        padding: 0,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0, // fix typo
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehcilePanel) {
      gsap.to(vehiclePanleRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
      })
    } else {
      gsap.to(vehiclePanleRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
      })
    }
  }, [vehcilePanel])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
      })
    } else {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehiclefound) {
      gsap.to(vehiclefoundRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
      })
    } else {
      gsap.to(vehiclefoundRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
      })
    }
  }, [vehiclefound])

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e)
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
        </div>

        <div ref={panelRef} className=" bg-white h-0">
          <LocationPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div
        ref={vehiclePanleRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-14 bg-white"
      >
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div
        ref={confirmRideRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 pt-14 bg-white"
      >
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehiclefound={setVehiclefound} />
      </div>

      <div
        ref={vehiclefoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 pt-14 bg-white"
      >
       <LookingForDriver setConfirmRidePanel={setConfirmRidePanel}  />
      </div>
    </div>
  )
}