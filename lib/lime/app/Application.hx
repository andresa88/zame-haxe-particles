package lime.app;

typedef Window = Dynamic;

@:jsRequire("lime/app/Application", "default")

/** 
 * The Application class forms the foundation for most Lime projects.
 * It is common to extend this class in a main class. It is then possible
 * to override "on" functions in the class in order to handle standard events
 * that are relevant.
 */
extern class Application extends Module {
	
  
	/**
	 * The current Application instance that is executing
	**/
	public static var current (default, null):Application;

	/**
	 * The Window associated with this Application, or the first Window
	 * if there are multiple Windows active
	**/
	public var window (get, null):Window;

  private function get_window():Window;
}
