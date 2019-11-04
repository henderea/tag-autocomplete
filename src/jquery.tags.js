const _ = require('lodash');

(function($) {
    class Tagger {
        constructor($el, options) {
            this._options = options;
            this._$el = $($el);
            this._$el.data('tagger', this);
        }
    }

    class Taggers {
        constructor() {
            this._taggers = [];
        }
    }

    $.fn.tagger = function(options) {
        if(_.isNil(options)) {
            let tagger = $(this).data('tagger');
            if(!_.isNil(tagger)) {
                return tagger;
            }
        }
        this.each(function() {
        });
    }
})(window.jQuery);