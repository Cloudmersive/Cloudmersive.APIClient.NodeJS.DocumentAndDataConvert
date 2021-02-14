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
    define(['ApiClient', 'model/ConvertedJpgPage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConvertedJpgPage'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.KeynoteToJpgResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.ConvertedJpgPage);
  }
}(this, function(ApiClient, ConvertedJpgPage) {
  'use strict';




  /**
   * The KeynoteToJpgResult model module.
   * @module model/KeynoteToJpgResult
   * @version 2.6.3
   */

  /**
   * Constructs a new <code>KeynoteToJpgResult</code>.
   * Result of converting a Keynote input to a JPG array
   * @alias module:model/KeynoteToJpgResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>KeynoteToJpgResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KeynoteToJpgResult} obj Optional instance to populate.
   * @return {module:model/KeynoteToJpgResult} The populated <code>KeynoteToJpgResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('JpgResultPages')) {
        obj['JpgResultPages'] = ApiClient.convertToType(data['JpgResultPages'], [ConvertedJpgPage]);
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
   * Array of converted pages
   * @member {Array.<module:model/ConvertedJpgPage>} JpgResultPages
   */
  exports.prototype['JpgResultPages'] = undefined;



  return exports;
}));


