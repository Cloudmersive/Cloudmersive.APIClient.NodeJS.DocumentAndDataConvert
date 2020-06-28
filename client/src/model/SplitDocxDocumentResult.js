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
    define(['ApiClient', 'model/SplitDocumentResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SplitDocumentResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.SplitDocxDocumentResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.SplitDocumentResult);
  }
}(this, function(ApiClient, SplitDocumentResult) {
  'use strict';




  /**
   * The SplitDocxDocumentResult model module.
   * @module model/SplitDocxDocumentResult
   * @version 2.5.1
   */

  /**
   * Constructs a new <code>SplitDocxDocumentResult</code>.
   * The result of splitting a Word document into individual Word DOCX pages
   * @alias module:model/SplitDocxDocumentResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SplitDocxDocumentResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SplitDocxDocumentResult} obj Optional instance to populate.
   * @return {module:model/SplitDocxDocumentResult} The populated <code>SplitDocxDocumentResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ResultDocuments')) {
        obj['ResultDocuments'] = ApiClient.convertToType(data['ResultDocuments'], [SplitDocumentResult]);
      }
      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SplitDocumentResult>} ResultDocuments
   */
  exports.prototype['ResultDocuments'] = undefined;
  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;



  return exports;
}));


