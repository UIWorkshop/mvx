function ModalViewModel (conf) {
    var self = this;

    self.title = ko.observable('').extend({format: 'upper'});
    self.type = ko.observable('');
    self.options = ko.observable([]);
    self.config = ko.observableArray([
        {key: 'index', value: 1},
        {key: 'name', value: ''},
        {key: 'label', value: ''},
        {key: 'default_value', value: ''},
        {key: 'placeholder', value: ''},
        {key: 'reminder_message', value: ''},
        {key: 'required', value: true}
    ]);
    self.save = function () {
        var newConfig = self.config();
        var type = self.type();
        var options = self.options();
        conf.save(newConfig, type, options);

        self.close();
    };
    self.close = function () {
        self.title('');
    };
    self.open = function (data) {
        var newConfig = [];
        self.config().forEach(function (keyValue) {
            var value = keyValue.value;
            if (typeof data[keyValue.key] !== 'undefined') {
                value = data[keyValue.key];
            }
            newConfig.push({
                key: keyValue.key,
                value: value
            });
        });
        self.config(newConfig);
        self.type(data.type);
        if (data.options) {
            self.options(data.options);
        }
        self.title(data.label);
    };
}