import { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import { LocationPanel } from '../components/LocationPanel'

export const Home = () => {
  const [pickUp, setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()

  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        opacity: 1,
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1, // fix typo
      })
     } else{
        gsap.to(panelRef.current, {
          height: '0%',
          duration: 0.5,
          opacity: 0,
          padding: 0
        })
        gsap.to(panelCloseRef.current, {
          opacity: 0, // fix typo
        })
      }
  }, [panelOpen])



  return (
    <div className='h-screen relative'>
      <img
          className="w-16 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <div className='h-screen w-screen'>
          <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>

        <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
          <div className='h-[30%] p-6 bg-white relative'>
            <h5 ref={panelCloseRef} onClick={()=> {
              setPanelOpen(false)
            }} className='absolute opacity-0 right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
            onClick={() => {
              setPanelOpen(true)
            }}
             value={pickUp} onChange={(e) => {
              setPickUp(e.target.value)
            }} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
            <input
            onClick={() => {
              setPanelOpen(true)
            }}
             value={destination} onChange={(e) => {
              setDestination(e.target.value)
            }} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Enter your Destination' />
          </form>
          </div>

          <div ref={panelRef} className=' bg-white h-0'>
            <LocationPanel />
          </div>
        </div>
    </div>
  )
}
