import React from 'react'

export default function LookingforDriver(props) {
  return (
    <div>
    <h5
      className="p-1 text-center w-[93%] absolute top-0"
      onClick={() => {
        props.setConfirmRidePanel(false);
      }}
    >
      <i className="ri-arrow-down-wide-line text-3xl text-gray-800"></i>
    </h5>
    <h3 className="text-2xl font-semibold mb-5">Looking for Driver</h3>

    <div className="flex gap-2 justify-between flex-col items-center">
      <img
        className="h-40"
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
        alt=""
      />
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
    </div>
  </div>
  )
}
