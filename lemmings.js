/*!
 * jQuery plugin for a check/uncheck all checkbox
 * Original author: @alibaabaa
 * Further changes, comments: @alibaabaa
 * Usage: $('#masterCheckboxSelector').lemmings({ group: '.childCheckboxes'});
 */
;(function ($) {
    $.fn.lemmings = function (options) {
        options = $.extend({
            group: 'input[type="checkbox"]',  //Selector for child checkboxes (i.e., the lemmings)
            parentPriority: true //When plugin is first attached, if the parent state contradicts the lemmings, which should get priority?
        }, options);

        var parent = this,
            lemmings = $(options.group).not(this).filter('input[type="checkbox"]');

        if (parent.length * lemmings.length > 0) {
            lemmings.off('change.lemmings').on('change.lemmings', function () {
                var checkedCount = lemmings.filter(':checked').length;

                if (checkedCount === lemmings.length || checkedCount == 0) {
                    parent.prop('checked', lemmings.first().is(':checked'))
                        .prop('indeterminate', false);
                } else {
                    parent.prop('indeterminate', true);
                }
            });

            parent.off('change.lemmings').on('change.lemmings', function () {
                lemmings.prop('checked', $(this).is(':checked'));
            });
            
            if (options.parentPriority) {
                parent.prop('indeterminate', false).trigger('change.lemmings');   
            } else {
                lemmings.first().trigger('change.lemmings');
            }
        }

        return this;
    };
})(jQuery);