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
    define(['ApiClient', 'model/AlternateFileFormatCandidate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AlternateFileFormatCandidate'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.AutodetectGetInfoResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.AlternateFileFormatCandidate);
  }
}(this, function(ApiClient, AlternateFileFormatCandidate) {
  'use strict';




  /**
   * The AutodetectGetInfoResult model module.
   * @module model/AutodetectGetInfoResult
   * @version 2.1.3
   */

  /**
   * Constructs a new <code>AutodetectGetInfoResult</code>.
   * Result of an autodetect/get-info operation
   * @alias module:model/AutodetectGetInfoResult
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>AutodetectGetInfoResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutodetectGetInfoResult} obj Optional instance to populate.
   * @return {module:model/AutodetectGetInfoResult} The populated <code>AutodetectGetInfoResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('DetectedFileExtension')) {
        obj['DetectedFileExtension'] = ApiClient.convertToType(data['DetectedFileExtension'], 'String');
      }
      if (data.hasOwnProperty('DetectedMimeType')) {
        obj['DetectedMimeType'] = ApiClient.convertToType(data['DetectedMimeType'], 'String');
      }
      if (data.hasOwnProperty('PageCount')) {
        obj['PageCount'] = ApiClient.convertToType(data['PageCount'], 'Number');
      }
      if (data.hasOwnProperty('Author')) {
        obj['Author'] = ApiClient.convertToType(data['Author'], 'String');
      }
      if (data.hasOwnProperty('DateModified')) {
        obj['DateModified'] = ApiClient.convertToType(data['DateModified'], 'Date');
      }
      if (data.hasOwnProperty('AlternateFileTypeCandidates')) {
        obj['AlternateFileTypeCandidates'] = ApiClient.convertToType(data['AlternateFileTypeCandidates'], [AlternateFileFormatCandidate]);
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
   * Detected file extension of the file format, with a leading period
   * @member {String} DetectedFileExtension
   */
  exports.prototype['DetectedFileExtension'] = undefined;
  /**
   * MIME type of this file extension
   * @member {String} DetectedMimeType
   */
  exports.prototype['DetectedMimeType'] = undefined;
  /**
   * Number of pages in a page-based document; for presentations, this is the number of slides and for a spreadsheet this is the number of worksheets.  Contains 0 when the page count cannot be determined, or if the concept of page count does not apply (e.g. for an image)
   * @member {Number} PageCount
   */
  exports.prototype['PageCount'] = undefined;
  /**
   * User name of the creator/author of the document, if available, null if not available
   * @member {String} Author
   */
  exports.prototype['Author'] = undefined;
  /**
   * The timestamp that the document was last modified, if available, null if not available
   * @member {Date} DateModified
   */
  exports.prototype['DateModified'] = undefined;
  /**
   * Alternate file type options and their probability
   * @member {Array.<module:model/AlternateFileFormatCandidate>} AlternateFileTypeCandidates
   */
  exports.prototype['AlternateFileTypeCandidates'] = undefined;



  return exports;
}));


