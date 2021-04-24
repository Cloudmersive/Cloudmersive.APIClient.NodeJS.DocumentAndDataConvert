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
    define(['ApiClient', 'model/MsgAttachment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MsgAttachment'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.MsgToHtmlResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.MsgAttachment);
  }
}(this, function(ApiClient, MsgAttachment) {
  'use strict';




  /**
   * The MsgToHtmlResult model module.
   * @module model/MsgToHtmlResult
   * @version 2.6.4
   */

  /**
   * Constructs a new <code>MsgToHtmlResult</code>.
   * Result of converting an MSG file to HTML string
   * @alias module:model/MsgToHtmlResult
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>MsgToHtmlResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgToHtmlResult} obj Optional instance to populate.
   * @return {module:model/MsgToHtmlResult} The populated <code>MsgToHtmlResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Content')) {
        obj['Content'] = ApiClient.convertToType(data['Content'], 'String');
      }
      if (data.hasOwnProperty('Body')) {
        obj['Body'] = ApiClient.convertToType(data['Body'], 'String');
      }
      if (data.hasOwnProperty('From')) {
        obj['From'] = ApiClient.convertToType(data['From'], 'String');
      }
      if (data.hasOwnProperty('To')) {
        obj['To'] = ApiClient.convertToType(data['To'], 'String');
      }
      if (data.hasOwnProperty('Cc')) {
        obj['Cc'] = ApiClient.convertToType(data['Cc'], 'String');
      }
      if (data.hasOwnProperty('ReceivedTime')) {
        obj['ReceivedTime'] = ApiClient.convertToType(data['ReceivedTime'], 'String');
      }
      if (data.hasOwnProperty('Subject')) {
        obj['Subject'] = ApiClient.convertToType(data['Subject'], 'String');
      }
      if (data.hasOwnProperty('Attachments')) {
        obj['Attachments'] = ApiClient.convertToType(data['Attachments'], [MsgAttachment]);
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
   * An HTML string version of the MSG file
   * @member {String} Content
   */
  exports.prototype['Content'] = undefined;
  /**
   * The main body of the MSG file's email as an HTML string
   * @member {String} Body
   */
  exports.prototype['Body'] = undefined;
  /**
   * The From sender of the MSG file's email
   * @member {String} From
   */
  exports.prototype['From'] = undefined;
  /**
   * The To recipients of the MSG file's email
   * @member {String} To
   */
  exports.prototype['To'] = undefined;
  /**
   * The CC recipients of the MSG file's email
   * @member {String} Cc
   */
  exports.prototype['Cc'] = undefined;
  /**
   * The time that the MSG file's email was received
   * @member {String} ReceivedTime
   */
  exports.prototype['ReceivedTime'] = undefined;
  /**
   * The subject of the MSG file's email
   * @member {String} Subject
   */
  exports.prototype['Subject'] = undefined;
  /**
   * List of all attachments for the MSG file
   * @member {Array.<module:model/MsgAttachment>} Attachments
   */
  exports.prototype['Attachments'] = undefined;



  return exports;
}));


