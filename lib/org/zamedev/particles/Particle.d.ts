
  //import { ParticleVector, ParticleColor } from "org/zamedev/particles/util";

  interface ParticleVector {

  }
  interface ParticleColor {

  }

  export class Particle {
    startPos : ParticleVector;
    position : ParticleVector;
    direction : ParticleVector;
    color : ParticleColor;
    colorDelta : ParticleColor;
    rotation : number;
    rotationDelta : number;
    radius : number;
    radiusDelta : number;
    angle : number;
    angleDelta : number;
    particleSize : number;
    particleSizeDelta : number;
    radialAcceleration : number;
    tangentialAcceleration : number;
    timeToLive : number;
  }