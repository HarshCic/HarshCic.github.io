var provider = new firebase.auth.GoogleAuthProvider();
var user;
var selectedFile;
  

$( document ).ready(function() {
	
	document.getElementById("upload").addEventListener('change', handleFileSelect, false);
});

function handleFileSelect(event) {
	$(".upload-group").show();
// 	selectedFile = event.target.files[0];
	var selectedFile = new Blob([event.target.result], { type: "image/jpeg" });
};


function confirmUpload() {
	var selectedFile = event.target.file;
	var metadata = {
		contentType: 'image',
		customMetadata: {
			
			
			'title': $("#imgTitle").val(),
			'caption': $("#imgDesc").val()
		},
	};
	var uploadTask = firebase.storage().ref().child('dogImages/' + selectedFile.name).put(selectedFile, metadata);
	// Register three observers:
	// 1. 'state_changed' observer, called any time the state changes
	// 2. Error observer, called on failure
	// 3. Completion observer, called on successful completion
	uploadTask.on('state_changed', function(snapshot){
  		// Observe state change events such as progress, pause, and resume
  		// See below for more detail
	}, function(error) {
  		// Handle unsuccessful uploads
	}, function() {
  		// Handle successful uploads on complete
  		// For instance, get the download URL: https://firebasestorage.googleapis.com/...
  		$(".upload-group")[0].before("Success!");
  		$(".upload-group").hide();

	});

}




