import { Behaviour, GameObject, serializable } from "@needle-tools/engine";
import { Vector3 } from "three";

export class CameraFollow extends Behaviour {
    @serializable(GameObject)
    target: GameObject | null = null;

    @serializable(Vector3)
    offset: Vector3 = new Vector3(0, 5, -10);

    lateUpdate() {
        if (!this.target || !this.gameObject) return;

        const camera = this.gameObject; 

        camera.position.set(
            this.target.position.x + this.offset.x,
            this.target.position.y + this.offset.y,
            this.target.position.z + this.offset.z
        );

        camera.lookAt(this.target.position);
    }
}
