const coches = require('./coches.json');

coches.forEach(coche => {
    console.log("----------------------------------")
    console.log("  " + "Marca:" + coche.marca)
    console.log("  " + "Modelo:" + coche.modelo)
    console.log("  " + "Año:" + coche.año)
    console.log("  " + "Color:" + coche.color)

})
    
    
