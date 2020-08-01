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
    root.CloudmersiveConvertApiClient.EmlAttachment = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmlAttachment model module.
   * @module model/EmlAttachment
   * @version 2.5.3
   */

  /**
   * Constructs a new <code>EmlAttachment</code>.
   * An EML file attachment
   * @alias module:model/EmlAttachment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>EmlAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmlAttachment} obj Optional instance to populate.
   * @return {module:model/EmlAttachment} The populated <code>EmlAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Content')) {
        obj['Content'] = ApiClient.convertToType(data['Content'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * Name of the attachment, including file extension
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * The EML attachment as a byte[]
   * @member {Blob} Content
   */
  exports.prototype['Content'] = undefined;



  return exports;
}));


