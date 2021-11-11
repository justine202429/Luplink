cd ./projects/ngx-luplink/
npm link

ng build --project=ngx-luplink

cd ../luplink-app/
npm link @luplink/ngx-luplink
