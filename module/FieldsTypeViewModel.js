function FieldsTypeViewModel (conf) {
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
        },
        {
            name: 'file',
            label: 'File',
            type: 'textfile',
            default_value: '',
            placeholder: '',
            reminder_message: 'Chose a file to upload',
            required: true
        }
    ];
    self.form = ko.observableArray([]);
    self.fieldType = ko.observable();
    var i = 0;
    self.addField = function () {
        var field = self.fieldType();
        self.form.push({
            index: i++,
            name: field.name,
            label: field.label,
            type: field.type,
            default_value: field.default_value,
            placeholder: field.placeholder,
            reminder_message: field.reminder_message,
            required: field.required,
            options: field.options
        });
    };
    self.editField = conf.edit;
    self.removeField = conf.remove;
}