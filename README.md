# effortlessjs
Making VanillaJS Great Gain


Inspired by [html-first](https://html-first.com/)

# effortlessJS Function Documentation

## `action(elementId, eventType, handler)`
- **Purpose**: Attaches an event listener to the specified element.
- **Usage**:
  ```javascript
  effortlessJS.action('buttonId', 'click', function() { 
      console.log('Button clicked'); 
  });
```

## `getAjax(url)`
- **Purpose**: Performs an AJAX GET request.
- **Usagex**:
```javascript
effortlessJS.getAjax('https://example.com/api/data')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## `postAjax(url, data)`
- **Purpose**: Performs an AJAX POST request.
- **Usagex**:
```javascript
effortlessJS.postAjax('https://example.com/api/submit', { key: 'value' })
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

## show(elementId)
- Purpose: Shows a hidden HTML element.
- **Usagex**:
```javascript
effortlessJS.show('hiddenElementId');
```

## hide(elementId)
- Purpose: Hides a visible HTML element.
- **Usagex**:
```javascript
effortlessJS.hide('visibleElementId');
```

## toggle(buttonId, showElementId, hideElementId)
- Purpose: Toggles visibility of elements upon a button click.
- **Usagex**:
```javascript
effortlessJS.toggle('toggleButtonId', 'elementToShowId', 'elementToHideId');
````

## getFormData(formId)
- Purpose: Retrieves and returns form data as an object.
- **Usagex**:
```javascript
let formData = effortlessJS.getFormData('formId');
console.log(formData);
```

## validateForm(formId, rules)
- Purpose: Validates form fields based on provided rules.
- **Usagex**:
```javascript
let isFormValid = effortlessJS.validateForm('formId', {
    'inputId': { required: true }
});
console.log('Is Form Valid:', isFormValid);
```

## handleFormSubmit(formId, callback)
- Purpose: Handles form submission with a callback function.
- **Usagex**:
```javascript
effortlessJS.handleFormSubmit('formId', function(data) {
    // Handle form submission
});
```

## resetForm(formId)
- Purpose: Resets a form and clears any validation states.
- **Usagex**:
```javascript
effortlessJS.resetForm('formId');
```


