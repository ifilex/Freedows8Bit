var menus = {
	"&Game": [
		{
			item: "&Deal",
			shortcut: "F2",
			action: ()=> { resetGame(); },
			description: "Deal a new game",
		},
		// Don't want to imply you can undo by showing this option
		// {
		// 	item: "&Undo",
		// 	shortcut: "",
		// 	enabled: false,
		// 	action: ()=> { undo(); },
		// 	description: "Undo last action",
		// },
		{
			item: "De&ck...",
			shortcut: "",
			enabled: false,
			action: ()=> {},
			description: "Choose new deck back",
		},
		{
			item: "&Options...",
			shortcut: "",
			enabled: false,
			action: ()=> {},
			description: "Change Solitaire options",
			},
			],
};

var go_outside_frame = false;
if(frameElement){
	try{
		if(parent.MenuBar){
			MenuBar = parent.MenuBar;
			go_outside_frame = true;
		}
	}catch(e){}
}
var menu_bar = new MenuBar(menus);
if (go_outside_frame) {
	frameElement.parentElement.insertBefore(menu_bar.element, frameElement);
} else {
	document.body.prepend(menu_bar.element);
}
