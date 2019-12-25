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
    define(['ApiClient', 'model/PageConversionResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PageConversionResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.MultipageImageFormatConversionResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.PageConversionResult);
  }
}(this, function(ApiClient, PageConversionResult) {
  'use strict';




  /**
   * The MultipageImageFormatConversionResult model module.
   * @module model/MultipageImageFormatConversionResult
   * @version 2.2.6
   */

  /**
   * Constructs a new <code>MultipageImageFormatConversionResult</code>.
   * Result of converting a multi-page image into individual pages with a different format
   * @alias module:model/MultipageImageFormatConversionResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MultipageImageFormatConversionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultipageImageFormatConversionResult} obj Optional instance to populate.
   * @return {module:model/MultipageImageFormatConversionResult} The populated <code>MultipageImageFormatConversionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('PageCount')) {
        obj['PageCount'] = ApiClient.convertToType(data['PageCount'], 'Number');
      }
      if (data.hasOwnProperty('Pages')) {
        obj['Pages'] = ApiClient.convertToType(data['Pages'], [PageConversionResult]);
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
   * The number of pages in the converted output
   * @member {Number} PageCount
   */
  exports.prototype['PageCount'] = undefined;
  /**
   * Converted page results
   * @member {Array.<module:model/PageConversionResult>} Pages
   */
  exports.prototype['Pages'] = undefined;



  return exports;
}));


