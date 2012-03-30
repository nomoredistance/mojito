/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('flickrBinderIndex', function(Y, NAME) {

/**
 * The flickrBinderIndex module.
 *
 * @module flickrBinderIndex
 */

    /**
     * Constructor for the Binder class.
     *
     * @param mojitProxy {Object} The proxy to allow the binder to interact
     *        with its owning mojit.
     *
     * @class Binder
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            this.node = node;
            Y.log('NODE: ' + Y.dump(this.node)); 
            var nodeId = node.get('id');
            var binderId = this.mojitProxy._guid;
            Y.log(nodeId + ' node bound', 'debug', NAME);
            if (nodeId !== binderId) {
              throw new Error("bad node binding to binder!");            }
            this.node.append("<p>" + nodeId + " bound</p>");
           this.node.on('click',handleClick,  this);

          var handleClick= function() {
             this.node.one('div').set('innerHTML', "clicked on " + new Date());
        };
        },
        _updateId: function(msg) {
            var nodeId = this.node.get('id');
            msg = msg || 'bound';
            this.node.one("p").set('innerHTML', nodeId + ' ' + msg);
        }
    };

}, '0.0.1', {requires: []});