
declare namespace org.zamedev.particles.loaders {

  export class ParticleLoader {
  
    static load(path:string):any;
    static loadTexture(textureImageData:string | null, textureFileName:string | null, path:string | null):BitmapData;
  
  }
  
}
  
export default org.zamedev.particles.loaders.ParticleLoader;