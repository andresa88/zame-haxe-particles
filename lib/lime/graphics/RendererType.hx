package lime.graphics;


@:jsRequire("lime/graphics/RendererType", "default")

@:enum
abstract RendererType(Int) from Int to Int {
	
	public var OPENGL = 0;
	public var CANVAS = 1;
	public var DOM = 2;
	
}

/*
enum RendererType {
	
	OPENGL;
	CANVAS;
	DOM;
	FLASH;
	CAIRO;
	CONSOLE;
	CUSTOM;
	
}
*/