/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
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
    root.CloudmersiveConvertApiClient.CreateBlankDocxRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateBlankDocxRequest model module.
   * @module model/CreateBlankDocxRequest
   * @version 2.3.0
   */

  /**
   * Constructs a new <code>CreateBlankDocxRequest</code>.
   * Input to a Create Blank Word Document request
   * @alias module:model/CreateBlankDocxRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CreateBlankDocxRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateBlankDocxRequest} obj Optional instance to populate.
   * @return {module:model/CreateBlankDocxRequest} The populated <code>CreateBlankDocxRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InitialText')) {
        obj['InitialText'] = ApiClient.convertToType(data['InitialText'], 'String');
      }
    }
    return obj;
  }

  /**
   * Optional; initial text to include in the document
   * @member {String} InitialText
   */
  exports.prototype['InitialText'] = undefined;



  return exports;
}));


