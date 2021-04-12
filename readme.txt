The Instructions Provided to Do this Test

We would like you to perform a short technical exercise to demonstrate your technical and design ability. Could you please create an angular UI for the following JSON:

https://jsonplaceholder.typicode.com/users

What we are looking for is a form to create or edit existing users (and for this to update the JSON, which we are expecting you to store in the browser locally) and a way to display the user information from the JSON as a read only view such as a grid. Feel free to use any packages you see fit. As this is intended to be a short exercise, we don’t expect you to go overboard with the UI in terms of styling and animations etc, but it should look presentable and something you feel a corporate organisation would be happy to display to their customers. As this is a front-end role you will be assessed on the UI design, UX and the quality of the code.


Assumptions Made

"grid" means a HTML table.
"store in the browser locally" means use localStorage.
I put in a restriction of maximum length set to a nominal 20 characters on the form fields.
All the form fields are of the input type. I could have made ones like the catch phrase a textarea to allow multiple lines, but did not for simplicity.
I applied a regular expression for the zip code.
I found that there seemed to be a contradiction in the instructions. "read only view" but you want to be able to edit and create users. I ignored the read only part.
I have guessed at which fields should be required.
I do not let the user fill in the ID field as I want that to be automatically assigned. If you use the edit button to fill in the form, your amended data is sent back to the original row. If you fill in the form from its blank stage and submit, a new row is added to the bottom of the table.
I have used Bootstrap as a basis for the CSS but such a large table will never fit easily on a mobile or tablet in portrait view.


Issues

The dummy user data appears to be for the USA only with its use of zipcodes. In a real world scenario, one would assume that another country could be selected with a possible accompanying post code.
The website URLs in the dummy data are missing their 'http' prefixes. I have added them into my JS data object so that they make legitimate URLs for the anchor tags.
I tried applying a regular expression for the telephone numbers but there was too much variety in the examples supplied.
Transferred 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' to my local drive 'css/bootstrap.min.css' due to Firefox not implementing Content-Security-Policy in the same manner as Chrome.


Cyber Security of this Webpage

I made a check on this page's security here https://securityheaders.com/?q=http%3A%2F%2Fwww.mulrooney.co.uk%2Fceta-insurance-test%2F&followRedirects=on. It got a rating of A.
My portfolio website has a .htaccess file in its root plus there is another put in the root of this subfolder. In them I have coded the relevant restrictions.
I inserted a meta tag in the head with http-equiv="Content-Security-Policy" and the relevant restrictions.
I inserted a hidden field to defeat form filling by spambots