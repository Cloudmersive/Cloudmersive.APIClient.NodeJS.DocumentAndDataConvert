# cloudmersive-convert-api-client

CloudmersiveConvertApiClient - JavaScript client for cloudmersive-convert-api-client
Convert API lets you effortlessly convert file formats and types.
[Cloudmersive Document and Data Conversion API](https://www.cloudmersive.com/convert-api) provides advanced document conversion, editing and generation capabilities.

- API version: v1
- Package version: 2.8.0


## Installation

### For the [Cloudmersive Document and Data Conversion API](https://www.cloudmersive.com/convert-api)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-convert-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-convert-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-convert-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');

var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveConvertApiClient.CompareDocumentApi()

var inputFile1 = "/path/to/file.txt"; // {File} First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // {File} Second input file to perform the operation on (more than 2 can be supplied).

var opts = { 
  'autorepair': true // {Boolean} Optional; automatically repair input documents that have errors (default is true)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.compareDocumentDocx(inputFile1, inputFile2, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveConvertApiClient.CompareDocumentApi* | [**compareDocumentDocx**](docs/CompareDocumentApi.md#compareDocumentDocx) | **POST** /convert/compare/docx | Compare Two Word DOCX
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataCsvToJson**](docs/ConvertDataApi.md#convertDataCsvToJson) | **POST** /convert/csv/to/json | Convert CSV to JSON conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataCsvToXml**](docs/ConvertDataApi.md#convertDataCsvToXml) | **POST** /convert/csv/to/xml | Convert CSV to XML conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataJsonStringToXml**](docs/ConvertDataApi.md#convertDataJsonStringToXml) | **POST** /convert/json-string/to/xml | Convert JSON String to XML conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataJsonToXml**](docs/ConvertDataApi.md#convertDataJsonToXml) | **POST** /convert/json/to/xml | Convert JSON Object to XML conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXlsToJson**](docs/ConvertDataApi.md#convertDataXlsToJson) | **POST** /convert/xls/to/json | Convert Excel (97-2003) XLS to JSON conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXlsxToJson**](docs/ConvertDataApi.md#convertDataXlsxToJson) | **POST** /convert/xlsx/to/json | Convert Excel XLSX to JSON conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXlsxToXml**](docs/ConvertDataApi.md#convertDataXlsxToXml) | **POST** /convert/xlsx/to/xml | Convert Excel XLSX to XML conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlEditAddAttributeWithXPath**](docs/ConvertDataApi.md#convertDataXmlEditAddAttributeWithXPath) | **POST** /convert/xml/edit/xpath/add-attribute | Adds an attribute to all XML nodes matching XPath expression
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlEditAddChildWithXPath**](docs/ConvertDataApi.md#convertDataXmlEditAddChildWithXPath) | **POST** /convert/xml/edit/xpath/add-child | Adds an XML node as a child to XML nodes matching XPath expression
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlEditRemoveAllChildNodesWithXPath**](docs/ConvertDataApi.md#convertDataXmlEditRemoveAllChildNodesWithXPath) | **POST** /convert/xml/edit/xpath/remove-all-children | Removes, deletes all children of nodes matching XPath expression, but does not remove the nodes
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlEditReplaceWithXPath**](docs/ConvertDataApi.md#convertDataXmlEditReplaceWithXPath) | **POST** /convert/xml/edit/xpath/replace | Replaces XML nodes matching XPath expression with new node
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlEditSetValueWithXPath**](docs/ConvertDataApi.md#convertDataXmlEditSetValueWithXPath) | **POST** /convert/xml/edit/xpath/set-value | Sets the value contents of XML nodes matching XPath expression
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlFilterWithXPath**](docs/ConvertDataApi.md#convertDataXmlFilterWithXPath) | **POST** /convert/xml/select/xpath | Filter, select XML nodes using XPath expression, get results
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlQueryWithXQuery**](docs/ConvertDataApi.md#convertDataXmlQueryWithXQuery) | **POST** /convert/xml/query/xquery | Query an XML file using XQuery query, get results
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlQueryWithXQueryMulti**](docs/ConvertDataApi.md#convertDataXmlQueryWithXQueryMulti) | **POST** /convert/xml/query/xquery/multi | Query multiple XML files using XQuery query, get results
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlRemoveWithXPath**](docs/ConvertDataApi.md#convertDataXmlRemoveWithXPath) | **POST** /convert/xml/edit/xpath/remove | Remove, delete XML nodes and items matching XPath expression
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlToJson**](docs/ConvertDataApi.md#convertDataXmlToJson) | **POST** /convert/xml/to/json | Convert XML to JSON conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlTransformWithXsltToXml**](docs/ConvertDataApi.md#convertDataXmlTransformWithXsltToXml) | **POST** /convert/xml/transform/xslt/to/xml | Transform XML document file with XSLT into a new XML document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectGetInfo**](docs/ConvertDocumentApi.md#convertDocumentAutodetectGetInfo) | **POST** /convert/autodetect/get-info | Get document type information
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToJpg**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToJpg) | **POST** /convert/autodetect/to/jpg | Convert Document to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToPdf**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToPdf) | **POST** /convert/autodetect/to/pdf | Convert Document to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToPdfBatchJob**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToPdfBatchJob) | **POST** /convert/autodetect/to/pdf/batch-job | Convert Document to PDF as Batch Job
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToPngArray**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToPngArray) | **POST** /convert/autodetect/to/png | Convert Document to PNG array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToThumbnail**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToThumbnail) | **POST** /convert/autodetect/to/thumbnail | Convert File to Thumbnail Image
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToThumbnailsAdvanced**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToThumbnailsAdvanced) | **POST** /convert/autodetect/to/thumbnail/advanced | Convert File to Thumbnail Image Object
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToTxt**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToTxt) | **POST** /convert/autodetect/to/txt | Convert Document to Text (txt)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentCsvMultiToXlsx**](docs/ConvertDocumentApi.md#convertDocumentCsvMultiToXlsx) | **POST** /convert/csv/multi/to/xlsx | Convert Multiple CSV Files into a Single XLSX Spreadsheet
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentCsvToHtml**](docs/ConvertDocumentApi.md#convertDocumentCsvToHtml) | **POST** /convert/csv/to/html | Convert CSV to HTML document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentCsvToPdf**](docs/ConvertDocumentApi.md#convertDocumentCsvToPdf) | **POST** /convert/csv/to/pdf | Convert CSV to PDF document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentCsvToXlsx**](docs/ConvertDocumentApi.md#convertDocumentCsvToXlsx) | **POST** /convert/csv/to/xlsx | Convert CSV to Excel XLSX Spreadsheet
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocToDocx**](docs/ConvertDocumentApi.md#convertDocumentDocToDocx) | **POST** /convert/doc/to/docx | Convert Word DOC (97-03) Document to DOCX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocToPdf**](docs/ConvertDocumentApi.md#convertDocumentDocToPdf) | **POST** /convert/doc/to/pdf | Convert Word DOC (97-03) Document to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocToTxt**](docs/ConvertDocumentApi.md#convertDocumentDocToTxt) | **POST** /convert/doc/to/txt | Convert Word DOC (97-03) Document to Text (txt)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocxToDoc**](docs/ConvertDocumentApi.md#convertDocumentDocxToDoc) | **POST** /convert/docx/to/doc | Convert Word DOCX Document to Legacy Word DOC (97-03)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocxToHtml**](docs/ConvertDocumentApi.md#convertDocumentDocxToHtml) | **POST** /convert/docx/to/html | Convert Word DOCX Document to HTML Document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocxToJpg**](docs/ConvertDocumentApi.md#convertDocumentDocxToJpg) | **POST** /convert/docx/to/jpg | Convert Word DOCX Document to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocxToPdf**](docs/ConvertDocumentApi.md#convertDocumentDocxToPdf) | **POST** /convert/docx/to/pdf | Convert Word DOCX Document to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocxToPng**](docs/ConvertDocumentApi.md#convertDocumentDocxToPng) | **POST** /convert/docx/to/png | Convert Word DOCX Document to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocxToRtf**](docs/ConvertDocumentApi.md#convertDocumentDocxToRtf) | **POST** /convert/docx/to/rtf | Convert Word DOCX Document to RTF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocxToTxt**](docs/ConvertDocumentApi.md#convertDocumentDocxToTxt) | **POST** /convert/docx/to/txt | Convert Word DOCX Document to Text (txt)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentEmlToHtml**](docs/ConvertDocumentApi.md#convertDocumentEmlToHtml) | **POST** /convert/eml/to/html | Convert Email EML file to HTML string
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentEmlToJpg**](docs/ConvertDocumentApi.md#convertDocumentEmlToJpg) | **POST** /convert/eml/to/jpg | Convert Email EML file to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentEmlToPdf**](docs/ConvertDocumentApi.md#convertDocumentEmlToPdf) | **POST** /convert/eml/to/pdf | Convert Email EML file to PDF document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentEmlToPng**](docs/ConvertDocumentApi.md#convertDocumentEmlToPng) | **POST** /convert/eml/to/png | Convert Email EML file to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentGetAsyncJobStatus**](docs/ConvertDocumentApi.md#convertDocumentGetAsyncJobStatus) | **GET** /convert/batch-job/status | Get the status and result of a Convert Document Batch Job
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentGetFileTypeIcon**](docs/ConvertDocumentApi.md#convertDocumentGetFileTypeIcon) | **POST** /convert/autodetect/get-icon | Get PNG icon file for the file extension
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentGetFileTypeIconAdvanced**](docs/ConvertDocumentApi.md#convertDocumentGetFileTypeIconAdvanced) | **POST** /convert/autodetect/get-icon/advanced | Get PNG icon byte array for the file extension
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentHtmlToPdf**](docs/ConvertDocumentApi.md#convertDocumentHtmlToPdf) | **POST** /convert/html/to/pdf | Convert HTML document file to PDF Document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentHtmlToPng**](docs/ConvertDocumentApi.md#convertDocumentHtmlToPng) | **POST** /convert/html/to/png | Convert HTML document file to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentHtmlToTxt**](docs/ConvertDocumentApi.md#convertDocumentHtmlToTxt) | **POST** /convert/html/to/txt | HTML Document file to Text (txt)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentKeynoteToJpg**](docs/ConvertDocumentApi.md#convertDocumentKeynoteToJpg) | **POST** /convert/key/to/jpg | Convert Keynote Presentation (KEY) to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentKeynoteToPdf**](docs/ConvertDocumentApi.md#convertDocumentKeynoteToPdf) | **POST** /convert/key/to/pdf | Convert Keynote Presentation (KEY) to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentKeynoteToPng**](docs/ConvertDocumentApi.md#convertDocumentKeynoteToPng) | **POST** /convert/key/to/png | Convert Keynote Presentation (KEY) to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentKeynoteToPptx**](docs/ConvertDocumentApi.md#convertDocumentKeynoteToPptx) | **POST** /convert/key/to/pptx | Convert Keynote Presentation (KEY) to PPTX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentMsgToHtml**](docs/ConvertDocumentApi.md#convertDocumentMsgToHtml) | **POST** /convert/msg/to/html | Convert Email MSG file to HTML string
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentMsgToJpg**](docs/ConvertDocumentApi.md#convertDocumentMsgToJpg) | **POST** /convert/msg/to/jpg | Convert Email MSG file to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentMsgToPdf**](docs/ConvertDocumentApi.md#convertDocumentMsgToPdf) | **POST** /convert/msg/to/pdf | Convert Email MSG file to PDF document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentMsgToPng**](docs/ConvertDocumentApi.md#convertDocumentMsgToPng) | **POST** /convert/msg/to/png | Convert Email MSG file to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdpToJpg**](docs/ConvertDocumentApi.md#convertDocumentOdpToJpg) | **POST** /convert/odp/to/jpg | Convert ODP Presentation to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdpToPdf**](docs/ConvertDocumentApi.md#convertDocumentOdpToPdf) | **POST** /convert/odp/to/pdf | Convert ODP Presentation to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdpToPng**](docs/ConvertDocumentApi.md#convertDocumentOdpToPng) | **POST** /convert/odp/to/png | Convert ODP Presentation to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdpToPptx**](docs/ConvertDocumentApi.md#convertDocumentOdpToPptx) | **POST** /convert/odp/to/pptx | Convert ODP Presentation to PPTX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdsToJpg**](docs/ConvertDocumentApi.md#convertDocumentOdsToJpg) | **POST** /convert/ods/to/jpg | Convert ODS Spreadsheet to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdsToPdf**](docs/ConvertDocumentApi.md#convertDocumentOdsToPdf) | **POST** /convert/ods/to/pdf | Convert ODS Spreadsheet to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdsToPng**](docs/ConvertDocumentApi.md#convertDocumentOdsToPng) | **POST** /convert/ods/to/png | Convert ODS Spreadsheet to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdsToXlsx**](docs/ConvertDocumentApi.md#convertDocumentOdsToXlsx) | **POST** /convert/ods/to/xlsx | Convert ODS Spreadsheet to XLSX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdtToDocx**](docs/ConvertDocumentApi.md#convertDocumentOdtToDocx) | **POST** /convert/odt/to/docx | Convert ODT Text File to Word DOCX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdtToJpg**](docs/ConvertDocumentApi.md#convertDocumentOdtToJpg) | **POST** /convert/odt/to/jpg | Convert ODT Text File to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdtToPdf**](docs/ConvertDocumentApi.md#convertDocumentOdtToPdf) | **POST** /convert/odt/to/pdf | Convert ODT Text File to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentOdtToPng**](docs/ConvertDocumentApi.md#convertDocumentOdtToPng) | **POST** /convert/odt/to/png | Convert ODT Text File to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToDocx**](docs/ConvertDocumentApi.md#convertDocumentPdfToDocx) | **POST** /convert/pdf/to/docx | Convert PDF to Word DOCX Document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToDocxRasterize**](docs/ConvertDocumentApi.md#convertDocumentPdfToDocxRasterize) | **POST** /convert/pdf/to/docx/rasterize | Convert PDF to Word DOCX Document based on rasterized version of the PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToJpg**](docs/ConvertDocumentApi.md#convertDocumentPdfToJpg) | **POST** /convert/pdf/to/jpg | Convert PDF to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToPngArray**](docs/ConvertDocumentApi.md#convertDocumentPdfToPngArray) | **POST** /convert/pdf/to/png | Convert PDF to PNG Image Array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToPngArrayDirect**](docs/ConvertDocumentApi.md#convertDocumentPdfToPngArrayDirect) | **POST** /convert/pdf/to/png/direct | Convert PDF to PNG Image Array (Direct)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToPngSingle**](docs/ConvertDocumentApi.md#convertDocumentPdfToPngSingle) | **POST** /convert/pdf/to/png/merge-single | Convert PDF to Single PNG image
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToPptx**](docs/ConvertDocumentApi.md#convertDocumentPdfToPptx) | **POST** /convert/pdf/to/pptx | Convert PDF to PowerPoint PPTX Presentation
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToTiff**](docs/ConvertDocumentApi.md#convertDocumentPdfToTiff) | **POST** /convert/pdf/to/tiff | Convert PDF to TIFF image
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToTxt**](docs/ConvertDocumentApi.md#convertDocumentPdfToTxt) | **POST** /convert/pdf/to/txt | Convert PDF Document to Text (txt)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPngArrayToPdf**](docs/ConvertDocumentApi.md#convertDocumentPngArrayToPdf) | **POST** /convert/png/to/pdf | Convert PNG Array to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPngArrayToPdfFlattenTransparency**](docs/ConvertDocumentApi.md#convertDocumentPngArrayToPdfFlattenTransparency) | **POST** /convert/png/to/pdf/remove-transparency | Convert PNG Array to PDF and remove transparency
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptToPdf**](docs/ConvertDocumentApi.md#convertDocumentPptToPdf) | **POST** /convert/ppt/to/pdf | Convert PowerPoint PPT (97-03) Presentation to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptToPptx**](docs/ConvertDocumentApi.md#convertDocumentPptToPptx) | **POST** /convert/ppt/to/pptx | Convert PowerPoint PPT (97-03) Presentation to PPTX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptxToPdf**](docs/ConvertDocumentApi.md#convertDocumentPptxToPdf) | **POST** /convert/pptx/to/pdf | Convert PowerPoint PPTX Presentation to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptxToPng**](docs/ConvertDocumentApi.md#convertDocumentPptxToPng) | **POST** /convert/pptx/to/png | Convert PowerPoint PPTX to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptxToPpt**](docs/ConvertDocumentApi.md#convertDocumentPptxToPpt) | **POST** /convert/pptx/to/ppt | Convert PowerPoint PPTX presentation to Legacy PowerPoint PPT (97-03)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptxToTxt**](docs/ConvertDocumentApi.md#convertDocumentPptxToTxt) | **POST** /convert/pptx/to/txt | Convert PowerPoint PPTX Presentation to Text (txt)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentRtfToDocx**](docs/ConvertDocumentApi.md#convertDocumentRtfToDocx) | **POST** /convert/rtf/to/docx | Convert Rich Text Format RTF to DOCX Document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentRtfToHtml**](docs/ConvertDocumentApi.md#convertDocumentRtfToHtml) | **POST** /convert/rtf/to/html | Convert Rich Text Format RTF to HTML Document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentRtfToJpg**](docs/ConvertDocumentApi.md#convertDocumentRtfToJpg) | **POST** /convert/rtf/to/jpg | Convert Rich Text Format RTF to JPG/JPEG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentRtfToPdf**](docs/ConvertDocumentApi.md#convertDocumentRtfToPdf) | **POST** /convert/rtf/to/pdf | Convert Rich Text Format RTF to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentRtfToPng**](docs/ConvertDocumentApi.md#convertDocumentRtfToPng) | **POST** /convert/rtf/to/png | Convert Rich Text Format RTF to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentTxtToPdf**](docs/ConvertDocumentApi.md#convertDocumentTxtToPdf) | **POST** /convert/txt/to/pdf | Convert TXT text file to PDF Document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsToCsv**](docs/ConvertDocumentApi.md#convertDocumentXlsToCsv) | **POST** /convert/xls/to/csv | Convert Excel XLS (97-03) Spreadsheet to CSV
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsToPdf**](docs/ConvertDocumentApi.md#convertDocumentXlsToPdf) | **POST** /convert/xls/to/pdf | Convert Excel XLS (97-03) Spreadsheet to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsToXlsx**](docs/ConvertDocumentApi.md#convertDocumentXlsToXlsx) | **POST** /convert/xls/to/xlsx | Convert Excel XLS (97-03) Spreadsheet to XLSX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToCsv**](docs/ConvertDocumentApi.md#convertDocumentXlsxToCsv) | **POST** /convert/xlsx/to/csv | Convert Excel XLSX Spreadsheet to CSV, Single Worksheet
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToCsvMulti**](docs/ConvertDocumentApi.md#convertDocumentXlsxToCsvMulti) | **POST** /convert/xlsx/to/csv/multi | Convert Excel XLSX Spreadsheet to CSV, Multiple Worksheets
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToHtml**](docs/ConvertDocumentApi.md#convertDocumentXlsxToHtml) | **POST** /convert/xlsx/to/html | Convert Excel XLSX Spreadsheet to HTML Document
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToPdf**](docs/ConvertDocumentApi.md#convertDocumentXlsxToPdf) | **POST** /convert/xlsx/to/pdf | Convert Excel XLSX Spreadsheet to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToPng**](docs/ConvertDocumentApi.md#convertDocumentXlsxToPng) | **POST** /convert/xlsx/to/png | Convert Excel XLSX spreadsheet to PNG image array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToTxt**](docs/ConvertDocumentApi.md#convertDocumentXlsxToTxt) | **POST** /convert/xlsx/to/txt | Convert Excel XLSX Spreadsheet to Text (txt)
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToXls**](docs/ConvertDocumentApi.md#convertDocumentXlsxToXls) | **POST** /convert/xlsx/to/xls | Convert Excel XLSX Spreadsheet to Legacy Excel XLS (97-03)
*CloudmersiveConvertApiClient.ConvertImageApi* | [**convertImageGetImageInfo**](docs/ConvertImageApi.md#convertImageGetImageInfo) | **POST** /convert/image/get-info | Get information about an image
*CloudmersiveConvertApiClient.ConvertImageApi* | [**convertImageImageFormatConvert**](docs/ConvertImageApi.md#convertImageImageFormatConvert) | **POST** /convert/image/{format1}/to/{format2} | Image format conversion
*CloudmersiveConvertApiClient.ConvertImageApi* | [**convertImageImageSetDPI**](docs/ConvertImageApi.md#convertImageImageSetDPI) | **POST** /convert/image/set-dpi/{dpi} | Change image DPI
*CloudmersiveConvertApiClient.ConvertImageApi* | [**convertImageMultipageImageFormatConvert**](docs/ConvertImageApi.md#convertImageMultipageImageFormatConvert) | **POST** /convert/image-multipage/{format1}/to/{format2} | Multi-page image format conversion
*CloudmersiveConvertApiClient.ConvertTemplateApi* | [**convertTemplateApplyDocxTemplate**](docs/ConvertTemplateApi.md#convertTemplateApplyDocxTemplate) | **POST** /convert/template/docx/apply | Apply Word DOCX template
*CloudmersiveConvertApiClient.ConvertTemplateApi* | [**convertTemplateApplyHtmlTemplate**](docs/ConvertTemplateApi.md#convertTemplateApplyHtmlTemplate) | **POST** /convert/template/html/apply | Apply HTML template
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebHtmlToDocx**](docs/ConvertWebApi.md#convertWebHtmlToDocx) | **POST** /convert/html/to/docx | Convert HTML to Word DOCX Document
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebHtmlToPdf**](docs/ConvertWebApi.md#convertWebHtmlToPdf) | **POST** /convert/web/html/to/pdf | Convert HTML string to PDF
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebHtmlToPng**](docs/ConvertWebApi.md#convertWebHtmlToPng) | **POST** /convert/web/html/to/png | Convert HTML string to PNG screenshot
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebHtmlToTxt**](docs/ConvertWebApi.md#convertWebHtmlToTxt) | **POST** /convert/web/html/to/txt | Convert HTML string to text (txt)
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebMdToHtml**](docs/ConvertWebApi.md#convertWebMdToHtml) | **POST** /convert/web/md/to/html | Convert Markdown to HTML
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebUrlToPdf**](docs/ConvertWebApi.md#convertWebUrlToPdf) | **POST** /convert/web/url/to/pdf | Convert a URL to PDF
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebUrlToScreenshot**](docs/ConvertWebApi.md#convertWebUrlToScreenshot) | **POST** /convert/web/url/to/screenshot | Take screenshot of URL
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebUrlToTxt**](docs/ConvertWebApi.md#convertWebUrlToTxt) | **POST** /convert/web/url/to/txt | Convert website URL page to text (txt)
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentBeginEditing**](docs/EditDocumentApi.md#editDocumentBeginEditing) | **POST** /convert/edit/begin-editing | Begin editing a document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxAcceptAllTrackChanges**](docs/EditDocumentApi.md#editDocumentDocxAcceptAllTrackChanges) | **POST** /convert/edit/docx/track-changes/accept-all | Accept all tracked changes, revisions in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxBody**](docs/EditDocumentApi.md#editDocumentDocxBody) | **POST** /convert/edit/docx/get-body | Get body from a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxCreateBlankDocument**](docs/EditDocumentApi.md#editDocumentDocxCreateBlankDocument) | **POST** /convert/edit/docx/create/blank | Create a blank Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxDeletePages**](docs/EditDocumentApi.md#editDocumentDocxDeletePages) | **POST** /convert/edit/docx/delete-pages | Delete, remove pages from a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxDeleteTableRow**](docs/EditDocumentApi.md#editDocumentDocxDeleteTableRow) | **POST** /convert/edit/docx/delete-table-row | Deletes a table row in an existing table in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxDeleteTableRowRange**](docs/EditDocumentApi.md#editDocumentDocxDeleteTableRowRange) | **POST** /convert/edit/docx/delete-table-row/range | Deletes a range of multiple table rows in an existing table in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxDisableTrackChanges**](docs/EditDocumentApi.md#editDocumentDocxDisableTrackChanges) | **POST** /convert/edit/docx/track-changes/disable | Disable track changes, revisions in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxEnableTrackChanges**](docs/EditDocumentApi.md#editDocumentDocxEnableTrackChanges) | **POST** /convert/edit/docx/track-changes/enable | Enable track changes, revisions in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxFindParagraph**](docs/EditDocumentApi.md#editDocumentDocxFindParagraph) | **POST** /convert/edit/docx/find/paragraph | Find matching paragraphs in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetComments**](docs/EditDocumentApi.md#editDocumentDocxGetComments) | **POST** /convert/edit/docx/get-comments/flat-list | Get comments from a Word DOCX document as a flat list
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetCommentsHierarchical**](docs/EditDocumentApi.md#editDocumentDocxGetCommentsHierarchical) | **POST** /convert/edit/docx/get-comments/hierarchical | Get comments from a Word DOCX document hierarchically
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetContentControls**](docs/EditDocumentApi.md#editDocumentDocxGetContentControls) | **POST** /convert/edit/docx/get-content-controls | Get all content controls (form fields) and values in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetFormFields**](docs/EditDocumentApi.md#editDocumentDocxGetFormFields) | **POST** /convert/edit/docx/get-form-fields | Get all form fields in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetHeadersAndFooters**](docs/EditDocumentApi.md#editDocumentDocxGetHeadersAndFooters) | **POST** /convert/edit/docx/get-headers-and-footers | Get content of a footer from a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetImages**](docs/EditDocumentApi.md#editDocumentDocxGetImages) | **POST** /convert/edit/docx/get-images | Get images from a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetMacroInformation**](docs/EditDocumentApi.md#editDocumentDocxGetMacroInformation) | **POST** /convert/edit/docx/get-macros | Get macro information from a Word DOCX/DOCM document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetMetadataProperties**](docs/EditDocumentApi.md#editDocumentDocxGetMetadataProperties) | **POST** /convert/edit/docx/get-metadata | Get all metadata properties in Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetSections**](docs/EditDocumentApi.md#editDocumentDocxGetSections) | **POST** /convert/edit/docx/get-sections | Get sections from a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetStyles**](docs/EditDocumentApi.md#editDocumentDocxGetStyles) | **POST** /convert/edit/docx/get-styles | Get styles from a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetTableByIndex**](docs/EditDocumentApi.md#editDocumentDocxGetTableByIndex) | **POST** /convert/edit/docx/get-table/by-index | Get a specific table by index in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetTableRow**](docs/EditDocumentApi.md#editDocumentDocxGetTableRow) | **POST** /convert/edit/docx/get-table-row | Gets the contents of an existing table row in an existing table in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetTables**](docs/EditDocumentApi.md#editDocumentDocxGetTables) | **POST** /convert/edit/docx/get-tables | Get all tables in Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxInsertCommentOnParagraph**](docs/EditDocumentApi.md#editDocumentDocxInsertCommentOnParagraph) | **POST** /convert/edit/docx/insert-comment/on/paragraph | Insert a new comment into a Word DOCX document attached to a paragraph
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxInsertImage**](docs/EditDocumentApi.md#editDocumentDocxInsertImage) | **POST** /convert/edit/docx/insert-image | Insert image into a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxInsertParagraph**](docs/EditDocumentApi.md#editDocumentDocxInsertParagraph) | **POST** /convert/edit/docx/insert-paragraph | Insert a new paragraph into a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxInsertTable**](docs/EditDocumentApi.md#editDocumentDocxInsertTable) | **POST** /convert/edit/docx/insert-table | Insert a new table into a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxInsertTableRow**](docs/EditDocumentApi.md#editDocumentDocxInsertTableRow) | **POST** /convert/edit/docx/insert-table-row | Insert a new row into an existing table in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxPages**](docs/EditDocumentApi.md#editDocumentDocxPages) | **POST** /convert/edit/docx/get-pages | Get pages and content from a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxRemoveAllComments**](docs/EditDocumentApi.md#editDocumentDocxRemoveAllComments) | **POST** /convert/edit/docx/comments/remove-all | Remove all comments from a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxRemoveHeadersAndFooters**](docs/EditDocumentApi.md#editDocumentDocxRemoveHeadersAndFooters) | **POST** /convert/edit/docx/remove-headers-and-footers | Remove headers and footers from Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxRemoveObject**](docs/EditDocumentApi.md#editDocumentDocxRemoveObject) | **POST** /convert/edit/docx/remove-object | Delete any object in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxReplace**](docs/EditDocumentApi.md#editDocumentDocxReplace) | **POST** /convert/edit/docx/replace-all | Replace string in Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxReplaceMulti**](docs/EditDocumentApi.md#editDocumentDocxReplaceMulti) | **POST** /convert/edit/docx/replace-all/multi | Replace multiple strings in Word DOCX document, return result
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxReplaceMultiEditSession**](docs/EditDocumentApi.md#editDocumentDocxReplaceMultiEditSession) | **POST** /convert/edit/docx/replace-all/multi/edit-session | Replace multiple strings in Word DOCX document, return edit session
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxReplaceParagraph**](docs/EditDocumentApi.md#editDocumentDocxReplaceParagraph) | **POST** /convert/edit/docx/replace/paragraph | Replace matching paragraphs in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxSetCustomMetadataProperties**](docs/EditDocumentApi.md#editDocumentDocxSetCustomMetadataProperties) | **POST** /convert/edit/docx/set-metadata/custom-property | Set custom property metadata properties in Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxSetFooter**](docs/EditDocumentApi.md#editDocumentDocxSetFooter) | **POST** /convert/edit/docx/set-footer | Set the footer in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxSetFooterAddPageNumber**](docs/EditDocumentApi.md#editDocumentDocxSetFooterAddPageNumber) | **POST** /convert/edit/docx/set-footer/add-page-number | Add page number to footer in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxSetFormFields**](docs/EditDocumentApi.md#editDocumentDocxSetFormFields) | **POST** /convert/edit/docx/set-form-fields | Set and fill values for form fields in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxSetHeader**](docs/EditDocumentApi.md#editDocumentDocxSetHeader) | **POST** /convert/edit/docx/set-header | Set the header in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxUpdateTableCell**](docs/EditDocumentApi.md#editDocumentDocxUpdateTableCell) | **POST** /convert/edit/docx/update-table-cell | Update, set contents of a table cell in an existing table in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxUpdateTableRow**](docs/EditDocumentApi.md#editDocumentDocxUpdateTableRow) | **POST** /convert/edit/docx/update-table-row | Update, set contents of a table row in an existing table in a Word DOCX document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentFinishEditing**](docs/EditDocumentApi.md#editDocumentFinishEditing) | **POST** /convert/edit/finish-editing | Finish editing document, and download result from document editing
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentPptxDeleteSlides**](docs/EditDocumentApi.md#editDocumentPptxDeleteSlides) | **POST** /convert/edit/pptx/delete-slides | Delete, remove slides from a PowerPoint PPTX presentation document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentPptxGetMacroInformation**](docs/EditDocumentApi.md#editDocumentPptxGetMacroInformation) | **POST** /convert/edit/pptx/get-macros | Get macro information from a PowerPoint PPTX/PPTM presentation document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentPptxReplace**](docs/EditDocumentApi.md#editDocumentPptxReplace) | **POST** /convert/edit/pptx/replace-all | Replace string in PowerPoint PPTX presentation
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxAppendRow**](docs/EditDocumentApi.md#editDocumentXlsxAppendRow) | **POST** /convert/edit/xlsx/append-row | Append row to a Excel XLSX spreadsheet, worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxClearCellByIndex**](docs/EditDocumentApi.md#editDocumentXlsxClearCellByIndex) | **POST** /convert/edit/xlsx/clear-cell/by-index | Clear cell contents in an Excel XLSX spreadsheet, worksheet by index
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxClearRow**](docs/EditDocumentApi.md#editDocumentXlsxClearRow) | **POST** /convert/edit/xlsx/clear-row | Clear row from a Excel XLSX spreadsheet, worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxCreateBlankSpreadsheet**](docs/EditDocumentApi.md#editDocumentXlsxCreateBlankSpreadsheet) | **POST** /convert/edit/xlsx/create/blank | Create a blank Excel XLSX spreadsheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxCreateSpreadsheetFromData**](docs/EditDocumentApi.md#editDocumentXlsxCreateSpreadsheetFromData) | **POST** /convert/edit/xlsx/create/from/data | Create a new Excel XLSX spreadsheet from column and row data
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxDeleteWorksheet**](docs/EditDocumentApi.md#editDocumentXlsxDeleteWorksheet) | **POST** /convert/edit/xlsx/delete-worksheet | Delete, remove worksheet from an Excel XLSX spreadsheet document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxDisableSharedWorkbook**](docs/EditDocumentApi.md#editDocumentXlsxDisableSharedWorkbook) | **POST** /convert/edit/xlsx/configuration/disable-shared-workbook | Disable Shared Workbook (legacy) in Excel XLSX spreadsheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxEnableSharedWorkbook**](docs/EditDocumentApi.md#editDocumentXlsxEnableSharedWorkbook) | **POST** /convert/edit/xlsx/configuration/enable-shared-workbook | Enable Shared Workbook (legacy) in Excel XLSX spreadsheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetCellByIdentifier**](docs/EditDocumentApi.md#editDocumentXlsxGetCellByIdentifier) | **POST** /convert/edit/xlsx/get-cell/by-identifier | Get cell from an Excel XLSX spreadsheet, worksheet by cell identifier
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetCellByIndex**](docs/EditDocumentApi.md#editDocumentXlsxGetCellByIndex) | **POST** /convert/edit/xlsx/get-cell/by-index | Get cell from an Excel XLSX spreadsheet, worksheet by index
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetColumns**](docs/EditDocumentApi.md#editDocumentXlsxGetColumns) | **POST** /convert/edit/xlsx/get-columns | Get columns from a Excel XLSX spreadsheet, worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetImages**](docs/EditDocumentApi.md#editDocumentXlsxGetImages) | **POST** /convert/edit/xlsx/get-images | Get images from a Excel XLSX spreadsheet, worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetMacroInformation**](docs/EditDocumentApi.md#editDocumentXlsxGetMacroInformation) | **POST** /convert/edit/xlsx/get-macros | Get macro information from a Excel XLSX/XLSM spreadsheet, worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetRowsAndCells**](docs/EditDocumentApi.md#editDocumentXlsxGetRowsAndCells) | **POST** /convert/edit/xlsx/get-rows-and-cells | Get rows and cells from a Excel XLSX spreadsheet, worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetSpecificRow**](docs/EditDocumentApi.md#editDocumentXlsxGetSpecificRow) | **POST** /convert/edit/xlsx/get-specific-row | Get a specific row from a Excel XLSX spreadsheet, worksheet by path
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetStyles**](docs/EditDocumentApi.md#editDocumentXlsxGetStyles) | **POST** /convert/edit/xlsx/get-styles | Get styles from a Excel XLSX spreadsheet, worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetWorksheets**](docs/EditDocumentApi.md#editDocumentXlsxGetWorksheets) | **POST** /convert/edit/xlsx/get-worksheets | Get worksheets from a Excel XLSX spreadsheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxInsertWorksheet**](docs/EditDocumentApi.md#editDocumentXlsxInsertWorksheet) | **POST** /convert/edit/xlsx/insert-worksheet | Insert a new worksheet into an Excel XLSX spreadsheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxRenameWorksheet**](docs/EditDocumentApi.md#editDocumentXlsxRenameWorksheet) | **POST** /convert/edit/xlsx/rename-worksheet | Rename a specific worksheet in a Excel XLSX spreadsheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxSetCellByIdentifier**](docs/EditDocumentApi.md#editDocumentXlsxSetCellByIdentifier) | **POST** /convert/edit/xlsx/set-cell/by-identifier | Set, update cell contents in an Excel XLSX spreadsheet, worksheet by cell identifier
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxSetCellByIndex**](docs/EditDocumentApi.md#editDocumentXlsxSetCellByIndex) | **POST** /convert/edit/xlsx/set-cell/by-index | Set, update cell contents in an Excel XLSX spreadsheet, worksheet by index
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlAppendHeaderTag**](docs/EditHtmlApi.md#editHtmlHtmlAppendHeaderTag) | **POST** /convert/edit/html/head/append/tag | Append an HTML tag to the HEAD section of an HTML Document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlAppendHeading**](docs/EditHtmlApi.md#editHtmlHtmlAppendHeading) | **POST** /convert/edit/html/append/heading | Append a Heading to an HTML Document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlAppendImageFromUrl**](docs/EditHtmlApi.md#editHtmlHtmlAppendImageFromUrl) | **POST** /convert/edit/html/append/image/from-url | Append an Image to an HTML Document from a URL
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlAppendImageInline**](docs/EditHtmlApi.md#editHtmlHtmlAppendImageInline) | **POST** /convert/edit/html/append/image/inline | Append a Base64 Inline Image to an HTML Document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlAppendParagraph**](docs/EditHtmlApi.md#editHtmlHtmlAppendParagraph) | **POST** /convert/edit/html/append/paragraph | Append a Paragraph to an HTML Document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlCreateBlankDocument**](docs/EditHtmlApi.md#editHtmlHtmlCreateBlankDocument) | **POST** /convert/edit/html/create/blank | Create a Blank HTML Document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlGetLanguage**](docs/EditHtmlApi.md#editHtmlHtmlGetLanguage) | **POST** /convert/edit/html/head/get/language | Gets the language for the HTML document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlGetLinks**](docs/EditHtmlApi.md#editHtmlHtmlGetLinks) | **POST** /convert/edit/html/extract/links | Extract resolved link URLs from HTML File
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlGetRelCanonical**](docs/EditHtmlApi.md#editHtmlHtmlGetRelCanonical) | **POST** /convert/edit/html/head/get/rel-canonical-url | Gets the rel canonical URL for the HTML document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlGetSitemap**](docs/EditHtmlApi.md#editHtmlHtmlGetSitemap) | **POST** /convert/edit/html/head/get/sitemap-url | Gets the sitemap URL for the HTML document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlSetLanguage**](docs/EditHtmlApi.md#editHtmlHtmlSetLanguage) | **POST** /convert/edit/html/head/set/language | Sets the language for the HTML document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlSetRelCanonical**](docs/EditHtmlApi.md#editHtmlHtmlSetRelCanonical) | **POST** /convert/edit/html/head/set/rel-canonical-url | Sets the rel canonical URL for the HTML document
*CloudmersiveConvertApiClient.EditHtmlApi* | [**editHtmlHtmlSetSitemapUrl**](docs/EditHtmlApi.md#editHtmlHtmlSetSitemapUrl) | **POST** /convert/edit/html/head/set/sitemap-url | Sets the sitemap URL for the HTML document
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfAddAnnotations**](docs/EditPdfApi.md#editPdfAddAnnotations) | **POST** /convert/edit/pdf/annotations/add-item | Add one or more PDF annotations, comments in the PDF document
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfConvertToPdfA**](docs/EditPdfApi.md#editPdfConvertToPdfA) | **POST** /convert/edit/pdf/optimize/pdf-a | Convert a PDF file to PDF/A
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfDecrypt**](docs/EditPdfApi.md#editPdfDecrypt) | **POST** /convert/edit/pdf/decrypt | Decrypt and password-protect a PDF
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfDeletePages**](docs/EditPdfApi.md#editPdfDeletePages) | **POST** /convert/edit/pdf/pages/delete | Remove, delete pages from a PDF document
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfDeletePagesBatchJob**](docs/EditPdfApi.md#editPdfDeletePagesBatchJob) | **POST** /convert/edit/pdf/pages/delete/batch-job | Remove, delete pages from a PDF document as Batch Job
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfEncrypt**](docs/EditPdfApi.md#editPdfEncrypt) | **POST** /convert/edit/pdf/encrypt | Encrypt and password-protect a PDF
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfGetAnnotations**](docs/EditPdfApi.md#editPdfGetAnnotations) | **POST** /convert/edit/pdf/annotations/list | Get PDF annotations, including comments in the document
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfGetAsyncJobStatus**](docs/EditPdfApi.md#editPdfGetAsyncJobStatus) | **GET** /convert/edit/pdf/batch-job/status | Get the status and result of a PDF Batch Job
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfGetFormFields**](docs/EditPdfApi.md#editPdfGetFormFields) | **POST** /convert/edit/pdf/form/get-fields | Gets PDF Form fields and values
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfGetMetadata**](docs/EditPdfApi.md#editPdfGetMetadata) | **POST** /convert/edit/pdf/get-metadata | Get PDF document metadata
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfGetPdfTextByPages**](docs/EditPdfApi.md#editPdfGetPdfTextByPages) | **POST** /convert/edit/pdf/pages/get-text | Get text in a PDF document by page
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfInsertPages**](docs/EditPdfApi.md#editPdfInsertPages) | **POST** /convert/edit/pdf/pages/insert | Insert, copy pages from one PDF document into another
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfInsertPagesBatchJob**](docs/EditPdfApi.md#editPdfInsertPagesBatchJob) | **POST** /convert/edit/pdf/pages/insert/batch-job | Insert, copy pages from one PDF document into another as a batch job
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfLinearize**](docs/EditPdfApi.md#editPdfLinearize) | **POST** /convert/edit/pdf/optimize/linearize | Linearize and optimize a PDF for streaming download
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfRasterize**](docs/EditPdfApi.md#editPdfRasterize) | **POST** /convert/edit/pdf/rasterize | Rasterize a PDF to an image-based PDF
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfRasterizeBatchJob**](docs/EditPdfApi.md#editPdfRasterizeBatchJob) | **POST** /convert/edit/pdf/rasterize/batch-job | Rasterize a PDF to an image-based PDF as Batch Job
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfReduceFileSize**](docs/EditPdfApi.md#editPdfReduceFileSize) | **POST** /convert/edit/pdf/optimize/reduce-file-size | Reduce the file size and optimize a PDF
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfRemoveAllAnnotations**](docs/EditPdfApi.md#editPdfRemoveAllAnnotations) | **POST** /convert/edit/pdf/annotations/remove-all | Remove all PDF annotations, including comments in the document
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfRemoveAnnotationItem**](docs/EditPdfApi.md#editPdfRemoveAnnotationItem) | **POST** /convert/edit/pdf/annotations/remove-item | Remove a specific PDF annotation, comment in the document
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfResize**](docs/EditPdfApi.md#editPdfResize) | **POST** /convert/edit/pdf/resize | Change PDF Document&#39;s Paper Size
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfRotateAllPages**](docs/EditPdfApi.md#editPdfRotateAllPages) | **POST** /convert/edit/pdf/pages/rotate/all | Rotate all pages in a PDF document
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfRotatePageRange**](docs/EditPdfApi.md#editPdfRotatePageRange) | **POST** /convert/edit/pdf/pages/rotate/page-range | Rotate a range, subset of pages in a PDF document
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfSetFormFields**](docs/EditPdfApi.md#editPdfSetFormFields) | **POST** /convert/edit/pdf/form/set-fields | Sets ands fills PDF Form field values
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfSetMetadata**](docs/EditPdfApi.md#editPdfSetMetadata) | **POST** /convert/edit/pdf/set-metadata | Sets PDF document metadata
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfSetPermissions**](docs/EditPdfApi.md#editPdfSetPermissions) | **POST** /convert/edit/pdf/encrypt/set-permissions | Encrypt, password-protect and set restricted permissions on a PDF
*CloudmersiveConvertApiClient.EditPdfApi* | [**editPdfWatermarkText**](docs/EditPdfApi.md#editPdfWatermarkText) | **POST** /convert/edit/pdf/watermark/text | Add a text watermark to a PDF
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextBase64Decode**](docs/EditTextApi.md#editTextBase64Decode) | **POST** /convert/edit/text/encoding/base64/decode | Base 64 decode, convert base 64 string to binary content
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextBase64Detect**](docs/EditTextApi.md#editTextBase64Detect) | **POST** /convert/edit/text/encoding/base64/detect | Detect, check if text string is base 64 encoded
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextBase64Encode**](docs/EditTextApi.md#editTextBase64Encode) | **POST** /convert/edit/text/encoding/base64/encode | Base 64 encode, convert binary or file data to a text string
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextChangeLineEndings**](docs/EditTextApi.md#editTextChangeLineEndings) | **POST** /convert/edit/text/line-endings/change | Set, change line endings of a text file
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextDetectLineEndings**](docs/EditTextApi.md#editTextDetectLineEndings) | **POST** /convert/edit/text/line-endings/detect | Detect line endings of a text file
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextFindRegex**](docs/EditTextApi.md#editTextFindRegex) | **POST** /convert/edit/text/find/regex | Find a regular expression regex in text input
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextFindSimple**](docs/EditTextApi.md#editTextFindSimple) | **POST** /convert/edit/text/find/string | Find a string in text input
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextRemoveAllWhitespace**](docs/EditTextApi.md#editTextRemoveAllWhitespace) | **POST** /convert/edit/text/remove/whitespace/all | Remove whitespace from text string
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextRemoveHtml**](docs/EditTextApi.md#editTextRemoveHtml) | **POST** /convert/edit/text/remove/html | Remove HTML from text string
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextReplaceRegex**](docs/EditTextApi.md#editTextReplaceRegex) | **POST** /convert/edit/text/replace/regex | Replace a string in text with a regex regular expression string
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextReplaceSimple**](docs/EditTextApi.md#editTextReplaceSimple) | **POST** /convert/edit/text/replace/string | Replace a string in text with another string value
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextTextEncodingDetect**](docs/EditTextApi.md#editTextTextEncodingDetect) | **POST** /convert/edit/text/encoding/detect | Detect text encoding of file
*CloudmersiveConvertApiClient.EditTextApi* | [**editTextTrimWhitespace**](docs/EditTextApi.md#editTextTrimWhitespace) | **POST** /convert/edit/text/remove/whitespace/trim | Trim leading and trailing whitespace from text string
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentBatchJobCreate**](docs/MergeDocumentApi.md#mergeDocumentBatchJobCreate) | **POST** /convert/merge/batch-job/create | Merge an array of Documents into a Single Document by Page as a Batch Job
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentDocx**](docs/MergeDocumentApi.md#mergeDocumentDocx) | **POST** /convert/merge/docx | Merge Two Word DOCX Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentDocxMulti**](docs/MergeDocumentApi.md#mergeDocumentDocxMulti) | **POST** /convert/merge/docx/multi | Merge Multple Word DOCX Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentDocxMultiArray**](docs/MergeDocumentApi.md#mergeDocumentDocxMultiArray) | **POST** /convert/merge/docx/multi/array | Merge Multple Word DOCX Together from an array
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentGetAsyncJobStatus**](docs/MergeDocumentApi.md#mergeDocumentGetAsyncJobStatus) | **GET** /convert/merge/batch-job/status | Get the status and result of a Merge Document Batch Job
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentHtml**](docs/MergeDocumentApi.md#mergeDocumentHtml) | **POST** /convert/merge/html | Merge Two HTML (HTM) Files Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentHtmlMulti**](docs/MergeDocumentApi.md#mergeDocumentHtmlMulti) | **POST** /convert/merge/html/multi | Merge Multple HTML (HTM) Files Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentHtmlMultiArray**](docs/MergeDocumentApi.md#mergeDocumentHtmlMultiArray) | **POST** /convert/merge/html/multi/array | Merge Multple HTML (HTM) Files Together from an array
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPdf**](docs/MergeDocumentApi.md#mergeDocumentPdf) | **POST** /convert/merge/pdf | Merge Two PDF Files Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPdfMulti**](docs/MergeDocumentApi.md#mergeDocumentPdfMulti) | **POST** /convert/merge/pdf/multi | Merge Multple PDF Files Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPdfMultiArray**](docs/MergeDocumentApi.md#mergeDocumentPdfMultiArray) | **POST** /convert/merge/pdf/multi/array | Merge Multple PDF Files Together from an array
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPng**](docs/MergeDocumentApi.md#mergeDocumentPng) | **POST** /convert/merge/png/vertical | Merge Two PNG Files Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPngMulti**](docs/MergeDocumentApi.md#mergeDocumentPngMulti) | **POST** /convert/merge/png/vertical/multi | Merge Multple PNG Files Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPngMultiArray**](docs/MergeDocumentApi.md#mergeDocumentPngMultiArray) | **POST** /convert/merge/png/vertical/multi/array | Merge Multple PNG Files Together from an array
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPptx**](docs/MergeDocumentApi.md#mergeDocumentPptx) | **POST** /convert/merge/pptx | Merge Two PowerPoint PPTX Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPptxMulti**](docs/MergeDocumentApi.md#mergeDocumentPptxMulti) | **POST** /convert/merge/pptx/multi | Merge Multple PowerPoint PPTX Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPptxMultiArray**](docs/MergeDocumentApi.md#mergeDocumentPptxMultiArray) | **POST** /convert/merge/pptx/multi/array | Merge Multple PowerPoint PPTX Together from an array
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentTxt**](docs/MergeDocumentApi.md#mergeDocumentTxt) | **POST** /convert/merge/txt | Merge Two Text (TXT) Files Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentTxtMulti**](docs/MergeDocumentApi.md#mergeDocumentTxtMulti) | **POST** /convert/merge/txt/multi | Merge Multple Text (TXT) Files Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentXlsx**](docs/MergeDocumentApi.md#mergeDocumentXlsx) | **POST** /convert/merge/xlsx | Merge Two Excel XLSX Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentXlsxMulti**](docs/MergeDocumentApi.md#mergeDocumentXlsxMulti) | **POST** /convert/merge/xlsx/multi | Merge Multple Excel XLSX Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentXlsxMultiArray**](docs/MergeDocumentApi.md#mergeDocumentXlsxMultiArray) | **POST** /convert/merge/xlsx/multi/array | Merge Multple Excel XLSX Together from an Array
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentBatchJobCreate**](docs/SplitDocumentApi.md#splitDocumentBatchJobCreate) | **POST** /convert/split/batch-job/create | Split a single Document into Separate Documents by Page as a Batch Job
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentDocx**](docs/SplitDocumentApi.md#splitDocumentDocx) | **POST** /convert/split/docx | Split a single Word Document DOCX into Separate Documents by Page
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentGetAsyncJobStatus**](docs/SplitDocumentApi.md#splitDocumentGetAsyncJobStatus) | **GET** /convert/split/batch-job/status | Get the status and result of a Split Document Batch Job
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentPdfByPage**](docs/SplitDocumentApi.md#splitDocumentPdfByPage) | **POST** /convert/split/pdf | Split a PDF file into separate PDF files, one per page
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentPptx**](docs/SplitDocumentApi.md#splitDocumentPptx) | **POST** /convert/split/pptx | Split a single PowerPoint Presentation PPTX into Separate Slides
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentPptxAdvanced**](docs/SplitDocumentApi.md#splitDocumentPptxAdvanced) | **POST** /convert/split/pptx/advanced | Split a single PowerPoint Presentation PPTX into Separate Presentations
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentTxtByLine**](docs/SplitDocumentApi.md#splitDocumentTxtByLine) | **POST** /convert/split/txt/by-line | Split a single Text file (txt) into lines
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentTxtByString**](docs/SplitDocumentApi.md#splitDocumentTxtByString) | **POST** /convert/split/txt/by-string | Split a single Text file (txt) by a string delimiter
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentXlsx**](docs/SplitDocumentApi.md#splitDocumentXlsx) | **POST** /convert/split/xlsx | Split a single Excel XLSX into Separate Worksheets
*CloudmersiveConvertApiClient.TransformDocumentApi* | [**transformDocumentDocxReplace**](docs/TransformDocumentApi.md#transformDocumentDocxReplace) | **POST** /convert/transform/docx/replace-all | Replace string in Word DOCX document, return result
*CloudmersiveConvertApiClient.TransformDocumentApi* | [**transformDocumentDocxReplaceEditSession**](docs/TransformDocumentApi.md#transformDocumentDocxReplaceEditSession) | **POST** /convert/transform/docx/replace-all/edit-session | Replace string in Word DOCX document, return edit session
*CloudmersiveConvertApiClient.TransformDocumentApi* | [**transformDocumentDocxTableFillIn**](docs/TransformDocumentApi.md#transformDocumentDocxTableFillIn) | **POST** /convert/transform/docx/table/fill/data | Fill in data in a table in a Word DOCX document, return result
*CloudmersiveConvertApiClient.TransformDocumentApi* | [**transformDocumentDocxTableFillInEditSession**](docs/TransformDocumentApi.md#transformDocumentDocxTableFillInEditSession) | **POST** /convert/transform/docx/table/fill/data/edit-session | Fill in data in a table in a Word DOCX document, return edit session
*CloudmersiveConvertApiClient.TransformDocumentApi* | [**transformDocumentDocxTableFillInMulti**](docs/TransformDocumentApi.md#transformDocumentDocxTableFillInMulti) | **POST** /convert/transform/docx/table/fill/data/multi | Fill in data in multiple tables in a Word DOCX document, return result
*CloudmersiveConvertApiClient.TransformDocumentApi* | [**transformDocumentPptxReplace**](docs/TransformDocumentApi.md#transformDocumentPptxReplace) | **POST** /convert/transform/pptx/replace-all | Replace string in PowerPoint PPTX presentation, return result
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentAutodetectValidation**](docs/ValidateDocumentApi.md#validateDocumentAutodetectValidation) | **POST** /convert/validate/autodetect | Autodetect content type and validate
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentCsvValidation**](docs/ValidateDocumentApi.md#validateDocumentCsvValidation) | **POST** /convert/validate/csv | Validate a CSV file document (CSV)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentDocValidation**](docs/ValidateDocumentApi.md#validateDocumentDocValidation) | **POST** /convert/validate/doc | Validate a Word 97-2003 Legacy document (DOC)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentDocxRepair**](docs/ValidateDocumentApi.md#validateDocumentDocxRepair) | **POST** /convert/validate/docx/repair | Repair a Word document (DOCX) that contains errors
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentDocxValidation**](docs/ValidateDocumentApi.md#validateDocumentDocxValidation) | **POST** /convert/validate/docx | Validate a Word document (DOCX)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentEmlValidation**](docs/ValidateDocumentApi.md#validateDocumentEmlValidation) | **POST** /convert/validate/eml | Validate if input file is a valid EML file
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentExecutableValidation**](docs/ValidateDocumentApi.md#validateDocumentExecutableValidation) | **POST** /convert/validate/executable | Validate if a file is executable
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentGZipValidation**](docs/ValidateDocumentApi.md#validateDocumentGZipValidation) | **POST** /convert/validate/gzip | Validate a GZip Archive file (gzip or gz)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentHtmlSsrfValidation**](docs/ValidateDocumentApi.md#validateDocumentHtmlSsrfValidation) | **POST** /convert/validate/html/ssrf-threat-check | Validate an HTML file and checks for SSRF threats
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentHtmlValidation**](docs/ValidateDocumentApi.md#validateDocumentHtmlValidation) | **POST** /convert/validate/html | Validate an HTML file
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentImageValidation**](docs/ValidateDocumentApi.md#validateDocumentImageValidation) | **POST** /convert/validate/image | Validate an Image File
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentJpgValidation**](docs/ValidateDocumentApi.md#validateDocumentJpgValidation) | **POST** /convert/validate/jpg | Validate a JPG File
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentJsonValidation**](docs/ValidateDocumentApi.md#validateDocumentJsonValidation) | **POST** /convert/validate/json | Validate a JSON file
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentMsgValidation**](docs/ValidateDocumentApi.md#validateDocumentMsgValidation) | **POST** /convert/validate/msg | Validate if input file is a valid MSG file
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentPdfValidation**](docs/ValidateDocumentApi.md#validateDocumentPdfValidation) | **POST** /convert/validate/pdf | Validate a PDF document file
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentPngValidation**](docs/ValidateDocumentApi.md#validateDocumentPngValidation) | **POST** /convert/validate/png | Validate a PNG File
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentPptValidation**](docs/ValidateDocumentApi.md#validateDocumentPptValidation) | **POST** /convert/validate/ppt | Validate a PowerPoint 97-2003 Legacy presentation (PPT)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentPptxRepair**](docs/ValidateDocumentApi.md#validateDocumentPptxRepair) | **POST** /convert/validate/pptx/repair | Repair a PowerPoint presentation (PPTX) that contains errors
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentPptxValidation**](docs/ValidateDocumentApi.md#validateDocumentPptxValidation) | **POST** /convert/validate/pptx | Validate a PowerPoint presentation (PPTX)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentRarValidation**](docs/ValidateDocumentApi.md#validateDocumentRarValidation) | **POST** /convert/validate/rar | Validate a RAR Archive file (RAR)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentRtfValidation**](docs/ValidateDocumentApi.md#validateDocumentRtfValidation) | **POST** /convert/validate/rtf | Validate a Rich Text Format document (RTF)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentTarValidation**](docs/ValidateDocumentApi.md#validateDocumentTarValidation) | **POST** /convert/validate/tar | Validate a TAR Tarball Archive file (TAR)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentTxtValidation**](docs/ValidateDocumentApi.md#validateDocumentTxtValidation) | **POST** /convert/validate/txt | Validate an TXT file
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentXlsValidation**](docs/ValidateDocumentApi.md#validateDocumentXlsValidation) | **POST** /convert/validate/xls | Validate a Excel 97-2003 Legacy spreadsheet (XLS)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentXlsxRepair**](docs/ValidateDocumentApi.md#validateDocumentXlsxRepair) | **POST** /convert/validate/xlsx/repair | Repair an Excel spreadsheet (XLSX) that contains errors
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentXlsxValidation**](docs/ValidateDocumentApi.md#validateDocumentXlsxValidation) | **POST** /convert/validate/xlsx | Validate a Excel document (XLSX)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentXmlValidation**](docs/ValidateDocumentApi.md#validateDocumentXmlValidation) | **POST** /convert/validate/xml | Validate an XML file
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentXmlXxeThreatValidation**](docs/ValidateDocumentApi.md#validateDocumentXmlXxeThreatValidation) | **POST** /convert/validate/xml/xxe-threats | Validate an XML file for XML External Entity (XXE) threats
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentZipValidation**](docs/ValidateDocumentApi.md#validateDocumentZipValidation) | **POST** /convert/validate/zip | Validate a Zip Archive file (zip)
*CloudmersiveConvertApiClient.ViewerToolsApi* | [**viewerToolsCreateSimple**](docs/ViewerToolsApi.md#viewerToolsCreateSimple) | **POST** /convert/viewer/create/web/simple | Create a web-based viewer
*CloudmersiveConvertApiClient.ZipArchiveApi* | [**zipArchiveZipCreate**](docs/ZipArchiveApi.md#zipArchiveZipCreate) | **POST** /convert/archive/zip/create | Compress files to create a new zip archive
*CloudmersiveConvertApiClient.ZipArchiveApi* | [**zipArchiveZipCreateAdvanced**](docs/ZipArchiveApi.md#zipArchiveZipCreateAdvanced) | **POST** /convert/archive/zip/create/advanced | Compress files and folders to create a new zip archive with advanced options
*CloudmersiveConvertApiClient.ZipArchiveApi* | [**zipArchiveZipCreateEncrypted**](docs/ZipArchiveApi.md#zipArchiveZipCreateEncrypted) | **POST** /convert/archive/zip/create/encrypted | Compress files to create a new, encrypted and password-protected zip archive
*CloudmersiveConvertApiClient.ZipArchiveApi* | [**zipArchiveZipCreateQuarantine**](docs/ZipArchiveApi.md#zipArchiveZipCreateQuarantine) | **POST** /convert/archive/zip/create/quarantine | Create an encrypted zip file to quarantine a dangerous file
*CloudmersiveConvertApiClient.ZipArchiveApi* | [**zipArchiveZipDecrypt**](docs/ZipArchiveApi.md#zipArchiveZipDecrypt) | **POST** /convert/archive/zip/decrypt | Decrypt and remove password protection on a zip file
*CloudmersiveConvertApiClient.ZipArchiveApi* | [**zipArchiveZipEncryptAdvanced**](docs/ZipArchiveApi.md#zipArchiveZipEncryptAdvanced) | **POST** /convert/archive/zip/encrypt/advanced | Encrypt and password protect a zip file
*CloudmersiveConvertApiClient.ZipArchiveApi* | [**zipArchiveZipExtract**](docs/ZipArchiveApi.md#zipArchiveZipExtract) | **POST** /convert/archive/zip/extract | Extract, decompress files and folders from a zip archive


## Documentation for Models

 - [CloudmersiveConvertApiClient.AddPdfAnnotationRequest](docs/AddPdfAnnotationRequest.md)
 - [CloudmersiveConvertApiClient.AlternateFileFormatCandidate](docs/AlternateFileFormatCandidate.md)
 - [CloudmersiveConvertApiClient.AppendXlsxRowRequest](docs/AppendXlsxRowRequest.md)
 - [CloudmersiveConvertApiClient.AppendXlsxRowResponse](docs/AppendXlsxRowResponse.md)
 - [CloudmersiveConvertApiClient.AutodetectDocumentValidationResult](docs/AutodetectDocumentValidationResult.md)
 - [CloudmersiveConvertApiClient.AutodetectGetInfoResult](docs/AutodetectGetInfoResult.md)
 - [CloudmersiveConvertApiClient.AutodetectToJpgResult](docs/AutodetectToJpgResult.md)
 - [CloudmersiveConvertApiClient.AutodetectToPngResult](docs/AutodetectToPngResult.md)
 - [CloudmersiveConvertApiClient.AutodetectToThumbnailsResult](docs/AutodetectToThumbnailsResult.md)
 - [CloudmersiveConvertApiClient.Base64DecodeRequest](docs/Base64DecodeRequest.md)
 - [CloudmersiveConvertApiClient.Base64DecodeResponse](docs/Base64DecodeResponse.md)
 - [CloudmersiveConvertApiClient.Base64DetectRequest](docs/Base64DetectRequest.md)
 - [CloudmersiveConvertApiClient.Base64DetectResponse](docs/Base64DetectResponse.md)
 - [CloudmersiveConvertApiClient.Base64EncodeRequest](docs/Base64EncodeRequest.md)
 - [CloudmersiveConvertApiClient.Base64EncodeResponse](docs/Base64EncodeResponse.md)
 - [CloudmersiveConvertApiClient.ChangeLineEndingResponse](docs/ChangeLineEndingResponse.md)
 - [CloudmersiveConvertApiClient.ClearXlsxCellRequest](docs/ClearXlsxCellRequest.md)
 - [CloudmersiveConvertApiClient.ClearXlsxCellResponse](docs/ClearXlsxCellResponse.md)
 - [CloudmersiveConvertApiClient.ClearXlsxRowRequest](docs/ClearXlsxRowRequest.md)
 - [CloudmersiveConvertApiClient.ClearXlsxRowResponse](docs/ClearXlsxRowResponse.md)
 - [CloudmersiveConvertApiClient.ConvertDocumentBatchJobCreateResult](docs/ConvertDocumentBatchJobCreateResult.md)
 - [CloudmersiveConvertApiClient.ConvertDocumentJobStatusResult](docs/ConvertDocumentJobStatusResult.md)
 - [CloudmersiveConvertApiClient.ConvertedJpgPage](docs/ConvertedJpgPage.md)
 - [CloudmersiveConvertApiClient.ConvertedPngDirectPage](docs/ConvertedPngDirectPage.md)
 - [CloudmersiveConvertApiClient.ConvertedPngPage](docs/ConvertedPngPage.md)
 - [CloudmersiveConvertApiClient.CreateBlankDocxRequest](docs/CreateBlankDocxRequest.md)
 - [CloudmersiveConvertApiClient.CreateBlankDocxResponse](docs/CreateBlankDocxResponse.md)
 - [CloudmersiveConvertApiClient.CreateBlankSpreadsheetRequest](docs/CreateBlankSpreadsheetRequest.md)
 - [CloudmersiveConvertApiClient.CreateBlankSpreadsheetResponse](docs/CreateBlankSpreadsheetResponse.md)
 - [CloudmersiveConvertApiClient.CreateSpreadsheetFromDataRequest](docs/CreateSpreadsheetFromDataRequest.md)
 - [CloudmersiveConvertApiClient.CreateSpreadsheetFromDataResponse](docs/CreateSpreadsheetFromDataResponse.md)
 - [CloudmersiveConvertApiClient.CreateZipArchiveRequest](docs/CreateZipArchiveRequest.md)
 - [CloudmersiveConvertApiClient.CsvCollection](docs/CsvCollection.md)
 - [CloudmersiveConvertApiClient.CsvFileResult](docs/CsvFileResult.md)
 - [CloudmersiveConvertApiClient.DeleteDocxTableRowRangeRequest](docs/DeleteDocxTableRowRangeRequest.md)
 - [CloudmersiveConvertApiClient.DeleteDocxTableRowRangeResponse](docs/DeleteDocxTableRowRangeResponse.md)
 - [CloudmersiveConvertApiClient.DeleteDocxTableRowRequest](docs/DeleteDocxTableRowRequest.md)
 - [CloudmersiveConvertApiClient.DeleteDocxTableRowResponse](docs/DeleteDocxTableRowResponse.md)
 - [CloudmersiveConvertApiClient.DetectLineEndingsResponse](docs/DetectLineEndingsResponse.md)
 - [CloudmersiveConvertApiClient.DisableSharedWorkbookRequest](docs/DisableSharedWorkbookRequest.md)
 - [CloudmersiveConvertApiClient.DisableSharedWorkbookResponse](docs/DisableSharedWorkbookResponse.md)
 - [CloudmersiveConvertApiClient.DocumentArrayInput](docs/DocumentArrayInput.md)
 - [CloudmersiveConvertApiClient.DocumentEditingEditSession](docs/DocumentEditingEditSession.md)
 - [CloudmersiveConvertApiClient.DocumentItem](docs/DocumentItem.md)
 - [CloudmersiveConvertApiClient.DocumentTransformEditSession](docs/DocumentTransformEditSession.md)
 - [CloudmersiveConvertApiClient.DocumentValidationError](docs/DocumentValidationError.md)
 - [CloudmersiveConvertApiClient.DocumentValidationResult](docs/DocumentValidationResult.md)
 - [CloudmersiveConvertApiClient.DocxBody](docs/DocxBody.md)
 - [CloudmersiveConvertApiClient.DocxCellStyle](docs/DocxCellStyle.md)
 - [CloudmersiveConvertApiClient.DocxComment](docs/DocxComment.md)
 - [CloudmersiveConvertApiClient.DocxContentControl](docs/DocxContentControl.md)
 - [CloudmersiveConvertApiClient.DocxFooter](docs/DocxFooter.md)
 - [CloudmersiveConvertApiClient.DocxHeader](docs/DocxHeader.md)
 - [CloudmersiveConvertApiClient.DocxImage](docs/DocxImage.md)
 - [CloudmersiveConvertApiClient.DocxInsertCommentOnParagraphRequest](docs/DocxInsertCommentOnParagraphRequest.md)
 - [CloudmersiveConvertApiClient.DocxInsertImageRequest](docs/DocxInsertImageRequest.md)
 - [CloudmersiveConvertApiClient.DocxInsertImageResponse](docs/DocxInsertImageResponse.md)
 - [CloudmersiveConvertApiClient.DocxMetadataCustomProperty](docs/DocxMetadataCustomProperty.md)
 - [CloudmersiveConvertApiClient.DocxPage](docs/DocxPage.md)
 - [CloudmersiveConvertApiClient.DocxParagraph](docs/DocxParagraph.md)
 - [CloudmersiveConvertApiClient.DocxRemoveObjectRequest](docs/DocxRemoveObjectRequest.md)
 - [CloudmersiveConvertApiClient.DocxRemoveObjectResponse](docs/DocxRemoveObjectResponse.md)
 - [CloudmersiveConvertApiClient.DocxRun](docs/DocxRun.md)
 - [CloudmersiveConvertApiClient.DocxSection](docs/DocxSection.md)
 - [CloudmersiveConvertApiClient.DocxSetCustomMetadataPropertiesRequest](docs/DocxSetCustomMetadataPropertiesRequest.md)
 - [CloudmersiveConvertApiClient.DocxSetFooterAddPageNumberRequest](docs/DocxSetFooterAddPageNumberRequest.md)
 - [CloudmersiveConvertApiClient.DocxSetFooterRequest](docs/DocxSetFooterRequest.md)
 - [CloudmersiveConvertApiClient.DocxSetFooterResponse](docs/DocxSetFooterResponse.md)
 - [CloudmersiveConvertApiClient.DocxSetFormFieldsRequest](docs/DocxSetFormFieldsRequest.md)
 - [CloudmersiveConvertApiClient.DocxSetHeaderRequest](docs/DocxSetHeaderRequest.md)
 - [CloudmersiveConvertApiClient.DocxSetHeaderResponse](docs/DocxSetHeaderResponse.md)
 - [CloudmersiveConvertApiClient.DocxStyle](docs/DocxStyle.md)
 - [CloudmersiveConvertApiClient.DocxTable](docs/DocxTable.md)
 - [CloudmersiveConvertApiClient.DocxTableCell](docs/DocxTableCell.md)
 - [CloudmersiveConvertApiClient.DocxTableRow](docs/DocxTableRow.md)
 - [CloudmersiveConvertApiClient.DocxTableSingleTableFill](docs/DocxTableSingleTableFill.md)
 - [CloudmersiveConvertApiClient.DocxTableTableFillMultiRequest](docs/DocxTableTableFillMultiRequest.md)
 - [CloudmersiveConvertApiClient.DocxTableTableFillRequest](docs/DocxTableTableFillRequest.md)
 - [CloudmersiveConvertApiClient.DocxTableTableFillTableCell](docs/DocxTableTableFillTableCell.md)
 - [CloudmersiveConvertApiClient.DocxTableTableFillTableRow](docs/DocxTableTableFillTableRow.md)
 - [CloudmersiveConvertApiClient.DocxTemplateApplicationRequest](docs/DocxTemplateApplicationRequest.md)
 - [CloudmersiveConvertApiClient.DocxTemplateOperation](docs/DocxTemplateOperation.md)
 - [CloudmersiveConvertApiClient.DocxText](docs/DocxText.md)
 - [CloudmersiveConvertApiClient.DocxToJpgResult](docs/DocxToJpgResult.md)
 - [CloudmersiveConvertApiClient.DocxToPngResult](docs/DocxToPngResult.md)
 - [CloudmersiveConvertApiClient.DocxTopLevelComment](docs/DocxTopLevelComment.md)
 - [CloudmersiveConvertApiClient.EditPdfBatchJobCreateResult](docs/EditPdfBatchJobCreateResult.md)
 - [CloudmersiveConvertApiClient.EditPdfJobStatusResult](docs/EditPdfJobStatusResult.md)
 - [CloudmersiveConvertApiClient.EmlAttachment](docs/EmlAttachment.md)
 - [CloudmersiveConvertApiClient.EmlToHtmlResult](docs/EmlToHtmlResult.md)
 - [CloudmersiveConvertApiClient.EmlToJpgResult](docs/EmlToJpgResult.md)
 - [CloudmersiveConvertApiClient.EmlToPngResult](docs/EmlToPngResult.md)
 - [CloudmersiveConvertApiClient.EnableSharedWorkbookRequest](docs/EnableSharedWorkbookRequest.md)
 - [CloudmersiveConvertApiClient.EnableSharedWorkbookResponse](docs/EnableSharedWorkbookResponse.md)
 - [CloudmersiveConvertApiClient.ExifValue](docs/ExifValue.md)
 - [CloudmersiveConvertApiClient.FillHandlebarFormField](docs/FillHandlebarFormField.md)
 - [CloudmersiveConvertApiClient.FindDocxParagraphRequest](docs/FindDocxParagraphRequest.md)
 - [CloudmersiveConvertApiClient.FindDocxParagraphResponse](docs/FindDocxParagraphResponse.md)
 - [CloudmersiveConvertApiClient.FindRegexMatch](docs/FindRegexMatch.md)
 - [CloudmersiveConvertApiClient.FindStringMatch](docs/FindStringMatch.md)
 - [CloudmersiveConvertApiClient.FindStringRegexRequest](docs/FindStringRegexRequest.md)
 - [CloudmersiveConvertApiClient.FindStringRegexResponse](docs/FindStringRegexResponse.md)
 - [CloudmersiveConvertApiClient.FindStringSimpleRequest](docs/FindStringSimpleRequest.md)
 - [CloudmersiveConvertApiClient.FindStringSimpleResponse](docs/FindStringSimpleResponse.md)
 - [CloudmersiveConvertApiClient.FinishEditingRequest](docs/FinishEditingRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxBodyRequest](docs/GetDocxBodyRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxBodyResponse](docs/GetDocxBodyResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxCommentsHierarchicalResponse](docs/GetDocxCommentsHierarchicalResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxCommentsResponse](docs/GetDocxCommentsResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxContentControlsResponse](docs/GetDocxContentControlsResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxGetCommentsHierarchicalRequest](docs/GetDocxGetCommentsHierarchicalRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxGetCommentsRequest](docs/GetDocxGetCommentsRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxGetFormFieldsResponse](docs/GetDocxGetFormFieldsResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxHeadersAndFootersRequest](docs/GetDocxHeadersAndFootersRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxHeadersAndFootersResponse](docs/GetDocxHeadersAndFootersResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxImagesRequest](docs/GetDocxImagesRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxImagesResponse](docs/GetDocxImagesResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse](docs/GetDocxMetadataPropertiesResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxPagesRequest](docs/GetDocxPagesRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxPagesResponse](docs/GetDocxPagesResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxSectionsRequest](docs/GetDocxSectionsRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxSectionsResponse](docs/GetDocxSectionsResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxStylesRequest](docs/GetDocxStylesRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxStylesResponse](docs/GetDocxStylesResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxTableByIndexRequest](docs/GetDocxTableByIndexRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxTableByIndexResponse](docs/GetDocxTableByIndexResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxTableRowRequest](docs/GetDocxTableRowRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxTableRowResponse](docs/GetDocxTableRowResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxTablesRequest](docs/GetDocxTablesRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxTablesResponse](docs/GetDocxTablesResponse.md)
 - [CloudmersiveConvertApiClient.GetFileTypeIconResult](docs/GetFileTypeIconResult.md)
 - [CloudmersiveConvertApiClient.GetImageInfoResult](docs/GetImageInfoResult.md)
 - [CloudmersiveConvertApiClient.GetMacrosResponse](docs/GetMacrosResponse.md)
 - [CloudmersiveConvertApiClient.GetPdfAnnotationsResult](docs/GetPdfAnnotationsResult.md)
 - [CloudmersiveConvertApiClient.GetXlsxCellByIdentifierRequest](docs/GetXlsxCellByIdentifierRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxCellByIdentifierResponse](docs/GetXlsxCellByIdentifierResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxCellRequest](docs/GetXlsxCellRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxCellResponse](docs/GetXlsxCellResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxColumnsRequest](docs/GetXlsxColumnsRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxColumnsResponse](docs/GetXlsxColumnsResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxImagesRequest](docs/GetXlsxImagesRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxImagesResponse](docs/GetXlsxImagesResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxRowsAndCellsRequest](docs/GetXlsxRowsAndCellsRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxRowsAndCellsResponse](docs/GetXlsxRowsAndCellsResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxSpecificRowRequest](docs/GetXlsxSpecificRowRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxSpecificRowResponse](docs/GetXlsxSpecificRowResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxStylesRequest](docs/GetXlsxStylesRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxStylesResponse](docs/GetXlsxStylesResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxWorksheetsRequest](docs/GetXlsxWorksheetsRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxWorksheetsResponse](docs/GetXlsxWorksheetsResponse.md)
 - [CloudmersiveConvertApiClient.HandlebarFormField](docs/HandlebarFormField.md)
 - [CloudmersiveConvertApiClient.HtmlGetLanguageResult](docs/HtmlGetLanguageResult.md)
 - [CloudmersiveConvertApiClient.HtmlGetLinksResponse](docs/HtmlGetLinksResponse.md)
 - [CloudmersiveConvertApiClient.HtmlGetRelCanonicalUrlResult](docs/HtmlGetRelCanonicalUrlResult.md)
 - [CloudmersiveConvertApiClient.HtmlGetSitemapUrlResult](docs/HtmlGetSitemapUrlResult.md)
 - [CloudmersiveConvertApiClient.HtmlHyperlink](docs/HtmlHyperlink.md)
 - [CloudmersiveConvertApiClient.HtmlMdResult](docs/HtmlMdResult.md)
 - [CloudmersiveConvertApiClient.HtmlSsrfThreatCheckResult](docs/HtmlSsrfThreatCheckResult.md)
 - [CloudmersiveConvertApiClient.HtmlTemplateApplicationRequest](docs/HtmlTemplateApplicationRequest.md)
 - [CloudmersiveConvertApiClient.HtmlTemplateApplicationResponse](docs/HtmlTemplateApplicationResponse.md)
 - [CloudmersiveConvertApiClient.HtmlTemplateOperation](docs/HtmlTemplateOperation.md)
 - [CloudmersiveConvertApiClient.HtmlThreatLink](docs/HtmlThreatLink.md)
 - [CloudmersiveConvertApiClient.HtmlToOfficeRequest](docs/HtmlToOfficeRequest.md)
 - [CloudmersiveConvertApiClient.HtmlToPdfRequest](docs/HtmlToPdfRequest.md)
 - [CloudmersiveConvertApiClient.HtmlToPngRequest](docs/HtmlToPngRequest.md)
 - [CloudmersiveConvertApiClient.HtmlToTextRequest](docs/HtmlToTextRequest.md)
 - [CloudmersiveConvertApiClient.HtmlToTextResponse](docs/HtmlToTextResponse.md)
 - [CloudmersiveConvertApiClient.InsertDocxCommentOnParagraphResponse](docs/InsertDocxCommentOnParagraphResponse.md)
 - [CloudmersiveConvertApiClient.InsertDocxInsertParagraphRequest](docs/InsertDocxInsertParagraphRequest.md)
 - [CloudmersiveConvertApiClient.InsertDocxInsertParagraphResponse](docs/InsertDocxInsertParagraphResponse.md)
 - [CloudmersiveConvertApiClient.InsertDocxTableRowRequest](docs/InsertDocxTableRowRequest.md)
 - [CloudmersiveConvertApiClient.InsertDocxTableRowResponse](docs/InsertDocxTableRowResponse.md)
 - [CloudmersiveConvertApiClient.InsertDocxTablesRequest](docs/InsertDocxTablesRequest.md)
 - [CloudmersiveConvertApiClient.InsertDocxTablesResponse](docs/InsertDocxTablesResponse.md)
 - [CloudmersiveConvertApiClient.InsertXlsxWorksheetRequest](docs/InsertXlsxWorksheetRequest.md)
 - [CloudmersiveConvertApiClient.InsertXlsxWorksheetResponse](docs/InsertXlsxWorksheetResponse.md)
 - [CloudmersiveConvertApiClient.JobStatusResult](docs/JobStatusResult.md)
 - [CloudmersiveConvertApiClient.KeynoteToJpgResult](docs/KeynoteToJpgResult.md)
 - [CloudmersiveConvertApiClient.KeynoteToPngResult](docs/KeynoteToPngResult.md)
 - [CloudmersiveConvertApiClient.MergeBatchJobCreateResult](docs/MergeBatchJobCreateResult.md)
 - [CloudmersiveConvertApiClient.MergeJobStatusResult](docs/MergeJobStatusResult.md)
 - [CloudmersiveConvertApiClient.MsgAttachment](docs/MsgAttachment.md)
 - [CloudmersiveConvertApiClient.MsgToHtmlResult](docs/MsgToHtmlResult.md)
 - [CloudmersiveConvertApiClient.MsgToJpgResult](docs/MsgToJpgResult.md)
 - [CloudmersiveConvertApiClient.MsgToPngResult](docs/MsgToPngResult.md)
 - [CloudmersiveConvertApiClient.MultiReplaceStringRequest](docs/MultiReplaceStringRequest.md)
 - [CloudmersiveConvertApiClient.MultipageImageFormatConversionResult](docs/MultipageImageFormatConversionResult.md)
 - [CloudmersiveConvertApiClient.OdpToJpgResult](docs/OdpToJpgResult.md)
 - [CloudmersiveConvertApiClient.OdpToPngResult](docs/OdpToPngResult.md)
 - [CloudmersiveConvertApiClient.OdsToJpgResult](docs/OdsToJpgResult.md)
 - [CloudmersiveConvertApiClient.OdsToPngResult](docs/OdsToPngResult.md)
 - [CloudmersiveConvertApiClient.OdtToJpgResult](docs/OdtToJpgResult.md)
 - [CloudmersiveConvertApiClient.OdtToPngResult](docs/OdtToPngResult.md)
 - [CloudmersiveConvertApiClient.PageConversionResult](docs/PageConversionResult.md)
 - [CloudmersiveConvertApiClient.PdfAnnotation](docs/PdfAnnotation.md)
 - [CloudmersiveConvertApiClient.PdfDocument](docs/PdfDocument.md)
 - [CloudmersiveConvertApiClient.PdfFormField](docs/PdfFormField.md)
 - [CloudmersiveConvertApiClient.PdfFormFields](docs/PdfFormFields.md)
 - [CloudmersiveConvertApiClient.PdfMetadata](docs/PdfMetadata.md)
 - [CloudmersiveConvertApiClient.PdfPageText](docs/PdfPageText.md)
 - [CloudmersiveConvertApiClient.PdfTextByPageResult](docs/PdfTextByPageResult.md)
 - [CloudmersiveConvertApiClient.PdfToJpgResult](docs/PdfToJpgResult.md)
 - [CloudmersiveConvertApiClient.PdfToPngDirectResult](docs/PdfToPngDirectResult.md)
 - [CloudmersiveConvertApiClient.PdfToPngResult](docs/PdfToPngResult.md)
 - [CloudmersiveConvertApiClient.PptxSplitAdvancedRequest](docs/PptxSplitAdvancedRequest.md)
 - [CloudmersiveConvertApiClient.PptxSplitAdvancedResponse](docs/PptxSplitAdvancedResponse.md)
 - [CloudmersiveConvertApiClient.PptxToPngResult](docs/PptxToPngResult.md)
 - [CloudmersiveConvertApiClient.PresentationAdvancedResult](docs/PresentationAdvancedResult.md)
 - [CloudmersiveConvertApiClient.PresentationResult](docs/PresentationResult.md)
 - [CloudmersiveConvertApiClient.RemoveDocxHeadersAndFootersRequest](docs/RemoveDocxHeadersAndFootersRequest.md)
 - [CloudmersiveConvertApiClient.RemoveDocxHeadersAndFootersResponse](docs/RemoveDocxHeadersAndFootersResponse.md)
 - [CloudmersiveConvertApiClient.RemoveDocxPagesRequest](docs/RemoveDocxPagesRequest.md)
 - [CloudmersiveConvertApiClient.RemoveHtmlFromTextRequest](docs/RemoveHtmlFromTextRequest.md)
 - [CloudmersiveConvertApiClient.RemoveHtmlFromTextResponse](docs/RemoveHtmlFromTextResponse.md)
 - [CloudmersiveConvertApiClient.RemovePptxSlidesRequest](docs/RemovePptxSlidesRequest.md)
 - [CloudmersiveConvertApiClient.RemoveWhitespaceFromTextRequest](docs/RemoveWhitespaceFromTextRequest.md)
 - [CloudmersiveConvertApiClient.RemoveWhitespaceFromTextResponse](docs/RemoveWhitespaceFromTextResponse.md)
 - [CloudmersiveConvertApiClient.RemoveXlsxWorksheetRequest](docs/RemoveXlsxWorksheetRequest.md)
 - [CloudmersiveConvertApiClient.RenameXlsxWorksheetRequest](docs/RenameXlsxWorksheetRequest.md)
 - [CloudmersiveConvertApiClient.RenameXlsxWorksheetResponse](docs/RenameXlsxWorksheetResponse.md)
 - [CloudmersiveConvertApiClient.ReplaceDocxParagraphRequest](docs/ReplaceDocxParagraphRequest.md)
 - [CloudmersiveConvertApiClient.ReplaceDocxParagraphResponse](docs/ReplaceDocxParagraphResponse.md)
 - [CloudmersiveConvertApiClient.ReplaceStringRegexRequest](docs/ReplaceStringRegexRequest.md)
 - [CloudmersiveConvertApiClient.ReplaceStringRegexResponse](docs/ReplaceStringRegexResponse.md)
 - [CloudmersiveConvertApiClient.ReplaceStringRequest](docs/ReplaceStringRequest.md)
 - [CloudmersiveConvertApiClient.ReplaceStringSimpleRequest](docs/ReplaceStringSimpleRequest.md)
 - [CloudmersiveConvertApiClient.ReplaceStringSimpleResponse](docs/ReplaceStringSimpleResponse.md)
 - [CloudmersiveConvertApiClient.RtfToJpgResult](docs/RtfToJpgResult.md)
 - [CloudmersiveConvertApiClient.RtfToPngResult](docs/RtfToPngResult.md)
 - [CloudmersiveConvertApiClient.ScreenshotRequest](docs/ScreenshotRequest.md)
 - [CloudmersiveConvertApiClient.SetFormFieldValue](docs/SetFormFieldValue.md)
 - [CloudmersiveConvertApiClient.SetPdfFormFieldsRequest](docs/SetPdfFormFieldsRequest.md)
 - [CloudmersiveConvertApiClient.SetPdfMetadataRequest](docs/SetPdfMetadataRequest.md)
 - [CloudmersiveConvertApiClient.SetXlsxCellByIdentifierRequest](docs/SetXlsxCellByIdentifierRequest.md)
 - [CloudmersiveConvertApiClient.SetXlsxCellByIdentifierResponse](docs/SetXlsxCellByIdentifierResponse.md)
 - [CloudmersiveConvertApiClient.SetXlsxCellRequest](docs/SetXlsxCellRequest.md)
 - [CloudmersiveConvertApiClient.SetXlsxCellResponse](docs/SetXlsxCellResponse.md)
 - [CloudmersiveConvertApiClient.SingleReplaceString](docs/SingleReplaceString.md)
 - [CloudmersiveConvertApiClient.SplitBatchJobCreateResult](docs/SplitBatchJobCreateResult.md)
 - [CloudmersiveConvertApiClient.SplitDocumentResult](docs/SplitDocumentResult.md)
 - [CloudmersiveConvertApiClient.SplitDocxDocumentResult](docs/SplitDocxDocumentResult.md)
 - [CloudmersiveConvertApiClient.SplitPdfResult](docs/SplitPdfResult.md)
 - [CloudmersiveConvertApiClient.SplitPptxPresentationResult](docs/SplitPptxPresentationResult.md)
 - [CloudmersiveConvertApiClient.SplitTextDocumentByLinesResult](docs/SplitTextDocumentByLinesResult.md)
 - [CloudmersiveConvertApiClient.SplitTextDocumentByStringResult](docs/SplitTextDocumentByStringResult.md)
 - [CloudmersiveConvertApiClient.SplitXlsxWorksheetResult](docs/SplitXlsxWorksheetResult.md)
 - [CloudmersiveConvertApiClient.TextConversionResult](docs/TextConversionResult.md)
 - [CloudmersiveConvertApiClient.TextDocumentElement](docs/TextDocumentElement.md)
 - [CloudmersiveConvertApiClient.TextDocumentLine](docs/TextDocumentLine.md)
 - [CloudmersiveConvertApiClient.TextEncodingDetectResponse](docs/TextEncodingDetectResponse.md)
 - [CloudmersiveConvertApiClient.Thumbnail](docs/Thumbnail.md)
 - [CloudmersiveConvertApiClient.UpdateDocxTableCellRequest](docs/UpdateDocxTableCellRequest.md)
 - [CloudmersiveConvertApiClient.UpdateDocxTableCellResponse](docs/UpdateDocxTableCellResponse.md)
 - [CloudmersiveConvertApiClient.UpdateDocxTableRowRequest](docs/UpdateDocxTableRowRequest.md)
 - [CloudmersiveConvertApiClient.UpdateDocxTableRowResponse](docs/UpdateDocxTableRowResponse.md)
 - [CloudmersiveConvertApiClient.UrlToPdfRequest](docs/UrlToPdfRequest.md)
 - [CloudmersiveConvertApiClient.UrlToTextRequest](docs/UrlToTextRequest.md)
 - [CloudmersiveConvertApiClient.UrlToTextResponse](docs/UrlToTextResponse.md)
 - [CloudmersiveConvertApiClient.ViewerResponse](docs/ViewerResponse.md)
 - [CloudmersiveConvertApiClient.WorksheetResult](docs/WorksheetResult.md)
 - [CloudmersiveConvertApiClient.XlsxImage](docs/XlsxImage.md)
 - [CloudmersiveConvertApiClient.XlsxSpreadsheetCell](docs/XlsxSpreadsheetCell.md)
 - [CloudmersiveConvertApiClient.XlsxSpreadsheetColumn](docs/XlsxSpreadsheetColumn.md)
 - [CloudmersiveConvertApiClient.XlsxSpreadsheetRow](docs/XlsxSpreadsheetRow.md)
 - [CloudmersiveConvertApiClient.XlsxToPngResult](docs/XlsxToPngResult.md)
 - [CloudmersiveConvertApiClient.XlsxWorksheet](docs/XlsxWorksheet.md)
 - [CloudmersiveConvertApiClient.XmlAddAttributeWithXPathResult](docs/XmlAddAttributeWithXPathResult.md)
 - [CloudmersiveConvertApiClient.XmlAddChildWithXPathResult](docs/XmlAddChildWithXPathResult.md)
 - [CloudmersiveConvertApiClient.XmlFilterWithXPathResult](docs/XmlFilterWithXPathResult.md)
 - [CloudmersiveConvertApiClient.XmlQueryWithXQueryMultiResult](docs/XmlQueryWithXQueryMultiResult.md)
 - [CloudmersiveConvertApiClient.XmlQueryWithXQueryResult](docs/XmlQueryWithXQueryResult.md)
 - [CloudmersiveConvertApiClient.XmlRemoveAllChildrenWithXPathResult](docs/XmlRemoveAllChildrenWithXPathResult.md)
 - [CloudmersiveConvertApiClient.XmlRemoveWithXPathResult](docs/XmlRemoveWithXPathResult.md)
 - [CloudmersiveConvertApiClient.XmlReplaceWithXPathResult](docs/XmlReplaceWithXPathResult.md)
 - [CloudmersiveConvertApiClient.XmlSetValueWithXPathResult](docs/XmlSetValueWithXPathResult.md)
 - [CloudmersiveConvertApiClient.XxeThreatDetectionResult](docs/XxeThreatDetectionResult.md)
 - [CloudmersiveConvertApiClient.ZipDirectory](docs/ZipDirectory.md)
 - [CloudmersiveConvertApiClient.ZipEncryptionAdvancedRequest](docs/ZipEncryptionAdvancedRequest.md)
 - [CloudmersiveConvertApiClient.ZipExtractResponse](docs/ZipExtractResponse.md)
 - [CloudmersiveConvertApiClient.ZipFile](docs/ZipFile.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

