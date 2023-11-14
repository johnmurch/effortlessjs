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

## updateWithAjax(url,elementId, template)
- **Purpose**: Perform an AJAX update with template
- **Usage**:
```javascript
function rowTemplate(item) {
    return `<tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
            </tr>`;
}

listenJS.updateWithAjax('https://example.com/data.json', 'tableBody', rowTemplate);
````

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
## addClass: function(elementId, className)
- Purpose: Add class to element.
- **Usage**:
```javascript
effortlessJS.addClass('toggleButtonId', 'newClass');
````

## removeClass: function(elementId, className)
- Purpose: Removes class from element.
- **Usage**:
```javascript
effortlessJS.removeClass('toggleButtonId', 'newClass');
````

## setAttribute: function(elementId, attribute, value)
- Purpose: Sets attribute for an element.
- **Usage**:
```javascript
effortlessJS.setAttribute('toplink', 'href', 'https://www.google.com');
````

## removeAttribute: function(elementId, attribute)
- Purpose: Removes attribute from an element.
- **Usage**:
```javascript
effortlessJS.setAttribute('toplink', 'href');
````

## getText: function(elementId)
- Purpose: Gets text from element.
- **Usage**:
```javascript
effortlessJS.getText('content');
````

## setText: function(elementId, text)
- Purpose: Sets text for an element.
- **Usage**:
```javascript
effortlessJS.setText('content', 'this is the longest song ever');
````

## getHTML: function(elementId)
- Purpose: Gets HTML from element.
- **Usage**:
```javascript
effortlessJS.getHTML('content');
````

## setHTML: function(elementId, text)
- Purpose: Sets HTML for an element.
- **Usage**:
```javascript
effortlessJS.setHTML('content', '<h1>Hello!</h1>');
````

## onHover: function(elementId, hoverInHandler, hoverOutHandler)
- Purpose: Trigger onHover for an element
- **Usage**:
```javascript
effortlessJS.onHover('navItem', 
    function() { showDropdownMenu(); }, 
    function() { hideDropdownMenu(); }
);
````

## focus: function(elementId)
- Purpose: Sets focus on the specified element.
- **Usage**:
```javascript
effortlessJS.action('searchIcon', 'click', function() {
    effortlessJS.focus('searchInput');
});
````

## blur: function(elementId)
- Purpose: Removes focus from the specified element.
- **Usage**:
```javascript
effortlessJS.action('autocompleteSuggestion', 'click', function() {
    effortlessJS.blur('autocompleteInput');
});
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


