Remove-Item –path ./client –recurse
& java -jar swagger-codegen-cli.jar generate -i https://api.cloudmersive.com/convert/docs/v1/swagger -l javascript -o client # -projectName cloudmersive-convert-api-client
(Get-Content ./client/package.json).replace('v1', '1.0.0') | Set-Content ./client/package.json
& npm build ./client