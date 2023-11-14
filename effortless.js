var effortlessJS = {
    action: function(elementId, eventType, handler) {
        var element = document.getElementById(elementId);
        if (element) {
            element.addEventListener(eventType, handler);
        } else {
            console.error("Element not found: " + elementId);
        }
    },

    getAjax: function(url) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        var jsonResponse = JSON.parse(xhr.responseText);
                        resolve(jsonResponse);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.onerror = function() {
                reject(new Error("Network Error"));
            };
            xhr.send();
        });
    },

    postAjax: function(url, data) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.onerror = function() {
                reject(new Error("Network Error"));
            };
            xhr.send(JSON.stringify(data));
        });
    },

       updateWithAjax: function (url, elementId, templateFunction) {
        this.getAjax(url)
            .then(data => {
                var element = document.getElementById(elementId);
                if (!element) {
                    console.error("Element not found: " + elementId);
                    return;
                }

                var htmlContent = data.map(item => templateFunction(item)).join('');
                element.innerHTML = htmlContent;
            })
            .catch(error => {
                console.error('Error in updateWithAjax:', error);
            });
    },

    show: function(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.style.display = '';
        } else {
            console.error("Element not found: " + elementId);
        }
    },

    hide: function(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.style.display = 'none';
        } else {
            console.error("Element not found: " + elementId);
        }
    },

    toggle: function(buttonId, showElementId, hideElementId) {
        this.action(buttonId, 'click', function() {
            effortlessJS.show(showElementId);
            effortlessJS.hide(hideElementId);
        });
    },

    getFormData: function(formId) {
        const form = document.getElementById(formId);
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    },

    validateForm: function(formId, rules) {
        const form = document.getElementById(formId);
        let isValid = true;
        for (const fieldId in rules) {
            const input = form.querySelector(`#${fieldId}`);
            const rule = rules[fieldId];
            if (rule.required && !input.value) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        }
        return isValid;
    },

    handleFormSubmit: function(formId, callback) {
        const form = document.getElementById(formId);
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const data = this.getFormData(formId);
            if (callback(data)) {
                // Additional actions on successful validation can be added here
            }
        }.bind(this));
    },

    resetForm: function(formId) {
        const form = document.getElementById(formId);
        form.reset();
        const inputs = form.querySelectorAll('.is-invalid');
        inputs.forEach(input => input.classList.remove('is-invalid'));
    }
};
