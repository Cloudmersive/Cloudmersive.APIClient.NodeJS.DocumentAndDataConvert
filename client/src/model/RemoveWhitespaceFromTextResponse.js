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
    root.CloudmersiveConvertApiClient.RemoveWhitespaceFromTextResponse = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemoveWhitespaceFromTextResponse model module.
   * @module model/RemoveWhitespaceFromTextResponse
   * @version 2.3.7
   */

  /**
   * Constructs a new <code>RemoveWhitespaceFromTextResponse</code>.
   * Result of removing whitespace from a string
   * @alias module:model/RemoveWhitespaceFromTextResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RemoveWhitespaceFromTextResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveWhitespaceFromTextResponse} obj Optional instance to populate.
   * @return {module:model/RemoveWhitespaceFromTextResponse} The populated <code>RemoveWhitespaceFromTextResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('TextContentResult')) {
        obj['TextContentResult'] = ApiClient.convertToType(data['TextContentResult'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Result of performing a remove whitespace from string operation
   * @member {String} TextContentResult
   */
  exports.prototype['TextContentResult'] = undefined;



  return exports;
}));


