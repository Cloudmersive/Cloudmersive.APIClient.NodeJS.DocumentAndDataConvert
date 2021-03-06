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
    root.CloudmersiveConvertApiClient.CreateZipArchiveRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.ZipDirectory, root.CloudmersiveConvertApiClient.ZipFile);
  }
}(this, function(ApiClient, ZipDirectory, ZipFile) {
  'use strict';




  /**
   * The CreateZipArchiveRequest model module.
   * @module model/CreateZipArchiveRequest
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>CreateZipArchiveRequest</code>.
   * Request to create a Zip Archive
   * @alias module:model/CreateZipArchiveRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CreateZipArchiveRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateZipArchiveRequest} obj Optional instance to populate.
   * @return {module:model/CreateZipArchiveRequest} The populated <code>CreateZipArchiveRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FilesInZip')) {
        obj['FilesInZip'] = ApiClient.convertToType(data['FilesInZip'], [ZipFile]);
      }
      if (data.hasOwnProperty('DirectoriesInZip')) {
        obj['DirectoriesInZip'] = ApiClient.convertToType(data['DirectoriesInZip'], [ZipDirectory]);
      }
    }
    return obj;
  }

  /**
   * Top-level files in the root directory fo the zip file
   * @member {Array.<module:model/ZipFile>} FilesInZip
   */
  exports.prototype['FilesInZip'] = undefined;
  /**
   * Top-level directories in the root directory of the zip; directories can contain sub-directories and files
   * @member {Array.<module:model/ZipDirectory>} DirectoriesInZip
   */
  exports.prototype['DirectoriesInZip'] = undefined;



  return exports;
}));


