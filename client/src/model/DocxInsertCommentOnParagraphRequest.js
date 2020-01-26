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
    define(['ApiClient', 'model/DocxComment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxComment'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocxInsertCommentOnParagraphRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxComment);
  }
}(this, function(ApiClient, DocxComment) {
  'use strict';




  /**
   * The DocxInsertCommentOnParagraphRequest model module.
   * @module model/DocxInsertCommentOnParagraphRequest
   * @version 2.3.7
   */

  /**
   * Constructs a new <code>DocxInsertCommentOnParagraphRequest</code>.
   * Input to a Insert Comment on Paragraph request
   * @alias module:model/DocxInsertCommentOnParagraphRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DocxInsertCommentOnParagraphRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxInsertCommentOnParagraphRequest} obj Optional instance to populate.
   * @return {module:model/DocxInsertCommentOnParagraphRequest} The populated <code>DocxInsertCommentOnParagraphRequest</code> instance.
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
      if (data.hasOwnProperty('ParagraphPath')) {
        obj['ParagraphPath'] = ApiClient.convertToType(data['ParagraphPath'], 'String');
      }
      if (data.hasOwnProperty('CommentToInsert')) {
        obj['CommentToInsert'] = DocxComment.constructFromObject(data['CommentToInsert']);
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
   * Path to the paragraph to attach the comment to.  You can get the Path by retrieving all of the Paragraphs in document by calling Get Body and taking the Path property of the desired paragraph to add the comment to.
   * @member {String} ParagraphPath
   */
  exports.prototype['ParagraphPath'] = undefined;
  /**
   * Comment to insert
   * @member {module:model/DocxComment} CommentToInsert
   */
  exports.prototype['CommentToInsert'] = undefined;



  return exports;
}));


