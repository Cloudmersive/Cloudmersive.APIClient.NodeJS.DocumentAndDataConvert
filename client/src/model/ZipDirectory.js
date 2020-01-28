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
    define(['ApiClient', 'model/ZipDirectory', 'model/ZipFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZipDirectory'), require('./ZipFile'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ZipDirectory = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.ZipDirectory, root.CloudmersiveConvertApiClient.ZipFile);
  }
}(this, function(ApiClient, ZipDirectory, ZipFile) {
  'use strict';




  /**
   * The ZipDirectory model module.
   * @module model/ZipDirectory
   * @version 2.3.8
   */

  /**
   * Constructs a new <code>ZipDirectory</code>.
   * Representation of a directory in a zip file
   * @alias module:model/ZipDirectory
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ZipDirectory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZipDirectory} obj Optional instance to populate.
   * @return {module:model/ZipDirectory} The populated <code>ZipDirectory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DirectoryName')) {
        obj['DirectoryName'] = ApiClient.convertToType(data['DirectoryName'], 'String');
      }
      if (data.hasOwnProperty('DirectoriesInDirectory')) {
        obj['DirectoriesInDirectory'] = ApiClient.convertToType(data['DirectoriesInDirectory'], [ZipDirectory]);
      }
      if (data.hasOwnProperty('FilesInDirectory')) {
        obj['FilesInDirectory'] = ApiClient.convertToType(data['FilesInDirectory'], [ZipFile]);
      }
    }
    return obj;
  }

  /**
   * Name of this directory
   * @member {String} DirectoryName
   */
  exports.prototype['DirectoryName'] = undefined;
  /**
   * Child directories contained directly in this directory
   * @member {Array.<module:model/ZipDirectory>} DirectoriesInDirectory
   */
  exports.prototype['DirectoriesInDirectory'] = undefined;
  /**
   * Child files contained directly in this directory
   * @member {Array.<module:model/ZipFile>} FilesInDirectory
   */
  exports.prototype['FilesInDirectory'] = undefined;



  return exports;
}));


