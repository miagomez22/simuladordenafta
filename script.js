// JavaScript del simulador de nafta

function simularNafta(precioNafta, cantidadLitros) {
    const costoTotal = precioNafta * cantidadLitros;
    return costoTotal;
}

// Ejemplo de uso
const precioPorLitro = 100; // Precio por litro de nafta
const litros = 20; // Cantidad de litros a simular
const costo = simularNafta(precioPorLitro, litros);
console.log(`El costo total para ${litros} litros es: ${costo} pesos.`);