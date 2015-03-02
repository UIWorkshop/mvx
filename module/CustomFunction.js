ko.observableArray.fn.punctuate = function (sentence) {
	var words = sentence.split('_');
	words.forEach(function (word, index) {
		words[index] = word.charAt(0).toUpperCase() + word.slice(1);
	});
	return words.join(' ');
};