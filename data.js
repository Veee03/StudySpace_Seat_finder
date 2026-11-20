// data.js - mock ("simulated") data. In a real system this would come from sensors / a server.
// status: "available" | "occupied"   noise/light/crowd: "low" | "medium" | "high"
const BUILDING = { name: "Library", floor: "Floor 2", updated: "2 min ago" };

const SEATS = [
  { id: "L2-01", status: "available", noise: "low", light: "low", crowd: "low", sockets: true, pc: false },
  { id: "L2-02", status: "occupied", noise: "low", light: "low", crowd: "low", sockets: true, pc: false },
  { id: "L2-03", status: "available", noise: "low", light: "medium", crowd: "low", sockets: false, pc: false },
  { id: "L2-04", status: "available", noise: "medium", light: "medium", crowd: "medium", sockets: true, pc: true },
  { id: "L2-05", status: "occupied", noise: "medium", light: "high", crowd: "medium", sockets: true, pc: true },
  { id: "L2-06", status: "available", noise: "high", light: "high", crowd: "high", sockets: true, pc: false },
  { id: "L2-07", status: "occupied", noise: "low", light: "low", crowd: "low", sockets: false, pc: false },
  { id: "L2-08", status: "available", noise: "low", light: "low", crowd: "medium", sockets: true, pc: false },
  { id: "L2-09", status: "available", noise: "medium", light: "low", crowd: "medium", sockets: false, pc: false },
  { id: "L2-10", status: "occupied", noise: "high", light: "medium", crowd: "high", sockets: true, pc: true },
  { id: "L2-11", status: "available", noise: "high", light: "medium", crowd: "high", sockets: true, pc: true },
  { id: "L2-12", status: "available", noise: "medium", light: "high", crowd: "medium", sockets: true, pc: false },
  { id: "L2-13", status: "occupied", noise: "low", light: "medium", crowd: "low", sockets: true, pc: false },
  { id: "L2-14", status: "available", noise: "low", light: "low", crowd: "low", sockets: true, pc: false },
  { id: "L2-15", status: "available", noise: "low", light: "medium", crowd: "low", sockets: false, pc: false },
  { id: "L2-16", status: "occupied", noise: "medium", light: "medium", crowd: "medium", sockets: true, pc: false },
  { id: "L2-17", status: "available", noise: "medium", light: "low", crowd: "low", sockets: true, pc: false },
  { id: "L2-18", status: "available", noise: "high", light: "high", crowd: "high", sockets: false, pc: false },
  { id: "L2-19", status: "occupied", noise: "medium", light: "medium", crowd: "high", sockets: true, pc: true }
];
