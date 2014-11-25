function init(){
	//initialize firebase by calling the unique URL
	var firepadRef = new Firebase('https://writwrite.firebaseapp.com/');
	firepadRef = getExampleRef();

	//need to create a new codeMirror
	var codeMirror = codeMirror(document.getElementById('firepad'), { lineWrapping: true});

	//need to create a random ID to use as our userID
	var userId = Math.floor(Math.random() * 9999999999).toString();

	//create Firepad with rich text features and the default userId
	var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
		richTextToolbar: true, richTextShortcuts: true, userId: userId
	});

	//create a firepadUserList
	var firepadUserList = firepadUserList.fromDiv(firepadRef.child('users'),
		document.getElementById('userList'), userId);

	//initialize contents
	firepad.on('ready', function(){
		if (firepad.isHistoryEmpty()){
			firepad.setText('Check out the fancy user list to the left');
		}
	});
}

// Helper to get hash from end of URL or generate a random one
function getExampleRef(){
	var ref = new Firebase('https://writwrite.firebaseapp.com/');
	var hash = window.location.hash.replace(/#/g, '');
	if (hash){
		ref = ref.child(hash);
	} else {
		ref = ref.push(); //generate a unique location
		window.location = window.location + '#' + ref.key(); //add as a hash to the URL
	}
	if (typeof console !== 'undefined')
		console.log('Firebase data: ', ref.toString());
	return ref;
}
init();