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
    root.CloudmersiveConvertApiClient.DocxTopLevelComment = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxComment);
  }
}(this, function(ApiClient, DocxComment) {
  'use strict';




  /**
   * The DocxTopLevelComment model module.
   * @module model/DocxTopLevelComment
   * @version 2.5.2
   */

  /**
   * Constructs a new <code>DocxTopLevelComment</code>.
   * Top-level Comment in a Word Document
   * @alias module:model/DocxTopLevelComment
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DocxTopLevelComment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxTopLevelComment} obj Optional instance to populate.
   * @return {module:model/DocxTopLevelComment} The populated <code>DocxTopLevelComment</code> instance.
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
      if (data.hasOwnProperty('ReplyChildComments')) {
        obj['ReplyChildComments'] = ApiClient.convertToType(data['ReplyChildComments'], [DocxComment]);
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
   * Child comments, that are replies to this one
   * @member {Array.<module:model/DocxComment>} ReplyChildComments
   */
  exports.prototype['ReplyChildComments'] = undefined;
  /**
   * True if this comment is marked as Done in Word, otherwise it is false
   * @member {Boolean} Done
   */
  exports.prototype['Done'] = undefined;



  return exports;
}));


