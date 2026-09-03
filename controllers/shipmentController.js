const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/shipments.json');

// Helper to read shipments
const getShipments = () => JSON.parse(fs.readFileSync(dataPath, 'utf8') || '[]');
// Helper to write shipments
const saveShipments = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

// GET all
exports.getAllShipments = (req, res) => {
  res.json({ success: true, data: getShipments() });
};

// CREATE
exports.createShipment = (req, res) => {
  const shipments = getShipments();
  const newShipment = req.body;
  
  // Check if exists, update if present, otherwise add
  const index = shipments.findIndex(s => s.id === newShipment.id);
  if (index !== -1) {
    shipments[index] = newShipment;
  } else {
    shipments.push(newShipment);
  }
  
  saveShipments(shipments);
  res.json({ success: true, message: 'Shipment saved successfully.' });
};

// DELETE
exports.deleteShipment = (req, res) => {
  const { id } = req.params;
  let shipments = getShipments();
  shipments = shipments.filter(s => s.id !== id);
  saveShipments(shipments);
  res.json({ success: true, message: 'Shipment deleted.' });
};