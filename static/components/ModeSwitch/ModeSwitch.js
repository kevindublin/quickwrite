const session = modulo.stores.session.data;

console.log("Component ModeSwitch.js loaded", session);

function switchMode() {

	if (session.mode_writemode) {
		session.mode_writemode = false;
		session.draft_active = false;
		session.draft_visible = false;
		session.read_visible = true;
	} else if (!session.mode_writemode) {
		session.draft_active = true;
		session.draft_visible = true;
		session.read_visible = false;
		session.mode_writemode = true;
	}

}