ko.bindingHandlers.arrayInline = {
    init: function (elm, valueAccessor) {
        var value = valueAccessor();
        elm.addEventListener('keyup', function () {
            value(elm.value.split('\n'));
        }, false);
    },
    update: function (elm, valueAccessor) {
        var value = valueAccessor();
        var valueUnwrap = ko.unwrap(value);
        elm.value = (valueUnwrap && valueUnwrap.join) ? valueUnwrap.join('\n') : '';
    }
};