/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ViewerResponse = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ViewerResponse model module.
   * @module model/ViewerResponse
   * @version 1.2.2
   */

  /**
   * Constructs a new <code>ViewerResponse</code>.
   * Result of creating a viewer
   * @alias module:model/ViewerResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ViewerResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ViewerResponse} obj Optional instance to populate.
   * @return {module:model/ViewerResponse} The populated <code>ViewerResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('HtmlEmbed')) {
        obj['HtmlEmbed'] = ApiClient.convertToType(data['HtmlEmbed'], 'String');
      }
      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} HtmlEmbed
   */
  exports.prototype['HtmlEmbed'] = undefined;
  /**
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;



  return exports;
}));

