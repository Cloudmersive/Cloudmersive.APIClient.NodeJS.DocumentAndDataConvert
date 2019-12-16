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
    root.CloudmersiveConvertApiClient.ReplaceStringRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReplaceStringRequest model module.
   * @module model/ReplaceStringRequest
   * @version 2.2.4
   */

  /**
   * Constructs a new <code>ReplaceStringRequest</code>.
   * Input to a string replacement request
   * @alias module:model/ReplaceStringRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ReplaceStringRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplaceStringRequest} obj Optional instance to populate.
   * @return {module:model/ReplaceStringRequest} The populated <code>ReplaceStringRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputFileBytes')) {
        obj['InputFileBytes'] = ApiClient.convertToType(data['InputFileBytes'], 'Blob');
      }
      if (data.hasOwnProperty('InputFileUrl')) {
        obj['InputFileUrl'] = ApiClient.convertToType(data['InputFileUrl'], 'String');
      }
      if (data.hasOwnProperty('MatchString')) {
        obj['MatchString'] = ApiClient.convertToType(data['MatchString'], 'String');
      }
      if (data.hasOwnProperty('ReplaceString')) {
        obj['ReplaceString'] = ApiClient.convertToType(data['ReplaceString'], 'String');
      }
      if (data.hasOwnProperty('MatchCase')) {
        obj['MatchCase'] = ApiClient.convertToType(data['MatchCase'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Optional: Bytes of the input file to operate on
   * @member {Blob} InputFileBytes
   */
  exports.prototype['InputFileBytes'] = undefined;
  /**
   * Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
   * @member {String} InputFileUrl
   */
  exports.prototype['InputFileUrl'] = undefined;
  /**
   * String to search for and match against, to be replaced
   * @member {String} MatchString
   */
  exports.prototype['MatchString'] = undefined;
  /**
   * String to replace the matched values with
   * @member {String} ReplaceString
   */
  exports.prototype['ReplaceString'] = undefined;
  /**
   * True if the case should be matched, false for case insensitive match
   * @member {Boolean} MatchCase
   */
  exports.prototype['MatchCase'] = undefined;



  return exports;
}));


