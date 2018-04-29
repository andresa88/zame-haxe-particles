import ParticleSystem from "../ParticleSystem";

export default interface ParticleSystemRenderer {
  addParticleSystem(ps: ParticleSystem): ParticleSystemRenderer;
  removeParticleSystem(ps: ParticleSystem): ParticleSystemRenderer;
  update(): void;
}
