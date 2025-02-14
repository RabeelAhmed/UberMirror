import React from 'react'

export default function RidePopUp(props) {
  return (
    <div>
        <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
         props.setRidePopUpPanel(false)
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-800"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
        <div className='flex items-center gap-3'>
            <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s" alt="" />
            <h2 className='text-lg font-medium'>Habib</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2KM</h5>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-800">Kingra, Sialkot punjab</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-800">Kingra, Sialkot punjab</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
          <i className="ri-money-dollar-circle-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">$193.20</h3>
              <p className="text-sm text-gray-800">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-between mt-4'>

        <button onClick={()=>{
            props.setRidePopUpPanel(false)
        }} className="bg-gray-400 text-gray-800 font-semibold p-3 px-10 rounded-lg">
          Ignore
        </button>

        <button onClick={()=>{
        props.setConfirmRidePopUpPanel(true)
        }} className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Accept
        </button>
        </div>
      </div>
    </div>
  )
}
