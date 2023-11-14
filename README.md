# effortlessjs
Making VanillaJS Great Again!


Inspired by [html-first](https://html-first.com/)

# effortlessJS Function Documentation

## action(elementId, eventType, handler)
- **Purpose**: Attaches an event listener to the specified element.
- **Usage**:
```javascript
  function logClick(){
      console.log('Button clicked'); 
  }
  effortlessJS.action('buttonId', 'click', logClick);
```

## getAjax(url)
- **Purpose**: Performs an AJAX GET request.
- **Usage**:
```javascript
effortlessJS.getAjax('https://example.com/api/data')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## postAjax(url, data)
- **Purpose**: Performs an AJAX POST request.
- **Usage**:
```javascript
effortlessJS.postAjax('https://example.com/api/submit', { key: 'value' })
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

## show(elementId)
- Purpose: Shows a hidden HTML element.
- **Usage**:
```javascript
effortlessJS.show('hiddenElementId');
```

## hide(elementId)
- Purpose: Hides a visible HTML element.
- **Usage**:
```javascript
effortlessJS.hide('visibleElementId');
```

## toggle(buttonId, showElementId, hideElementId)
- Purpose: Toggles visibility of elements upon a button click.
- **Usage**:
```javascript
effortlessJS.toggle('toggleButtonId', 'elementToShowId', 'elementToHideId');
````

## getFormData(formId)
- Purpose: Retrieves and returns form data as an object.
- **Usage**:
```javascript
let formData = effortlessJS.getFormData('formId');
console.log(formData);
```

## validateForm(formId, rules)
- Purpose: Validates form fields based on provided rules.
- **Usage**:
```javascript
let isFormValid = effortlessJS.validateForm('formId', {
    'inputId': { required: true }
});
console.log('Is Form Valid:', isFormValid);
```

## handleFormSubmit(formId, callback)
- Purpose: Handles form submission with a callback function.
- **Usage**:
```javascript
effortlessJS.handleFormSubmit('formId', function(data) {
    // Handle form submission
});
```

## resetForm(formId)
- Purpose: Resets a form and clears any validation states.
- **Usage**:
```javascript
effortlessJS.resetForm('formId');
```


