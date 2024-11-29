import { Behaviour, GameObject, serializable } from "@needle-tools/engine";
import { Vector3 } from "three";

export class CollisionHandler extends Behaviour {
    @serializable(GameObject)
    player: GameObject | null = null;

    @serializable(GameObject)
    enemy: GameObject | null = null;

    @serializable(Vector3)
    restartPosition: Vector3 = new Vector3(0.236, 1.64, 11.31);


    @serializable(Vector3)
    enemyRestartPosition: Vector3 = new Vector3(0.2, 1.66, 13.79);

    update() {
        if (!this.player || !this.enemy) return;

        const distance = this.player.position.distanceTo(this.enemy.position);


        if (distance < 1) {
            console.log("¡El enemigo atrapó al jugador! Reiniciando...");


            this.player.position.copy(this.restartPosition);
            this.enemy.position.copy(this.enemyRestartPosition);


        }
    }

    resetGameObjects() {
        console.log("Reiniciando objetos del juego...");
    }
}
