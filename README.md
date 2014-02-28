Shopify Login Redirect
======================

Small jQuery Script that will redirect a user if there is a query string in the URL.

Setup:
Upload login-redirect.jquery.min.js to the theme's assests

Inside the theme's theme.liquid file at the end of the page, after jquery has been loaded include the following
{% if template contains 'login' %}
{{ 'login-redirect.jquery.min.js' | asset_url | script_tag }}
{% endif %}

Inside the theme's /customer/login.liquid file
Before the submit button for the signin form add the following

<input type="hidden" name="checkout_url" value="/" />

That's it!


Usage:
Any link that a user clicks on that directs them to the login page, if you want the user to go back to that page after they've logged in append ?next=slug-to-current-page.


More to come, will update readme for liquid files in collections, pages, etc...
