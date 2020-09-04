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
    root.CloudmersiveConvertApiClient.CsvFileResult = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsvFileResult model module.
   * @module model/CsvFileResult
   * @version 2.5.6
   */

  /**
   * Constructs a new <code>CsvFileResult</code>.
   * CSV file result
   * @alias module:model/CsvFileResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CsvFileResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CsvFileResult} obj Optional instance to populate.
   * @return {module:model/CsvFileResult} The populated <code>CsvFileResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Title')) {
        obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
      }
      if (data.hasOwnProperty('FileContents')) {
        obj['FileContents'] = ApiClient.convertToType(data['FileContents'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * Title of the CSV file
   * @member {String} Title
   */
  exports.prototype['Title'] = undefined;
  /**
   * Contents of the CSV file
   * @member {Blob} FileContents
   */
  exports.prototype['FileContents'] = undefined;



  return exports;
}));


