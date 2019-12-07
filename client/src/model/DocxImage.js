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
    root.CloudmersiveConvertApiClient.DocxImage = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocxImage model module.
   * @module model/DocxImage
   * @version 2.2.1
   */

  /**
   * Constructs a new <code>DocxImage</code>.
   * @alias module:model/DocxImage
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>DocxImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxImage} obj Optional instance to populate.
   * @return {module:model/DocxImage} The populated <code>DocxImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('ImageName')) {
        obj['ImageName'] = ApiClient.convertToType(data['ImageName'], 'String');
      }
      if (data.hasOwnProperty('ImageId')) {
        obj['ImageId'] = ApiClient.convertToType(data['ImageId'], 'Number');
      }
      if (data.hasOwnProperty('ImageDescription')) {
        obj['ImageDescription'] = ApiClient.convertToType(data['ImageDescription'], 'String');
      }
      if (data.hasOwnProperty('ImageWidth')) {
        obj['ImageWidth'] = ApiClient.convertToType(data['ImageWidth'], 'Number');
      }
      if (data.hasOwnProperty('ImageHeight')) {
        obj['ImageHeight'] = ApiClient.convertToType(data['ImageHeight'], 'Number');
      }
      if (data.hasOwnProperty('XOffset')) {
        obj['XOffset'] = ApiClient.convertToType(data['XOffset'], 'Number');
      }
      if (data.hasOwnProperty('YOffset')) {
        obj['YOffset'] = ApiClient.convertToType(data['YOffset'], 'Number');
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
      if (data.hasOwnProperty('InlineWithText')) {
        obj['InlineWithText'] = ApiClient.convertToType(data['InlineWithText'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The Path of the location of this object; leave blank for new tables
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * The Name of the image
   * @member {String} ImageName
   */
  exports.prototype['ImageName'] = undefined;
  /**
   * The Id of the image
   * @member {Number} ImageId
   */
  exports.prototype['ImageId'] = undefined;
  /**
   * The Description of the image
   * @member {String} ImageDescription
   */
  exports.prototype['ImageDescription'] = undefined;
  /**
   * Width of the image in EMUs (English Metric Units); set to 0 to default to page width and aspect-ratio based height
   * @member {Number} ImageWidth
   */
  exports.prototype['ImageWidth'] = undefined;
  /**
   * Height of the image in EMUs (English Metric Units); set to 0 to default to page width and aspect-ratio based height
   * @member {Number} ImageHeight
   */
  exports.prototype['ImageHeight'] = undefined;
  /**
   * X (horizontal) offset of the image
   * @member {Number} XOffset
   */
  exports.prototype['XOffset'] = undefined;
  /**
   * Y (vertical) offset of the image
   * @member {Number} YOffset
   */
  exports.prototype['YOffset'] = undefined;
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
  /**
   * True if the image is inline with the text; false if it is floating
   * @member {Boolean} InlineWithText
   */
  exports.prototype['InlineWithText'] = undefined;



  return exports;
}));


