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
    root.CloudmersiveConvertApiClient.GetFileTypeIconResult = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetFileTypeIconResult model module.
   * @module model/GetFileTypeIconResult
   * @version 2.5.4
   */

  /**
   * Constructs a new <code>GetFileTypeIconResult</code>.
   * Result of getting a file type icon from a file extension
   * @alias module:model/GetFileTypeIconResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetFileTypeIconResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFileTypeIconResult} obj Optional instance to populate.
   * @return {module:model/GetFileTypeIconResult} The populated <code>GetFileTypeIconResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Icon')) {
        obj['Icon'] = ApiClient.convertToType(data['Icon'], 'Blob');
      }
      if (data.hasOwnProperty('Extension')) {
        obj['Extension'] = ApiClient.convertToType(data['Extension'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * PNG icon as a byte array
   * @member {Blob} Icon
   */
  exports.prototype['Icon'] = undefined;
  /**
   * Extension used for the icon
   * @member {String} Extension
   */
  exports.prototype['Extension'] = undefined;



  return exports;
}));


