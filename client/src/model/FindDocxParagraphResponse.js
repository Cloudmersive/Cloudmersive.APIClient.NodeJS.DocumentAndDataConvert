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
    define(['ApiClient', 'model/DocxParagraph'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxParagraph'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.FindDocxParagraphResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxParagraph);
  }
}(this, function(ApiClient, DocxParagraph) {
  'use strict';




  /**
   * The FindDocxParagraphResponse model module.
   * @module model/FindDocxParagraphResponse
   * @version 2.5.1
   */

  /**
   * Constructs a new <code>FindDocxParagraphResponse</code>.
   * Result of performing a find matching paragraphs operation on a Word Document
   * @alias module:model/FindDocxParagraphResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FindDocxParagraphResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FindDocxParagraphResponse} obj Optional instance to populate.
   * @return {module:model/FindDocxParagraphResponse} The populated <code>FindDocxParagraphResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('MatchingParagraphs')) {
        obj['MatchingParagraphs'] = ApiClient.convertToType(data['MatchingParagraphs'], [DocxParagraph]);
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if successful; false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Matching paragraphs
   * @member {Array.<module:model/DocxParagraph>} MatchingParagraphs
   */
  exports.prototype['MatchingParagraphs'] = undefined;
  /**
   * Count of matching paragraphs
   * @member {Number} Count
   */
  exports.prototype['Count'] = undefined;



  return exports;
}));


