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
    root.CloudmersiveConvertApiClient.PdfMetadata = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PdfMetadata model module.
   * @module model/PdfMetadata
   * @version 2.2.8
   */

  /**
   * Constructs a new <code>PdfMetadata</code>.
   * Result of an autodetect/get-info operation
   * @alias module:model/PdfMetadata
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>PdfMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfMetadata} obj Optional instance to populate.
   * @return {module:model/PdfMetadata} The populated <code>PdfMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Title')) {
        obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
      }
      if (data.hasOwnProperty('Keywords')) {
        obj['Keywords'] = ApiClient.convertToType(data['Keywords'], 'String');
      }
      if (data.hasOwnProperty('Subject')) {
        obj['Subject'] = ApiClient.convertToType(data['Subject'], 'String');
      }
      if (data.hasOwnProperty('Author')) {
        obj['Author'] = ApiClient.convertToType(data['Author'], 'String');
      }
      if (data.hasOwnProperty('Creator')) {
        obj['Creator'] = ApiClient.convertToType(data['Creator'], 'String');
      }
      if (data.hasOwnProperty('DateModified')) {
        obj['DateModified'] = ApiClient.convertToType(data['DateModified'], 'Date');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'Date');
      }
      if (data.hasOwnProperty('PageCount')) {
        obj['PageCount'] = ApiClient.convertToType(data['PageCount'], 'Number');
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
   * Title of the document
   * @member {String} Title
   */
  exports.prototype['Title'] = undefined;
  /**
   * Keywords of the document
   * @member {String} Keywords
   */
  exports.prototype['Keywords'] = undefined;
  /**
   * Subject of the document
   * @member {String} Subject
   */
  exports.prototype['Subject'] = undefined;
  /**
   * User name of the creator/author of the document, if available, null if not available
   * @member {String} Author
   */
  exports.prototype['Author'] = undefined;
  /**
   * Creator of the document
   * @member {String} Creator
   */
  exports.prototype['Creator'] = undefined;
  /**
   * The timestamp that the document was last modified, if available, null if not available
   * @member {Date} DateModified
   */
  exports.prototype['DateModified'] = undefined;
  /**
   * The timestamp that the document was created, if available, null if not available
   * @member {Date} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * The number of pages in the document
   * @member {Number} PageCount
   */
  exports.prototype['PageCount'] = undefined;



  return exports;
}));


