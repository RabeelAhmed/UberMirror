export const LocationPanel = (props) => {
  // sample array for location
  const locations = [
    "USKT, Daska road Sialkot punjab",
    "Kingra, Zafarwal road Sialkot punjab",
    "Zafarwal, kingra road Sialkot punjab",
    "Lahore, MM alam road punjab",
    "gujranwala, sialkot road punjab",
  ];

  return (
    <div>
      {locations.map((elem, index) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);  // Fixed typo
              props.setPanelOpen(false);  // Fixed typo
            }}
            className="flex gap-3 border-2 p-3 border-gray-100 active:border-black rounded-xl justify-start my-2 items-center"
            key={index}
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};
