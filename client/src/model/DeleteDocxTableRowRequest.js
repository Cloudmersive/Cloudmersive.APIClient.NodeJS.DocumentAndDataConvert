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
    root.CloudmersiveConvertApiClient.DeleteDocxTableRowRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteDocxTableRowRequest model module.
   * @module model/DeleteDocxTableRowRequest
   * @version 2.6.2
   */

  /**
   * Constructs a new <code>DeleteDocxTableRowRequest</code>.
   * Input to a delete DOCX table row request
   * @alias module:model/DeleteDocxTableRowRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DeleteDocxTableRowRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteDocxTableRowRequest} obj Optional instance to populate.
   * @return {module:model/DeleteDocxTableRowRequest} The populated <code>DeleteDocxTableRowRequest</code> instance.
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
      if (data.hasOwnProperty('TablePath')) {
        obj['TablePath'] = ApiClient.convertToType(data['TablePath'], 'String');
      }
      if (data.hasOwnProperty('TableRowRowIndex')) {
        obj['TableRowRowIndex'] = ApiClient.convertToType(data['TableRowRowIndex'], 'Number');
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
   * Path to the table to delete the row from
   * @member {String} TablePath
   */
  exports.prototype['TablePath'] = undefined;
  /**
   * 0-based index of the row to delete (e.g. 0, 1, 2, ...) in the table
   * @member {Number} TableRowRowIndex
   */
  exports.prototype['TableRowRowIndex'] = undefined;



  return exports;
}));


