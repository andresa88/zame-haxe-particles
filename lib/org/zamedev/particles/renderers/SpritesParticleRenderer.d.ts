
import ParticleSystemRenderer from "./ParticleSystemRenderer";
import ParticleSystem from "../ParticleSystem";

import Sprite from "../../../../openfl/display/Sprite";

declare class SpritesParticleRenderer extends Sprite implements ParticleSystemRenderer {

  constructor(manualUpdate?:boolean);
  addParticleSystem(ps: ParticleSystem): ParticleSystemRenderer;
  removeParticleSystem(ps: ParticleSystem): ParticleSystemRenderer;
  update(): void;
}

export default SpritesParticleRenderer;