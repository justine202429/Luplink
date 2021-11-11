# Luplink Builder (Docker)

These bash scripts allow to use docker images in order to build the ngx-luplink library package without the need to install angular locally.

*Example: You made a change to Luplink's code and want to build it again quickly so it can be integrated to JSatorb*

You can find more general information for Luplink in the [main readme](../README.md)

# Quickstart

> **Warning**: Before building, do not forget to change the luplink-api endpoint! You can find it inside `luplink/project/luplink-app/src/environments/environment.ts` as `luplinkEndpoint`

## Build Luplink (standalone)


Use the following command to download and run luplink-builder image:

```bash
cd standalone
bash run-standalone-compiler.sh
```
The default output will be in `build/`. You can change this by adding an optional path: `bash run-standalone-compiler.sh ouput/path/`

This will fetch the builder image from Gitlab's container repository and run the image.

This will build the ngx-library if it doesn't already exist inside `luplink/` and build luplink-app, the standalone version of Luplink.


## Build ngx-luplink

Use the following command to download and run luplink-builder image:

```bash
cd lib
bash run-lib-compiler.sh
```

This will fetch the builder image from Gitlab's container repository and run the image.

The image will build the **ngx-luplink library** from the `../luplink/` folder and pack it into `../luplink/luplink-ngx-luplink-<version>.tgz`.

This package can then be used to install ngx-luplink into another project such as JSatOrb.

# All files

- `lib/`: scripts dedicated to building ngx-luplink:
  - `build-lib-compiler.sh`: Creates an image that allows to build the library
  - `run-lib-compiler.sh`: Builds and pack the `ngx-luplink` project inside a Docker container.
  - `push-lib-builder.sh`: Push the `lib-builder` image to its container repository inside Gitlab.
- `standalone/`: scripts dedicated to building luplink-app (standalone)
  - `build-standalone-compiler.sh`: Creates the image that allow to build luplink-app.
  - `run-standalone-compiler.sh`: Builds `luplink-app` using previous image
  - `push-standalone-compiler.sh`: Push the `luplink-builder` image to its container repository inside Gitlab.

# Developper

To create the docker images that allow to build ngx-luplink and luplink-app, you can run the following commands:
```bash
bash build-lib-compiler.sh
```
```bash
bash build-standalone-compiler.sh
```

server deployment
```
ssh harak@51.178.2.55
cd var/www/html
sudo cp -r ~/git/stage-2021-julien_prissimitzis/luplink/dist/luplink-app/* .
```

