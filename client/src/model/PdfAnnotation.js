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
    root.CloudmersiveConvertApiClient.PdfAnnotation = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PdfAnnotation model module.
   * @module model/PdfAnnotation
   * @version 2.2.9
   */

  /**
   * Constructs a new <code>PdfAnnotation</code>.
   * PDF Annotation details
   * @alias module:model/PdfAnnotation
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>PdfAnnotation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfAnnotation} obj Optional instance to populate.
   * @return {module:model/PdfAnnotation} The populated <code>PdfAnnotation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Title')) {
        obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
      }
      if (data.hasOwnProperty('AnnotationType')) {
        obj['AnnotationType'] = ApiClient.convertToType(data['AnnotationType'], 'String');
      }
      if (data.hasOwnProperty('PageNumber')) {
        obj['PageNumber'] = ApiClient.convertToType(data['PageNumber'], 'Number');
      }
      if (data.hasOwnProperty('AnnotationIndex')) {
        obj['AnnotationIndex'] = ApiClient.convertToType(data['AnnotationIndex'], 'Number');
      }
      if (data.hasOwnProperty('Subject')) {
        obj['Subject'] = ApiClient.convertToType(data['Subject'], 'String');
      }
      if (data.hasOwnProperty('TextContents')) {
        obj['TextContents'] = ApiClient.convertToType(data['TextContents'], 'String');
      }
      if (data.hasOwnProperty('CreationDate')) {
        obj['CreationDate'] = ApiClient.convertToType(data['CreationDate'], 'Date');
      }
      if (data.hasOwnProperty('ModifiedDate')) {
        obj['ModifiedDate'] = ApiClient.convertToType(data['ModifiedDate'], 'Date');
      }
      if (data.hasOwnProperty('LeftX')) {
        obj['LeftX'] = ApiClient.convertToType(data['LeftX'], 'Number');
      }
      if (data.hasOwnProperty('TopY')) {
        obj['TopY'] = ApiClient.convertToType(data['TopY'], 'Number');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Title of the annotation; this is often the author of the annotation in Acrobat-created PDF files
   * @member {String} Title
   */
  exports.prototype['Title'] = undefined;
  /**
   * Type of the annotation; possible values are Text
   * @member {String} AnnotationType
   */
  exports.prototype['AnnotationType'] = undefined;
  /**
   * The 1-based index of the page containing the annotation
   * @member {Number} PageNumber
   */
  exports.prototype['PageNumber'] = undefined;
  /**
   * The 0-based index of the annotation in the document
   * @member {Number} AnnotationIndex
   */
  exports.prototype['AnnotationIndex'] = undefined;
  /**
   * Subject of the annotation
   * @member {String} Subject
   */
  exports.prototype['Subject'] = undefined;
  /**
   * Text contents of the annotation
   * @member {String} TextContents
   */
  exports.prototype['TextContents'] = undefined;
  /**
   * Date that the annotation was created
   * @member {Date} CreationDate
   */
  exports.prototype['CreationDate'] = undefined;
  /**
   * Date that the annotation was last modified
   * @member {Date} ModifiedDate
   */
  exports.prototype['ModifiedDate'] = undefined;
  /**
   * Left X coordinate for the location of the annotation
   * @member {Number} LeftX
   */
  exports.prototype['LeftX'] = undefined;
  /**
   * Top Y coordination of the location of the annotation
   * @member {Number} TopY
   */
  exports.prototype['TopY'] = undefined;
  /**
   * Width of the annotation
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Height of the annotation
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;



  return exports;
}));


