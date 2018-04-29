
import openfl_display_Sprite from "openfl/display/Sprite";

declare namespace org.zamedev.particles.renderers {

export class TilemapParticleRenderer extends openfl_display_Sprite {

	constructor(manualUpdate?:any);
	manualUpdate:any;
	dataList:any;
	offsetX:any;
	offsetY:any;
	parentScaleX:any;
	parentScaleY:any;
	addParticleSystem(ps:any):any;
	removeParticleSystem(ps:any):any;
	update():any;
	onEnterFrame(_:any):any;
	fixPosition():any;


}

}

export default org.zamedev.particles.renderers.TilemapParticleRenderer;