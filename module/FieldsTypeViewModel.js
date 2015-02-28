function FieldsTypeViewModel () {
    var self = this;

    self.fields = [
        {
            name: 'text',
            label: 'Text',
            type: 'text',
            default_value: '',
            placeholder: '',
            reminder_message: '',
            required: true
        },
        {
            name: 'textinfo',
            label: 'TextInfo',
            type: 'textinfo',
            default_value: '',
            placeholder: '',
            reminder_message: '',
            required: true
        },
        {
            name: 'textarea',
            label: 'Textarea',
            type: 'textarea',
            default_value: '',
            placeholder: '',
            reminder_message: '',
            required: true
        },
        {
            name: 'radio',
            label: 'Radio',
            type: 'radio',
            default_value: '',
            placeholder: '',
            reminder_message: '',
            required: true,
            options: ['radio1', 'radio2']
        },
        {
            name: 'checkbox',
            label: 'Checkbox',
            type: 'checkbox',
            default_value: '',
            placeholder: '',
            reminder_message: '',
            required: true,
            options: ['checkbox1', 'checkbox2']
        },
        {
            name: 'select',
            label: 'Select',
            type: 'select',
            default_value: '',
            placeholder: 'select one...',
            reminder_message: '',
            required: true,
            options: ['option1', 'option2', 'option3']
        }
    ];
    self.form = ko.observableArray([]);
    self.fieldType = ko.observable();
    self.addField = function () {
        var field = self.fieldType();
        field.index = self.form().length;
        self.form.push(field);
    };
    self.editField = function () {
    };
}