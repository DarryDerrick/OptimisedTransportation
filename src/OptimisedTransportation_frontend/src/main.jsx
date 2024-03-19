import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [nrc, setNRC] = useState('');
  const [vehicleRegNo, setVehicleRegNo] = useState('');
  const [licenseNo, setLicenseNo] = useState('');
  const [registeredDrivers, setRegisteredDrivers] = useState([]);

  const registerDriver = async () => {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        nrc: nrc,
        vehicleRegNo: vehicleRegNo,
        licenseNo: licenseNo
      })
    });
    const data = await response.json();
    setRegisteredDrivers(data.drivers);
  };

  const fetchRegisteredDrivers = async () => {
    const response = await fetch('/drivers');
    const data = await response.json();
    setRegisteredDrivers(data.drivers);
  };

  return (
    <div>
      <h1>Transport Optimization System</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>NRC:</label>
        <input type="text" value={nrc} onChange={(e) => setNRC(e.target.value)} />
      </div>
      <div>
        <label>Vehicle Registration No:</label>
        <input type="text" value={vehicleRegNo} onChange={(e) => setVehicleRegNo(e.target.value)} />
      </div>
      <div>
        <label>License No:</label>
        <input type="text" value={licenseNo} onChange={(e) => setLicenseNo(e.target.value)} />
      </div>
      <button onClick={registerDriver}>Register Driver</button>
      <button onClick={fetchRegisteredDrivers}>Get Registered Drivers</button>
      <div>
        <h2>Registered Drivers</h2>
        <ul>
          {registeredDrivers.map((driver, index) => (
            <li key={index}>
              Name: {driver.name}, NRC: {driver.nrc}, Vehicle Reg No: {driver.vehicleRegNo}, License No: {driver.licenseNo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
