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
    root.CloudmersiveConvertApiClient.AlternateFileFormatCandidate = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AlternateFileFormatCandidate model module.
   * @module model/AlternateFileFormatCandidate
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>AlternateFileFormatCandidate</code>.
   * Alternate file format possibility
   * @alias module:model/AlternateFileFormatCandidate
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AlternateFileFormatCandidate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlternateFileFormatCandidate} obj Optional instance to populate.
   * @return {module:model/AlternateFileFormatCandidate} The populated <code>AlternateFileFormatCandidate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Probability')) {
        obj['Probability'] = ApiClient.convertToType(data['Probability'], 'Number');
      }
      if (data.hasOwnProperty('DetectedFileExtension')) {
        obj['DetectedFileExtension'] = ApiClient.convertToType(data['DetectedFileExtension'], 'String');
      }
      if (data.hasOwnProperty('DetectedMimeType')) {
        obj['DetectedMimeType'] = ApiClient.convertToType(data['DetectedMimeType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Probability that this extension is the right one; possible values are between 0.0 (lowest confidence) and 1.0 (highest confidence)
   * @member {Number} Probability
   */
  exports.prototype['Probability'] = undefined;
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



  return exports;
}));


