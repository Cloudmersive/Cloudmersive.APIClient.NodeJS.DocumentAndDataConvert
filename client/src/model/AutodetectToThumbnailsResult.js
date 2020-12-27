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
    define(['ApiClient', 'model/Thumbnail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Thumbnail'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.AutodetectToThumbnailsResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.Thumbnail);
  }
}(this, function(ApiClient, Thumbnail) {
  'use strict';




  /**
   * The AutodetectToThumbnailsResult model module.
   * @module model/AutodetectToThumbnailsResult
   * @version 2.6.0
   */

  /**
   * Constructs a new <code>AutodetectToThumbnailsResult</code>.
   * Result of converting an entire document to an array of PNG thumbnails
   * @alias module:model/AutodetectToThumbnailsResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AutodetectToThumbnailsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutodetectToThumbnailsResult} obj Optional instance to populate.
   * @return {module:model/AutodetectToThumbnailsResult} The populated <code>AutodetectToThumbnailsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ThumbnailPages')) {
        obj['ThumbnailPages'] = ApiClient.convertToType(data['ThumbnailPages'], [Thumbnail]);
      }
    }
    return obj;
  }

  /**
   * Index of this thumbnail
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * A PNG thumbnail of the document page
   * @member {Array.<module:model/Thumbnail>} ThumbnailPages
   */
  exports.prototype['ThumbnailPages'] = undefined;



  return exports;
}));


