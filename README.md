meteor-filepicker
=================

Filepicker.io Lib repackaged for Meteor.

Contains the minified filepicker.io's JS library.



To start:
------------

_Add filepicker api key_

*Ex.*
```js
Meteor.startup(function() {
  filepicker.setKey("Your filepicker API Key");
});
```

_Use filepicker API_

*Ex. filepicker widget:*
```js
filepicker.constructWidget(
  //$("#filepicker-attachment")
  document.getElementById("filepicker-attachment")
);
```
_and somewhere in template:_

```js
Template.my_template.events({
  'change #filepicker-attachment': function (evt) {
    console.log("Event: ", evt, evt.fpfile, 
                "Generated image url:", evt.fpfile.url);
  }
);
```
_filepicker itself:_

```html
  	<input type="filepicker"
			id="filepicker-attachment"
			data-fp-button-class="btn filepicker-attachment"
			data-fp-button-text="Add image" 
			data-fp-mimetypes="image/*"
			data-fp-container="modal"
			data-fp-maxsize="5000000" 
			data-fp-services="COMPUTER,IMAGE_SEARCH,URL,DROPBOX,GITHUB,GOOGLE_DRIVE,GMAIL">
```
