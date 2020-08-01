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
    root.CloudmersiveConvertApiClient.PageConversionResult = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PageConversionResult model module.
   * @module model/PageConversionResult
   * @version 2.5.3
   */

  /**
   * Constructs a new <code>PageConversionResult</code>.
   * Converted page as an image
   * @alias module:model/PageConversionResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PageConversionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageConversionResult} obj Optional instance to populate.
   * @return {module:model/PageConversionResult} The populated <code>PageConversionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Filename')) {
        obj['Filename'] = ApiClient.convertToType(data['Filename'], 'String');
      }
      if (data.hasOwnProperty('FileBytes')) {
        obj['FileBytes'] = ApiClient.convertToType(data['FileBytes'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * File name of the image in the converted file format
   * @member {String} Filename
   */
  exports.prototype['Filename'] = undefined;
  /**
   * File bytes (contents) of the image in converted file format
   * @member {Blob} FileBytes
   */
  exports.prototype['FileBytes'] = undefined;



  return exports;
}));


