import { Behaviour, GameObject } from "@needle-tools/engine";
import { Vector3 } from "three";

export class Monstruo extends Behaviour {
    jugador: GameObject | null = null;
    velocidad: number = 3;

    update() {
        if (this.jugador) {
            const direccion = new Vector3()
                .subVectors(this.jugador.position, this.gameObject.position)
                .normalize();

            const movimiento = direccion.multiplyScalar(this.velocidad * this.context.time.deltaTime);
            this.gameObject.position.add(movimiento);
        }
    }
}
