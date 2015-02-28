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