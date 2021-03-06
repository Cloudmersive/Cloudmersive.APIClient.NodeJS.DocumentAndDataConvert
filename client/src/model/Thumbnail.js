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
    root.CloudmersiveConvertApiClient.Thumbnail = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Thumbnail model module.
   * @module model/Thumbnail
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>Thumbnail</code>.
   * Result of converting a single document page to a PNG thumbnail
   * @alias module:model/Thumbnail
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Thumbnail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Thumbnail} obj Optional instance to populate.
   * @return {module:model/Thumbnail} The populated <code>Thumbnail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Index')) {
        obj['Index'] = ApiClient.convertToType(data['Index'], 'Number');
      }
      if (data.hasOwnProperty('Content')) {
        obj['Content'] = ApiClient.convertToType(data['Content'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * Index of this thumbnail
   * @member {Number} Index
   */
  exports.prototype['Index'] = undefined;
  /**
   * A PNG thumbnail of the document page
   * @member {Blob} Content
   */
  exports.prototype['Content'] = undefined;



  return exports;
}));


