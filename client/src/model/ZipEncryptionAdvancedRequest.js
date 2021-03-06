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
    root.CloudmersiveConvertApiClient.ZipEncryptionAdvancedRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZipEncryptionAdvancedRequest model module.
   * @module model/ZipEncryptionAdvancedRequest
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>ZipEncryptionAdvancedRequest</code>.
   * Request to encrypt an existing Zip Archive file and protect it with a password
   * @alias module:model/ZipEncryptionAdvancedRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ZipEncryptionAdvancedRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZipEncryptionAdvancedRequest} obj Optional instance to populate.
   * @return {module:model/ZipEncryptionAdvancedRequest} The populated <code>ZipEncryptionAdvancedRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputFileContents')) {
        obj['InputFileContents'] = ApiClient.convertToType(data['InputFileContents'], 'Blob');
      }
      if (data.hasOwnProperty('Password')) {
        obj['Password'] = ApiClient.convertToType(data['Password'], 'String');
      }
      if (data.hasOwnProperty('EncryptionAlgorithm')) {
        obj['EncryptionAlgorithm'] = ApiClient.convertToType(data['EncryptionAlgorithm'], 'String');
      }
    }
    return obj;
  }

  /**
   * Input Zip File archive contents in bytes
   * @member {Blob} InputFileContents
   */
  exports.prototype['InputFileContents'] = undefined;
  /**
   * Password to place on the Zip file; the longer the password, the more secure
   * @member {String} Password
   */
  exports.prototype['Password'] = undefined;
  /**
   * Encryption algorithm to use; possible values are AES-256 (recommended), AES-128, and PK-Zip (not recommended; legacy, weak encryption algorithm).  Default is AES-256.
   * @member {String} EncryptionAlgorithm
   */
  exports.prototype['EncryptionAlgorithm'] = undefined;



  return exports;
}));


