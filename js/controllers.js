// cetaTest Controller for index page - Mark Mulrooney

app.controller('pageController', function ($scope,$http) {
	$scope.users = {}; 
	$scope.newUser = {};
	$scope.clearFormAction = false;
	
	// Load up $scope.users from the JSON file
    $scope.getUsers = function(){
        // make an AJAX call to the JSON file holding all the users
		$http.get('data/users.json')
            .then(function(jsondata){
				$scope.users = jsondata.data; // 'data' is the holding object key 

				let websiteFix = "";
				let httpPrefix = 0;
				let httpsPrefix = 0;
				// If the URLs are missing this prefix 'http://www.', add it
				for (let key in jsondata.data) {
					websiteFix = jsondata.data[key].website;
					httpPrefix = websiteFix.search('http://www.');
					httpsPrefix = websiteFix.search('https://www.');
				
					if (httpPrefix == -1 && httpsPrefix == -1) {websiteFix = "http://www." + websiteFix}

					$scope.users[key].website = websiteFix;
				}

				localStorage.setItem('CetaUsers', JSON.stringify($scope.users));
			}
			,function (error){
				console.log("Error!! " + error)
			})
    }
	$scope.getUsers()

	// Take the row of user details and put them into the form
	$scope.editUserEntry = function(userObj) {
		// use angular.copy to stop two way binding
		$scope.newUser = angular.copy(userObj);
	}
		

	// New ID number requested, count the table rows and insert the answer
	$scope.newIDNumber = function(){
		// Pick up the table of users
		let tableObj = document.getElementById('cetaUserTable')
		// Count how many rows it has, needed for additions
		$scope.newUser.id = tableObj.rows.length;
	};


	// TEMP debugging function to show structure of data objects
	$scope.objectInspection = function(obj) {
		console.log(`\n\nObject Inspection start -----`)
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				console.log("Object Inspection " + key + " -> " + obj[key]);
			}
		}
		console.log(`Object Inspection end ------\n \n \n`)
	};


	// When the form is submitted, update the table or add another row, plus store the new set of users to localStorage
	$scope.sendForm = function (task) {

		// Code to stop spambots filling in the form. If the hidden 'comment' field is filled in, it is a spambot in action.
		let honeypot = document.getElementById('comment').value;
		if (honeypot) {
			console.log("Spambot alert - form submission denied");
			alert("Spambot alert - form submission denied");
			return false;
		}

		// if the ID is undefined, then get an ID number automatically assigned
		if (!$scope.newUser.id) {
			$scope.newIDNumber();
		}

		if ($scope.newUser.id) {
			let userNumber = $scope.newUser.id - 1 // to cope with how JS counts

			// if the entry already exists in the object
			if ($scope.users[userNumber]) {
				$scope.users[userNumber] = angular.copy($scope.newUser)
			}
			else {
				console.log('New entry into table')
				$scope.users[userNumber] = angular.copy($scope.newUser)
			}

			$scope.storedata($scope.users)

			// Clears the form
			$scope.newUser = {};
		}
		else {
			console.log("No ID number!!")			
		}
	};

	// Stores the user data into localStorage, if it is allowed by the browser 
	$scope.storedata = function(obj) {
		if (typeof(Storage) !== "undefined") {
			// Code for localStorage/sessionStorage.
			console.log('localStorage/sessionStorage permissable')
			
			localStorage.setItem('added-users', JSON.stringify(obj));

		} else { //  No Web Storage support.
			console.log('No support for localStorage/sessionStorage')
		}
	};
	
	// Debug feature - Show the localStorage in the console.log
	$scope.showLocalStorage = function() {
		var retrievedData = localStorage.getItem('added-users');
		console.log(`retrievedData = ${retrievedData}`)
	}
	
	$scope.clearForm = function() {
		// Clears the form
		$scope.newUser = {};
		console.log('Clear the form')
	}

});
