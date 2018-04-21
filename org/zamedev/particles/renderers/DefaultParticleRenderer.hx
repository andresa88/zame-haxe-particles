package org.zamedev.particles.renderers;

import lime.app.Application;

#if ((html5 && dom) && !openfljs)
    import openfl.display.OpenGLView;
#end

class DefaultParticleRenderer {
    public static function createInstance(manualUpdate : Bool = false) : ParticleSystemRenderer {
        #if openfljs
        switch (Application.current.window.backend.renderType) {
            case 'dom':
                return new TilemapParticleRenderer();
                
            case 'webgl':
                return new TilemapParticleRenderer();
                
            default:
                return new TilemapParticleRenderer();
                
        }
        #elseif html5
            #if dom
                if (!manualUpdate && OpenGLView.isSupported) {
                    return new GLViewParticleRenderer();
                } else {
                    #if (openfl > "7.0.0")
                        return new TilemapParticleRenderer();
                    #elseif (openfl < "6.0.0")
                        return new TilemapParticleRenderer();
                    #else
                        // Tilemap is broken in OpenFL 6.0.1
                        return new SpritesParticleRenderer();
                    #end
                }
            #elseif webgl
                #if (openfl > "7.0.0")
                    return new TilemapParticleRenderer();
                #else
                    return new SpritesParticleRenderer();
                #end
            #else
                #if (openfl > "7.0.0")
                    return new TilemapParticleRenderer();
                #elseif (openfl < "6.0.0")
                    return new TilemapParticleRenderer();
                #else
                    // Tilemap is broken in OpenFL 6.0.1
                    return new SpritesParticleRenderer();
                #end
            #end
        #elseif flash
            return new SpritesParticleRenderer();
        #else // native
            #if cpp
                return new SpritesParticleRenderer();
            #else
                #if (openfl > "7.0.0")
                    return new TilemapParticleRenderer();
                #elseif (openfl < "6.0.0")
                    return new TilemapParticleRenderer();
                #else
                    // Tilemap is broken in OpenFL 6.0.1
                    return new SpritesParticleRenderer();
                #end
            #end
        #end
    }
}
