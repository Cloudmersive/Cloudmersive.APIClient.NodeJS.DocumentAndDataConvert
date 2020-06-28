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
    root.CloudmersiveConvertApiClient.ConvertedPngPage = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ConvertedPngPage model module.
   * @module model/ConvertedPngPage
   * @version 2.5.1
   */

  /**
   * Constructs a new <code>ConvertedPngPage</code>.
   * A single converted page
   * @alias module:model/ConvertedPngPage
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ConvertedPngPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConvertedPngPage} obj Optional instance to populate.
   * @return {module:model/ConvertedPngPage} The populated <code>ConvertedPngPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PageNumber')) {
        obj['PageNumber'] = ApiClient.convertToType(data['PageNumber'], 'Number');
      }
      if (data.hasOwnProperty('URL')) {
        obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
      }
    }
    return obj;
  }

  /**
   * Page number of the converted page, starting with 1
   * @member {Number} PageNumber
   */
  exports.prototype['PageNumber'] = undefined;
  /**
   * URL to the PNG file of this page; file is stored in an in-memory cache and will be deleted
   * @member {String} URL
   */
  exports.prototype['URL'] = undefined;



  return exports;
}));


