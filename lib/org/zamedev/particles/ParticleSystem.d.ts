import { BitmapData } from "openfl/display/BitmapData";

interface ParticleVector {

}
interface ParticleColor {

}

export default class ParticleSystem {

    public static EMITTER_TYPE_GRAVITY: number;
    public static EMITTER_TYPE_RADIAL: number;

    public static POSITION_TYPE_FREE: number;
    public static POSITION_TYPE_RELATIVE: number;
    public static POSITION_TYPE_GROUPED: number;

    emitterType: number;
    maxParticles: number;
    positionType: number;
    duration: number;
    gravity : ParticleVector;
    particleLifespan: number;
    particleLifespanVariance: number;
    speed: number;
    speedVariance: number;
    sourcePosition : ParticleVector;
    sourcePositionVariance : ParticleVector;
    angle: number;
    angleVariance: number;
    startParticleSize: number;
    startParticleSizeVariance: number;
    finishParticleSize: number;
    finishParticleSizeVariance: number;
    startColor : ParticleColor;
    startColorVariance : ParticleColor;
    finishColor : ParticleColor;
    finishColorVariance : ParticleColor;
    minRadius: number;
    minRadiusVariance: number;
    maxRadius: number;
    maxRadiusVariance: number;
    rotationStart: number;
    rotationStartVariance: number;
    rotationEnd: number;
    rotationEndVariance: number;
    radialAcceleration: number;
    radialAccelerationVariance: number;
    tangentialAcceleration: number;
    tangentialAccelerationVariance: number;
    rotatePerSecond: number;
    rotatePerSecondVariance: number;
    blendFuncSource: number;
    blendFuncDestination: number;
    textureBitmapData : BitmapData;
    active : boolean;
    restart : boolean;
    particleScaleX : number;
    particleScaleY : number;
    particleScaleSize : number;
    yCoordMultiplier: number;
    emissionFreq : number;
    forceSquareTexture : boolean;

    private prevTime: number;
    private emitCounter : number;
    private elapsedTime : number;

  public emit(sourcePositionX : number, sourcePositionY : number) : void;
}