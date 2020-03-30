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
    root.CloudmersiveConvertApiClient.Base64DetectRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Base64DetectRequest model module.
   * @module model/Base64DetectRequest
   * @version 2.4.3
   */

  /**
   * Constructs a new <code>Base64DetectRequest</code>.
   * Request to detect if input content is base 64 encoded
   * @alias module:model/Base64DetectRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Base64DetectRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Base64DetectRequest} obj Optional instance to populate.
   * @return {module:model/Base64DetectRequest} The populated <code>Base64DetectRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Base64ContentToDetect')) {
        obj['Base64ContentToDetect'] = ApiClient.convertToType(data['Base64ContentToDetect'], 'String');
      }
    }
    return obj;
  }

  /**
   * Input content text to detect if it is base 64 encoded
   * @member {String} Base64ContentToDetect
   */
  exports.prototype['Base64ContentToDetect'] = undefined;



  return exports;
}));

