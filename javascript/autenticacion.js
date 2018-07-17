jQuery(document).ready(function($){
	$('.login').on(
		'submit',
		function(e){
			e.preventDefault(); 

			var email = $('.login .email').val();
			alert(email);

			var password = $('.login .password').val();
			alert(password);

			if(!email){
				alert('debe ingresar un correo');
			} 
			else if(!password) {
				alert('debe de ingresar una contraseña');
			}
			else{
				firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(function(){
					alert('Bienvenido')
				})
				.catch(function(error){
					alert('No eres bienvenido')
				});
			}
		});
});

$('.registro').on(
	'submit',
	function(s){
		s.preventDefault(); 

		var email = $('.registro .email').val();
		alert(email);

		var password = $('.registro .password').val();
		alert(password);

		if(!email){
			alert('debe ingresar un correo');
		} 
		else if(!password) {
			alert('debe de ingresar una contraseña');
		}
		else{
			firebase.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
})

		}
	});
});