function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Mateusz Dudłak' + '\n' +
			'mateusz.dudlak@gmail.com'  + '\n' + 
			'cw9/3/PM/N' + '\n' + 
			'Projektowanie aplikacji mibilnych' + '\n';

	navigator.notification.alert(info);
	
/*}

function deviceInfo() {

	infoa = 'Mam na imie Mateusz '; 

	navigator.notification.alert(infoa);
	
}*/