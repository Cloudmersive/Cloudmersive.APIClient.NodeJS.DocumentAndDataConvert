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
    root.CloudmersiveConvertApiClient.ExifValue = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExifValue model module.
   * @module model/ExifValue
   * @version 2.1.8
   */

  /**
   * Constructs a new <code>ExifValue</code>.
   * EXIF tag and value
   * @alias module:model/ExifValue
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ExifValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExifValue} obj Optional instance to populate.
   * @return {module:model/ExifValue} The populated <code>ExifValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Tag')) {
        obj['Tag'] = ApiClient.convertToType(data['Tag'], 'String');
      }
      if (data.hasOwnProperty('DataType')) {
        obj['DataType'] = ApiClient.convertToType(data['DataType'], 'String');
      }
      if (data.hasOwnProperty('DataValue')) {
        obj['DataValue'] = ApiClient.convertToType(data['DataValue'], 'String');
      }
    }
    return obj;
  }

  /**
   * Tag name for the EXIF value
   * @member {String} Tag
   */
  exports.prototype['Tag'] = undefined;
  /**
   * Date type of the EXIF value
   * @member {String} DataType
   */
  exports.prototype['DataType'] = undefined;
  /**
   * Value, formatted as a string of the EXIF value
   * @member {String} DataValue
   */
  exports.prototype['DataValue'] = undefined;



  return exports;
}));


