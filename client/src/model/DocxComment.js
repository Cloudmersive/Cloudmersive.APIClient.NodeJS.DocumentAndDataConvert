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
    root.CloudmersiveConvertApiClient.DocxComment = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocxComment model module.
   * @module model/DocxComment
   * @version 2.5.9
   */

  /**
   * Constructs a new <code>DocxComment</code>.
   * Comment in a Word Document
   * @alias module:model/DocxComment
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>DocxComment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxComment} obj Optional instance to populate.
   * @return {module:model/DocxComment} The populated <code>DocxComment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('Author')) {
        obj['Author'] = ApiClient.convertToType(data['Author'], 'String');
      }
      if (data.hasOwnProperty('AuthorInitials')) {
        obj['AuthorInitials'] = ApiClient.convertToType(data['AuthorInitials'], 'String');
      }
      if (data.hasOwnProperty('CommentText')) {
        obj['CommentText'] = ApiClient.convertToType(data['CommentText'], 'String');
      }
      if (data.hasOwnProperty('CommentDate')) {
        obj['CommentDate'] = ApiClient.convertToType(data['CommentDate'], 'Date');
      }
      if (data.hasOwnProperty('IsTopLevel')) {
        obj['IsTopLevel'] = ApiClient.convertToType(data['IsTopLevel'], 'Boolean');
      }
      if (data.hasOwnProperty('IsReply')) {
        obj['IsReply'] = ApiClient.convertToType(data['IsReply'], 'Boolean');
      }
      if (data.hasOwnProperty('ParentCommentPath')) {
        obj['ParentCommentPath'] = ApiClient.convertToType(data['ParentCommentPath'], 'String');
      }
      if (data.hasOwnProperty('Done')) {
        obj['Done'] = ApiClient.convertToType(data['Done'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Path to the comment in the document
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * Author name of the comment
   * @member {String} Author
   */
  exports.prototype['Author'] = undefined;
  /**
   * Initials of the author of the comment
   * @member {String} AuthorInitials
   */
  exports.prototype['AuthorInitials'] = undefined;
  /**
   * Text content of the comment
   * @member {String} CommentText
   */
  exports.prototype['CommentText'] = undefined;
  /**
   * Date timestamp of the comment
   * @member {Date} CommentDate
   */
  exports.prototype['CommentDate'] = undefined;
  /**
   * True if the comment is at the top level, false if this comment is a child reply of another comment
   * @member {Boolean} IsTopLevel
   */
  exports.prototype['IsTopLevel'] = undefined;
  /**
   * True if this comment is a reply to another comment, false otherwise
   * @member {Boolean} IsReply
   */
  exports.prototype['IsReply'] = undefined;
  /**
   * Path to the parent of this comment, if this comment is a reply, otherwise this value will be null
   * @member {String} ParentCommentPath
   */
  exports.prototype['ParentCommentPath'] = undefined;
  /**
   * True if this comment is marked as Done in Word, otherwise it is false
   * @member {Boolean} Done
   */
  exports.prototype['Done'] = undefined;



  return exports;
}));


