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
    root.CloudmersiveConvertApiClient.TextEncodingDetectResponse = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TextEncodingDetectResponse model module.
   * @module model/TextEncodingDetectResponse
   * @version 2.6.2
   */

  /**
   * Constructs a new <code>TextEncodingDetectResponse</code>.
   * Result of detecting text encoding
   * @alias module:model/TextEncodingDetectResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TextEncodingDetectResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextEncodingDetectResponse} obj Optional instance to populate.
   * @return {module:model/TextEncodingDetectResponse} The populated <code>TextEncodingDetectResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('TextEncoding')) {
        obj['TextEncoding'] = ApiClient.convertToType(data['TextEncoding'], 'String');
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
   * Text encoding used in file; possible values are ASCII, UTF7, UTF8, UTF16, BigEndianUnicode and UTF32
   * @member {String} TextEncoding
   */
  exports.prototype['TextEncoding'] = undefined;



  return exports;
}));


