define('app/views/graph_list', ['app/views/templated'],
    //
    //  Graph List View
    //
    //  @returns Class
    //
    function (TemplatedView) {

        'use strict';

        return TemplatedView.extend({


            //
            //
            //  Properties
            //
            //


            //
            //
            //  Initialization
            //
            //


            load: function () {
                info('graphs list view inserted');
            }.on('didInsertElement'),


            unload: function () {
                Mist.graphsController.close();
            }.on('willDestroyElement'),


            //
            //
            //  Methods
            //
            //


            //
            //
            //  Observers
            //
            //

        });
    }
);
