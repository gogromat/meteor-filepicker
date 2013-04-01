meteor-filepicker
=================

Filepicker.io Lib repackaged for Meteor.

Contains the minified filepicker.io's JS library.



To start:
------------

Add Filepicker.io Key

Ex.
```js
Meteor.startup(function() {
  filepicker.setKey("Your filepicker API Key");
});
```

Use filepicker API
Ex. Widget:
```js
filepicker.constructWidget(
  //$("#filepicker-attachment")
  document.getElementById("filepicker-attachment")
);
```
... and somewhere in template:

```js
Template.my_template.events({
  'change #filepicker-attachment': function (evt) {
    console.log("Event: ", evt, evt.fpfile, 
                "Generated image url:", evt.fpfile.url);
  }
);
```
