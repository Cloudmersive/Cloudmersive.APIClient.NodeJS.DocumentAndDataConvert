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
    root.CloudmersiveConvertApiClient.Base64DecodeRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Base64DecodeRequest model module.
   * @module model/Base64DecodeRequest
   * @version 2.6.4
   */

  /**
   * Constructs a new <code>Base64DecodeRequest</code>.
   * Request to decode content from Base 64 into binary
   * @alias module:model/Base64DecodeRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Base64DecodeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Base64DecodeRequest} obj Optional instance to populate.
   * @return {module:model/Base64DecodeRequest} The populated <code>Base64DecodeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Base64ContentToDecode')) {
        obj['Base64ContentToDecode'] = ApiClient.convertToType(data['Base64ContentToDecode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Input content to decode from Base 64 into binary
   * @member {String} Base64ContentToDecode
   */
  exports.prototype['Base64ContentToDecode'] = undefined;



  return exports;
}));


