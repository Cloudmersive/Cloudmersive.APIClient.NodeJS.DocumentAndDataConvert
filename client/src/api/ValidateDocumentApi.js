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
    define(['ApiClient', 'model/AutodetectDocumentValidationResult', 'model/DocumentValidationResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AutodetectDocumentValidationResult'), require('../model/DocumentValidationResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ValidateDocumentApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.AutodetectDocumentValidationResult, root.CloudmersiveConvertApiClient.DocumentValidationResult);
  }
}(this, function(ApiClient, AutodetectDocumentValidationResult, DocumentValidationResult) {
  'use strict';

  /**
   * ValidateDocument service.
   * @module api/ValidateDocumentApi
   * @version 2.5.3
   */

  /**
   * Constructs a new ValidateDocumentApi. 
   * @alias module:api/ValidateDocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the validateDocumentAutodetectValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentAutodetectValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AutodetectDocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Autodetect content type and validate
     * Automatically detect the type of content, verify and validate that the content is indeed fully valid at depth, and then report the validation result.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentAutodetectValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AutodetectDocumentValidationResult}
     */
    this.validateDocumentAutodetectValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentAutodetectValidation");
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
      var returnType = AutodetectDocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/autodetect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentCsvValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentCsvValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a CSV file document (CSV)
     * Validate a CSV file document (CSV); if the document is not valid, identifies the errors in the document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentCsvValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentCsvValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentCsvValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/csv', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentDocxValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentDocxValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a Word document (DOCX)
     * Validate a Word document (DOCX); if the document is not valid, identifies the errors in the document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentDocxValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentDocxValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentDocxValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/docx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentEmlValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentEmlValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate if an EML file is executable
     * Validate if an input file is an EML email file; if the document is not valid
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentEmlValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentEmlValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentEmlValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/eml', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentExecutableValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentExecutableValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate if a file is executable
     * Validate if an input file is a binary executable file; if the document is not valid
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentExecutableValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentExecutableValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentExecutableValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/executable', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentGZipValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentGZipValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a GZip Archive file (gzip or gz)
     * Validate a GZip archive file (GZIP or GZ)
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentGZipValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentGZipValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentGZipValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/gzip', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentJsonValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentJsonValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a JSON file
     * Validate a JSON (JavaScript Object Notation) document file; if the document is not valid, identifies the errors in the document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentJsonValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentJsonValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentJsonValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/json', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentMsgValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentMsgValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate if an MSG file is executable
     * Validate if an input file is an MSG email file; if the document is not valid
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentMsgValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentMsgValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentMsgValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/msg', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentPdfValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentPdfValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a PDF document file
     * Validate a PDF document; if the document is not valid, identifies the errors in the document.  Also checks if the PDF is password protected.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentPdfValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentPdfValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentPdfValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentPptxValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentPptxValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a PowerPoint presentation (PPTX)
     * Validate a PowerPoint presentation (PPTX); if the document is not valid, identifies the errors in the document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentPptxValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentPptxValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentPptxValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/pptx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentRarValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentRarValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a RAR Archive file (RAR)
     * Validate a RAR archive file (RAR)
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentRarValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentRarValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentRarValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/rar', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentTarValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentTarValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a TAR Tarball Archive file (TAR)
     * Validate a TAR tarball archive file (TAR)
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentTarValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentTarValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentTarValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/tar', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentXlsxValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentXlsxValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a Excel document (XLSX)
     * Validate a Excel document (XLSX); if the document is not valid, identifies the errors in the document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentXlsxValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentXlsxValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentXlsxValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/xlsx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentXmlValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentXmlValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate an XML file
     * Validate an XML document file; if the document is not valid, identifies the errors in the document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentXmlValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentXmlValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentXmlValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/xml', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentZipValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentZipValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a Zip Archive file (zip)
     * Validate a Zip archive file (ZIP)
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentZipValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentZipValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentZipValidation");
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
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/zip', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
