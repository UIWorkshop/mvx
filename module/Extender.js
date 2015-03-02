ko.extenders.format = function (target, format) {
	if (format === 'upper') {  
		var result = ko.pureComputed({
	        read: target,
	        write: function(newValue) {
	            target(newValue.toUpperCase());
	        }
	    });
	    result(target());
	    return result;
	}
};