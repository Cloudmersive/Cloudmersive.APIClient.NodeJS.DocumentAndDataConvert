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
    define(['ApiClient', 'model/DocxTopLevelComment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxTopLevelComment'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetDocxCommentsHierarchicalResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxTopLevelComment);
  }
}(this, function(ApiClient, DocxTopLevelComment) {
  'use strict';




  /**
   * The GetDocxCommentsHierarchicalResponse model module.
   * @module model/GetDocxCommentsHierarchicalResponse
   * @version 2.5.1
   */

  /**
   * Constructs a new <code>GetDocxCommentsHierarchicalResponse</code>.
   * Result of getting comments hierarchically from a Word Document DOCX
   * @alias module:model/GetDocxCommentsHierarchicalResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetDocxCommentsHierarchicalResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDocxCommentsHierarchicalResponse} obj Optional instance to populate.
   * @return {module:model/GetDocxCommentsHierarchicalResponse} The populated <code>GetDocxCommentsHierarchicalResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Comments')) {
        obj['Comments'] = ApiClient.convertToType(data['Comments'], [DocxTopLevelComment]);
      }
      if (data.hasOwnProperty('TopLevelCommentCount')) {
        obj['TopLevelCommentCount'] = ApiClient.convertToType(data['TopLevelCommentCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Comments in the document
   * @member {Array.<module:model/DocxTopLevelComment>} Comments
   */
  exports.prototype['Comments'] = undefined;
  /**
   * The number of comments in the document
   * @member {Number} TopLevelCommentCount
   */
  exports.prototype['TopLevelCommentCount'] = undefined;



  return exports;
}));


