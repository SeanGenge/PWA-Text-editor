const btnInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
	event.preventDefault();
	
	// https://web.dev/codelab-make-installable/
	window.deferredPrompt = event;
	btnInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `btnInstall` element
btnInstall.addEventListener('click', async () => {
	const promptEvent = window.deferredPrompt;
	
	if (!promptEvent) {
		return;
	}
	
	promptEvent.prompt();
	// Set it back to null since prompt can only be called once
	window.deferredPrompt = null;
	btnInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
	window.deferredPrompt = null;
});
