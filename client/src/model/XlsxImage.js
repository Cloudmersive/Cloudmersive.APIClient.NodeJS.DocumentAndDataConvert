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
    root.CloudmersiveConvertApiClient.XlsxImage = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XlsxImage model module.
   * @module model/XlsxImage
   * @version 2.5.2
   */

  /**
   * Constructs a new <code>XlsxImage</code>.
   * @alias module:model/XlsxImage
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>XlsxImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XlsxImage} obj Optional instance to populate.
   * @return {module:model/XlsxImage} The populated <code>XlsxImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('ImageDataEmbedId')) {
        obj['ImageDataEmbedId'] = ApiClient.convertToType(data['ImageDataEmbedId'], 'String');
      }
      if (data.hasOwnProperty('ImageDataContentType')) {
        obj['ImageDataContentType'] = ApiClient.convertToType(data['ImageDataContentType'], 'String');
      }
      if (data.hasOwnProperty('ImageInternalFileName')) {
        obj['ImageInternalFileName'] = ApiClient.convertToType(data['ImageInternalFileName'], 'String');
      }
      if (data.hasOwnProperty('ImageContentsURL')) {
        obj['ImageContentsURL'] = ApiClient.convertToType(data['ImageContentsURL'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Path of the location of this object; leave blank for new rows
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * Read-only; internal ID for the image contents
   * @member {String} ImageDataEmbedId
   */
  exports.prototype['ImageDataEmbedId'] = undefined;
  /**
   * Read-only; image data MIME content-type
   * @member {String} ImageDataContentType
   */
  exports.prototype['ImageDataContentType'] = undefined;
  /**
   * Read-only; internal file name/path for the image
   * @member {String} ImageInternalFileName
   */
  exports.prototype['ImageInternalFileName'] = undefined;
  /**
   * URL to the image contents; file is stored in an in-memory cache and will be deleted.  Call Finish-Editing to get the contents.
   * @member {String} ImageContentsURL
   */
  exports.prototype['ImageContentsURL'] = undefined;



  return exports;
}));


