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
    define(['ApiClient', 'model/XlsxImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XlsxImage'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetXlsxImagesResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.XlsxImage);
  }
}(this, function(ApiClient, XlsxImage) {
  'use strict';




  /**
   * The GetXlsxImagesResponse model module.
   * @module model/GetXlsxImagesResponse
   * @version 2.5.3
   */

  /**
   * Constructs a new <code>GetXlsxImagesResponse</code>.
   * Result of running a Get-Images command
   * @alias module:model/GetXlsxImagesResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetXlsxImagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetXlsxImagesResponse} obj Optional instance to populate.
   * @return {module:model/GetXlsxImagesResponse} The populated <code>GetXlsxImagesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Images')) {
        obj['Images'] = ApiClient.convertToType(data['Images'], [XlsxImage]);
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
   * Spreadsheet Images in the XLSX document
   * @member {Array.<module:model/XlsxImage>} Images
   */
  exports.prototype['Images'] = undefined;



  return exports;
}));


