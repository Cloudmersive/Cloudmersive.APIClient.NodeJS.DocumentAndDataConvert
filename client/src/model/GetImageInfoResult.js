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
    define(['ApiClient', 'model/ExifValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExifValue'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetImageInfoResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.ExifValue);
  }
}(this, function(ApiClient, ExifValue) {
  'use strict';




  /**
   * The GetImageInfoResult model module.
   * @module model/GetImageInfoResult
   * @version 2.1.4
   */

  /**
   * Constructs a new <code>GetImageInfoResult</code>.
   * Result of running a get-info operation on an image
   * @alias module:model/GetImageInfoResult
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>GetImageInfoResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetImageInfoResult} obj Optional instance to populate.
   * @return {module:model/GetImageInfoResult} The populated <code>GetImageInfoResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ColorSpace')) {
        obj['ColorSpace'] = ApiClient.convertToType(data['ColorSpace'], 'String');
      }
      if (data.hasOwnProperty('ColorType')) {
        obj['ColorType'] = ApiClient.convertToType(data['ColorType'], 'String');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
      if (data.hasOwnProperty('CompressionLevel')) {
        obj['CompressionLevel'] = ApiClient.convertToType(data['CompressionLevel'], 'Number');
      }
      if (data.hasOwnProperty('ImageHashSignature')) {
        obj['ImageHashSignature'] = ApiClient.convertToType(data['ImageHashSignature'], 'String');
      }
      if (data.hasOwnProperty('HasTransparency')) {
        obj['HasTransparency'] = ApiClient.convertToType(data['HasTransparency'], 'Boolean');
      }
      if (data.hasOwnProperty('MimeType')) {
        obj['MimeType'] = ApiClient.convertToType(data['MimeType'], 'String');
      }
      if (data.hasOwnProperty('ImageFormat')) {
        obj['ImageFormat'] = ApiClient.convertToType(data['ImageFormat'], 'String');
      }
      if (data.hasOwnProperty('DPIUnit')) {
        obj['DPIUnit'] = ApiClient.convertToType(data['DPIUnit'], 'String');
      }
      if (data.hasOwnProperty('DPI')) {
        obj['DPI'] = ApiClient.convertToType(data['DPI'], 'Number');
      }
      if (data.hasOwnProperty('ColorCount')) {
        obj['ColorCount'] = ApiClient.convertToType(data['ColorCount'], 'Number');
      }
      if (data.hasOwnProperty('BitDepth')) {
        obj['BitDepth'] = ApiClient.convertToType(data['BitDepth'], 'Number');
      }
      if (data.hasOwnProperty('Comment')) {
        obj['Comment'] = ApiClient.convertToType(data['Comment'], 'String');
      }
      if (data.hasOwnProperty('ExifProfileName')) {
        obj['ExifProfileName'] = ApiClient.convertToType(data['ExifProfileName'], 'String');
      }
      if (data.hasOwnProperty('ExifValues')) {
        obj['ExifValues'] = ApiClient.convertToType(data['ExifValues'], [ExifValue]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Color space of the image
   * @member {String} ColorSpace
   */
  exports.prototype['ColorSpace'] = undefined;
  /**
   * Color type of the image
   * @member {String} ColorType
   */
  exports.prototype['ColorType'] = undefined;
  /**
   * Width in pixels of the image
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Height in pixels of the image
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;
  /**
   * Compression level value from 0 (lowest quality) to 100 (highest quality)
   * @member {Number} CompressionLevel
   */
  exports.prototype['CompressionLevel'] = undefined;
  /**
   * SHA256 hash signature of the image
   * @member {String} ImageHashSignature
   */
  exports.prototype['ImageHashSignature'] = undefined;
  /**
   * True if the image contains transparency, otherwise false
   * @member {Boolean} HasTransparency
   */
  exports.prototype['HasTransparency'] = undefined;
  /**
   * MIME type of the image format
   * @member {String} MimeType
   */
  exports.prototype['MimeType'] = undefined;
  /**
   * Image format
   * @member {String} ImageFormat
   */
  exports.prototype['ImageFormat'] = undefined;
  /**
   * Units of the DPI measurement; can be either in Inches or Centimeters
   * @member {String} DPIUnit
   */
  exports.prototype['DPIUnit'] = undefined;
  /**
   * DPI (pixels per unit, e.g. pixels per inch) of the image
   * @member {Number} DPI
   */
  exports.prototype['DPI'] = undefined;
  /**
   * Unique colors in the image
   * @member {Number} ColorCount
   */
  exports.prototype['ColorCount'] = undefined;
  /**
   * Bit depth of the image
   * @member {Number} BitDepth
   */
  exports.prototype['BitDepth'] = undefined;
  /**
   * Comment string in the image
   * @member {String} Comment
   */
  exports.prototype['Comment'] = undefined;
  /**
   * Name of the EXIF profile used
   * @member {String} ExifProfileName
   */
  exports.prototype['ExifProfileName'] = undefined;
  /**
   * EXIF tags and values embedded in the image
   * @member {Array.<module:model/ExifValue>} ExifValues
   */
  exports.prototype['ExifValues'] = undefined;



  return exports;
}));


