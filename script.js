define(['jquery'], function ($) {
  'use strict';

  return function () {
    var self = this;

    this.callbacks = {
      render: function () {
        return true;
      },

      init: function () {
        return true;
      },

      bind_actions: function () {
        return true;
      },

      settings: function () {
        var $modal_body = $('.modal.' + self.get_settings().widget_code + ' .modal-body'),
            $widget_settings = $modal_body.find('.widget_settings_block');

        $widget_settings.html(
          self.render({ ref: '/tmpl/controls/button.twig' }, {
            text: 'Обычная кнопка'
          })
        );

        return true;
      },

      onSave: function () {
        return true;
      }
    };
  };
});