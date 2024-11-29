import { Behaviour, GameObject, ICollider, serializable } from "@needle-tools/engine";

export class FinishLine extends Behaviour {
    @serializable(GameObject)
    player: GameObject | null = null; 


    onTriggerEnter(col: ICollider) {
        const other = col.gameObject;

        if (other === this.player) {
            console.log("¡El jugador ha alcanzado la línea final!");
        }
    }
}
