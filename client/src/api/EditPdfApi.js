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
    define(['ApiClient', 'model/PdfFormFields', 'model/PdfMetadata', 'model/PdfTextByPageResult', 'model/SetPdfFormFieldsRequest', 'model/SetPdfMetadataRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PdfFormFields'), require('../model/PdfMetadata'), require('../model/PdfTextByPageResult'), require('../model/SetPdfFormFieldsRequest'), require('../model/SetPdfMetadataRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.EditPdfApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.PdfFormFields, root.CloudmersiveConvertApiClient.PdfMetadata, root.CloudmersiveConvertApiClient.PdfTextByPageResult, root.CloudmersiveConvertApiClient.SetPdfFormFieldsRequest, root.CloudmersiveConvertApiClient.SetPdfMetadataRequest);
  }
}(this, function(ApiClient, PdfFormFields, PdfMetadata, PdfTextByPageResult, SetPdfFormFieldsRequest, SetPdfMetadataRequest) {
  'use strict';

  /**
   * EditPdf service.
   * @module api/EditPdfApi
   * @version 2.2.4
   */

  /**
   * Constructs a new EditPdfApi. 
   * @alias module:api/EditPdfApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the editPdfDecrypt operation.
     * @callback module:api/EditPdfApi~editPdfDecryptCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decrypt and password-protect a PDF
     * Decrypt a PDF document with a password.  Decrypted PDF will no longer require a password to open.
     * @param {String} password Valid password for the PDF file
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/EditPdfApi~editPdfDecryptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editPdfDecrypt = function(password, inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling editPdfDecrypt");
      }

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editPdfDecrypt");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'password': password
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pdf/decrypt', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfDeletePages operation.
     * @callback module:api/EditPdfApi~editPdfDeletePagesCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove / delete pages from a PDF document
     * Remove one or more pages from a PDF document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {Number} pageStart Page number (1 based) to start deleting pages from (inclusive).
     * @param {Number} pageEnd Page number (1 based) to stop deleting pages from (inclusive).
     * @param {module:api/EditPdfApi~editPdfDeletePagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editPdfDeletePages = function(inputFile, pageStart, pageEnd, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editPdfDeletePages");
      }

      // verify the required parameter 'pageStart' is set
      if (pageStart === undefined || pageStart === null) {
        throw new Error("Missing the required parameter 'pageStart' when calling editPdfDeletePages");
      }

      // verify the required parameter 'pageEnd' is set
      if (pageEnd === undefined || pageEnd === null) {
        throw new Error("Missing the required parameter 'pageEnd' when calling editPdfDeletePages");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'pageStart': pageStart,
        'pageEnd': pageEnd
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pdf/pages/delete', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfEncrypt operation.
     * @callback module:api/EditPdfApi~editPdfEncryptCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Encrypt and password-protect a PDF
     * Encrypt a PDF document with a password.  Set an owner password to control owner (editor/creator) permissions, and set a user (reader) password to control the viewer of the PDF.  Set the password fields null to omit the given password.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userPassword Password of a user (reader) of the PDF file
     * @param {String} opts.ownerPassword Password of a owner (creator/editor) of the PDF file
     * @param {String} opts.encryptionKeyLength Possible values are \&quot;128\&quot; (128-bit RC4 encryption) and \&quot;256\&quot; (256-bit AES encryption).  Default is 256.
     * @param {module:api/EditPdfApi~editPdfEncryptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editPdfEncrypt = function(inputFile, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editPdfEncrypt");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'userPassword': opts['userPassword'],
        'ownerPassword': opts['ownerPassword'],
        'encryptionKeyLength': opts['encryptionKeyLength']
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pdf/encrypt', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfGetFormFields operation.
     * @callback module:api/EditPdfApi~editPdfGetFormFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PdfFormFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets PDF Form fields and values
     * Encrypt a PDF document with a password.  Set an owner password to control owner (editor/creator) permissions, and set a user (reader) password to control the viewer of the PDF.  Set the password fields null to omit the given password.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/EditPdfApi~editPdfGetFormFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PdfFormFields}
     */
    this.editPdfGetFormFields = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editPdfGetFormFields");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = PdfFormFields;

      return this.apiClient.callApi(
        '/convert/edit/pdf/form/get-fields', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfGetMetadata operation.
     * @callback module:api/EditPdfApi~editPdfGetMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PdfMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get PDF document metadata
     * Returns the metadata from the PDF document, including Title, Author, etc.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/EditPdfApi~editPdfGetMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PdfMetadata}
     */
    this.editPdfGetMetadata = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editPdfGetMetadata");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = PdfMetadata;

      return this.apiClient.callApi(
        '/convert/edit/pdf/get-metadata', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfGetPdfTextByPages operation.
     * @callback module:api/EditPdfApi~editPdfGetPdfTextByPagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PdfTextByPageResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get text in a PDF document by page
     * Gets the text in a PDF by page
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/EditPdfApi~editPdfGetPdfTextByPagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PdfTextByPageResult}
     */
    this.editPdfGetPdfTextByPages = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editPdfGetPdfTextByPages");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = PdfTextByPageResult;

      return this.apiClient.callApi(
        '/convert/edit/pdf/pages/get-text', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfInsertPages operation.
     * @callback module:api/EditPdfApi~editPdfInsertPagesCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert / copy pages from one PDF document into another
     * Copy one or more pages from one PDF document (source document) and insert them into a second PDF document (destination document).
     * @param {File} sourceFile Source PDF file to copy pages from.
     * @param {File} destinationFile Destination PDF file to copy pages into.
     * @param {Number} pageStartSource Page number (1 based) to start copying pages from (inclusive) in the Source file.
     * @param {Number} pageEndSource Page number (1 based) to stop copying pages pages from (inclusive) in the Source file.
     * @param {Number} pageInsertBeforeDesitnation Page number (1 based) to insert the pages before in the Destination file.
     * @param {module:api/EditPdfApi~editPdfInsertPagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editPdfInsertPages = function(sourceFile, destinationFile, pageStartSource, pageEndSource, pageInsertBeforeDesitnation, callback) {
      var postBody = null;

      // verify the required parameter 'sourceFile' is set
      if (sourceFile === undefined || sourceFile === null) {
        throw new Error("Missing the required parameter 'sourceFile' when calling editPdfInsertPages");
      }

      // verify the required parameter 'destinationFile' is set
      if (destinationFile === undefined || destinationFile === null) {
        throw new Error("Missing the required parameter 'destinationFile' when calling editPdfInsertPages");
      }

      // verify the required parameter 'pageStartSource' is set
      if (pageStartSource === undefined || pageStartSource === null) {
        throw new Error("Missing the required parameter 'pageStartSource' when calling editPdfInsertPages");
      }

      // verify the required parameter 'pageEndSource' is set
      if (pageEndSource === undefined || pageEndSource === null) {
        throw new Error("Missing the required parameter 'pageEndSource' when calling editPdfInsertPages");
      }

      // verify the required parameter 'pageInsertBeforeDesitnation' is set
      if (pageInsertBeforeDesitnation === undefined || pageInsertBeforeDesitnation === null) {
        throw new Error("Missing the required parameter 'pageInsertBeforeDesitnation' when calling editPdfInsertPages");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'pageStartSource': pageStartSource,
        'pageEndSource': pageEndSource,
        'pageInsertBeforeDesitnation': pageInsertBeforeDesitnation
      };
      var formParams = {
        'sourceFile': sourceFile,
        'destinationFile': destinationFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pdf/pages/insert', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfRasterize operation.
     * @callback module:api/EditPdfApi~editPdfRasterizeCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rasterize a PDF to an image-based PDF
     * Rasterize a PDF into an image-based PDF.  The output is a PDF where each page is comprised of a high-resolution image, with all text, figures and other components removed.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/EditPdfApi~editPdfRasterizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editPdfRasterize = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editPdfRasterize");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pdf/rasterize', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfSetFormFields operation.
     * @callback module:api/EditPdfApi~editPdfSetFormFieldsCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets ands fills PDF Form field values
     * Fill in the form fields in a PDF form with specific values.  Use form/get-fields to enumerate the available fields and their data types in an input form.
     * @param {module:model/SetPdfFormFieldsRequest} fieldValues 
     * @param {module:api/EditPdfApi~editPdfSetFormFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editPdfSetFormFields = function(fieldValues, callback) {
      var postBody = fieldValues;

      // verify the required parameter 'fieldValues' is set
      if (fieldValues === undefined || fieldValues === null) {
        throw new Error("Missing the required parameter 'fieldValues' when calling editPdfSetFormFields");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pdf/form/set-fields', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfSetMetadata operation.
     * @callback module:api/EditPdfApi~editPdfSetMetadataCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets PDF document metadata
     * Sets (writes) metadata into the input PDF document, including Title, Author, etc.
     * @param {module:model/SetPdfMetadataRequest} request 
     * @param {module:api/EditPdfApi~editPdfSetMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editPdfSetMetadata = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editPdfSetMetadata");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pdf/set-metadata', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfSetPermissions operation.
     * @callback module:api/EditPdfApi~editPdfSetPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Encrypt, password-protect and set restricted permissions on a PDF
     * Encrypt a PDF document with a password, and set permissions on the PDF.  Set an owner password to control owner (editor/creator) permissions [required], and set a user (reader) password to control the viewer of the PDF [optional].  Set the reader password to null to omit the password.  Restrict or allow printing, copying content, document assembly, editing (read-only), form filling, modification of annotations, and degraded printing through document Digital Rights Management (DRM).
     * @param {String} ownerPassword Password of a owner (creator/editor) of the PDF file (required)
     * @param {String} userPassword Password of a user (reader) of the PDF file (optional)
     * @param {File} inputFile Input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {String} opts.encryptionKeyLength Possible values are \&quot;128\&quot; (128-bit RC4 encryption) and \&quot;256\&quot; (256-bit AES encryption).  Default is 256.
     * @param {Boolean} opts.allowPrinting Set to false to disable printing through DRM.  Default is true.
     * @param {Boolean} opts.allowDocumentAssembly Set to false to disable document assembly through DRM.  Default is true.
     * @param {Boolean} opts.allowContentExtraction Set to false to disable copying/extracting content out of the PDF through DRM.  Default is true.
     * @param {Boolean} opts.allowFormFilling Set to false to disable filling out form fields in the PDF through DRM.  Default is true.
     * @param {Boolean} opts.allowEditing Set to false to disable editing in the PDF through DRM (making the PDF read-only).  Default is true.
     * @param {Boolean} opts.allowAnnotations Set to false to disable annotations and editing of annotations in the PDF through DRM.  Default is true.
     * @param {Boolean} opts.allowDegradedPrinting Set to false to disable degraded printing of the PDF through DRM.  Default is true.
     * @param {module:api/EditPdfApi~editPdfSetPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editPdfSetPermissions = function(ownerPassword, userPassword, inputFile, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ownerPassword' is set
      if (ownerPassword === undefined || ownerPassword === null) {
        throw new Error("Missing the required parameter 'ownerPassword' when calling editPdfSetPermissions");
      }

      // verify the required parameter 'userPassword' is set
      if (userPassword === undefined || userPassword === null) {
        throw new Error("Missing the required parameter 'userPassword' when calling editPdfSetPermissions");
      }

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editPdfSetPermissions");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'ownerPassword': ownerPassword,
        'userPassword': userPassword,
        'encryptionKeyLength': opts['encryptionKeyLength'],
        'allowPrinting': opts['allowPrinting'],
        'allowDocumentAssembly': opts['allowDocumentAssembly'],
        'allowContentExtraction': opts['allowContentExtraction'],
        'allowFormFilling': opts['allowFormFilling'],
        'allowEditing': opts['allowEditing'],
        'allowAnnotations': opts['allowAnnotations'],
        'allowDegradedPrinting': opts['allowDegradedPrinting']
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pdf/encrypt/set-permissions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPdfWatermarkText operation.
     * @callback module:api/EditPdfApi~editPdfWatermarkTextCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a text watermark to a PDF
     * Adds a text watermark to a PDF
     * @param {String} watermarkText Watermark text to add to the PDF (required)
     * @param {File} inputFile Input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fontName Font Family Name for the watermark text; default is Times New Roman
     * @param {Number} opts.fontSize Font Size in points of the text; default is 150
     * @param {String} opts.fontColor Font color in hexadecimal or HTML color name; default is Red
     * @param {Number} opts.fontTransparency Font transparency between 0.0 (completely transparent) to 1.0 (fully opaque); default is 0.5
     * @param {module:api/EditPdfApi~editPdfWatermarkTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editPdfWatermarkText = function(watermarkText, inputFile, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'watermarkText' is set
      if (watermarkText === undefined || watermarkText === null) {
        throw new Error("Missing the required parameter 'watermarkText' when calling editPdfWatermarkText");
      }

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editPdfWatermarkText");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'watermarkText': watermarkText,
        'fontName': opts['fontName'],
        'fontSize': opts['fontSize'],
        'fontColor': opts['fontColor'],
        'fontTransparency': opts['fontTransparency']
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pdf/watermark/text', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
