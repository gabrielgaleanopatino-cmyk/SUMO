basic.forever(function () {
    basic.forever(function () {
        // Leemos la distancia en centímetros
        // Requiere agregar la extensión 'sonar' en MakeCode
        distancia = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        );

        // Lógica del robot Sumo
        // Si detecta algo a más de 0 cm y a menos de 30 cm...
        if (distancia > 0 && distancia < 30) {
            // ¡Oponente a la vista! Cargar hacia adelante.
            atacar();
        } else {
            // No hay nadie cerca. Girar sobre su propio eje para buscar.
            buscarOponente();
        }
    });
function atacar() {
        // Motor Izquierdo: Adelante
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P14, 0);

        // Motor Derecho: Adelante
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P16, 0);

        // Mostrar un ícono de enojo en la matriz LED
        basic.showIcon(IconNames.Angry);
    }
function buscarOponente() {
        // Motor Izquierdo: Adelante
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P14, 0);

        // Motor Derecho: Atrás (esto hace que el robot gire en su lugar)
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 1);

        // Mostrar un ícono de búsqueda en la matriz LED
        basic.showIcon(IconNames.Diamond);
    }
})
