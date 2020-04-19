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
    root.CloudmersiveConvertApiClient.RemoveWhitespaceFromTextRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemoveWhitespaceFromTextRequest model module.
   * @module model/RemoveWhitespaceFromTextRequest
   * @version 2.4.4
   */

  /**
   * Constructs a new <code>RemoveWhitespaceFromTextRequest</code>.
   * Request to remove whitespace from a string
   * @alias module:model/RemoveWhitespaceFromTextRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RemoveWhitespaceFromTextRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveWhitespaceFromTextRequest} obj Optional instance to populate.
   * @return {module:model/RemoveWhitespaceFromTextRequest} The populated <code>RemoveWhitespaceFromTextRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TextContainingWhitespace')) {
        obj['TextContainingWhitespace'] = ApiClient.convertToType(data['TextContainingWhitespace'], 'String');
      }
    }
    return obj;
  }

  /**
   * Input text string to remove the whitespace from
   * @member {String} TextContainingWhitespace
   */
  exports.prototype['TextContainingWhitespace'] = undefined;



  return exports;
}));


