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
    define(['ApiClient', 'model/DocxImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxImage'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ReplaceDocxParagraphRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxImage);
  }
}(this, function(ApiClient, DocxImage) {
  'use strict';




  /**
   * The ReplaceDocxParagraphRequest model module.
   * @module model/ReplaceDocxParagraphRequest
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>ReplaceDocxParagraphRequest</code>.
   * Input to a request to replace matching paragraphs in a Word DOCX document
   * @alias module:model/ReplaceDocxParagraphRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ReplaceDocxParagraphRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplaceDocxParagraphRequest} obj Optional instance to populate.
   * @return {module:model/ReplaceDocxParagraphRequest} The populated <code>ReplaceDocxParagraphRequest</code> instance.
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
      if (data.hasOwnProperty('FindString')) {
        obj['FindString'] = ApiClient.convertToType(data['FindString'], 'String');
      }
      if (data.hasOwnProperty('MatchCase')) {
        obj['MatchCase'] = ApiClient.convertToType(data['MatchCase'], 'Boolean');
      }
      if (data.hasOwnProperty('Replacement_Image')) {
        obj['Replacement_Image'] = DocxImage.constructFromObject(data['Replacement_Image']);
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
   * Required: The target string to search for in the paragraphs of the document
   * @member {String} FindString
   */
  exports.prototype['FindString'] = undefined;
  /**
   * Optional: True to match case, false to ignore case when matching
   * @member {Boolean} MatchCase
   */
  exports.prototype['MatchCase'] = undefined;
  /**
   * Optional: Image to replace the paragraph with; note that most of the fields in this object are optional and do not need to be supplied
   * @member {module:model/DocxImage} Replacement_Image
   */
  exports.prototype['Replacement_Image'] = undefined;



  return exports;
}));


