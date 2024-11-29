import { Behaviour, GameObject } from "@needle-tools/engine";
import { Vector3 } from "three";

export class PlayerController extends Behaviour {
    speed: number = 5;
    private keysPressed: Set<string> = new Set();

    constructor() {
        super();
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
    }

    // Cuando una tecla es presionada
    private onKeyDown = (event: KeyboardEvent): void => {
        this.keysPressed.add(event.key);
    };

    // Cuando una tecla es soltada
    private onKeyUp = (event: KeyboardEvent): void => {
        this.keysPressed.delete(event.key);
    };

    update() {
        const move = new Vector3();

        // Detecta teclas presionadas para movimiento
        if (this.keysPressed.has("ArrowUp") || this.keysPressed.has("w")) {
            move.z -= this.speed * this.context.time.deltaTime;
        }
        if (this.keysPressed.has("ArrowDown") || this.keysPressed.has("s")) {
            move.z += this.speed * this.context.time.deltaTime;
        }
        if (this.keysPressed.has("ArrowLeft") || this.keysPressed.has("a")) {
            move.x -= this.speed * this.context.time.deltaTime;
        }
        if (this.keysPressed.has("ArrowRight") || this.keysPressed.has("d")) {
            move.x += this.speed * this.context.time.deltaTime;
        }

        // Aplica el movimiento al objeto
        this.gameObject.position.add(move);
    }
}
