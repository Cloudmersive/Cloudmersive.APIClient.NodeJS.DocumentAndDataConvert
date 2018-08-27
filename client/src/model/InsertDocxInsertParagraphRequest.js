/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
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
    root.CloudmersiveConvertApiClient.InsertDocxInsertParagraphRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxParagraph);
  }
}(this, function(ApiClient, DocxParagraph) {
  'use strict';




  /**
   * The InsertDocxInsertParagraphRequest model module.
   * @module model/InsertDocxInsertParagraphRequest
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>InsertDocxInsertParagraphRequest</code>.
   * Input to a Insert Paragraph request
   * @alias module:model/InsertDocxInsertParagraphRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>InsertDocxInsertParagraphRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsertDocxInsertParagraphRequest} obj Optional instance to populate.
   * @return {module:model/InsertDocxInsertParagraphRequest} The populated <code>InsertDocxInsertParagraphRequest</code> instance.
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
      if (data.hasOwnProperty('ParagraphToInsert')) {
        obj['ParagraphToInsert'] = DocxParagraph.constructFromObject(data['ParagraphToInsert']);
      }
      if (data.hasOwnProperty('InsertPlacement')) {
        obj['InsertPlacement'] = ApiClient.convertToType(data['InsertPlacement'], 'String');
      }
      if (data.hasOwnProperty('InsertPath')) {
        obj['InsertPath'] = ApiClient.convertToType(data['InsertPath'], 'String');
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
   * Table you would like to insert
   * @member {module:model/DocxParagraph} ParagraphToInsert
   */
  exports.prototype['ParagraphToInsert'] = undefined;
  /**
   * Optional; default is DocumentEnd.  Placement Type of the insert; possible values are: DocumentStart (very beginning of the document), DocumentEnd (very end of the document), BeforeExistingObject (right before an existing object - fill in the InsertPath field using the Path value from an existing object), AfterExistingObject (right after an existing object - fill in the InsertPath field using the Path value from an existing object)
   * @member {String} InsertPlacement
   */
  exports.prototype['InsertPlacement'] = undefined;
  /**
   * Optional; location within the document to insert the object; fill in the InsertPath field using the Path value from an existing object.  Used with InsertPlacement of BeforeExistingObject or AfterExistingObject
   * @member {String} InsertPath
   */
  exports.prototype['InsertPath'] = undefined;



  return exports;
}));

