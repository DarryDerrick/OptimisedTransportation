// Define a type for Driver
type Driver = {
  name : Text;
  nrc : Text;
  vehicleRegNo : Text;
  licenseNo : Text;
};

// Define a type for TransportOptimizer
type TransportOptimizer = {
  drivers : [Driver];
};

// Initialize an empty TransportOptimizer
public func initTransportOptimizer() : TransportOptimizer {
  return { drivers = [] };
};

// Register a new driver
public func registerDriver(optimizer : TransportOptimizer, name : Text, nrc : Text, vehicleRegNo : Text, licenseNo : Text) : TransportOptimizer {
  let newDriver = { name = name; nrc = nrc; vehicleRegNo = vehicleRegNo; licenseNo = licenseNo };
  let updatedDrivers = optimizer.drivers # [newDriver];
  return { optimizer with drivers = updatedDrivers };
};

// Retrieve all registered drivers
public func getRegisteredDrivers(optimizer : TransportOptimizer) : [Driver] {
  return optimizer.drivers;
};
