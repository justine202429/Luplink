# base image
FROM node:14.15.5 as build


## install chrome for protractor tests
#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/#sources.list.d/google.list'
#RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /app
# RUN ls -la
# RUN ls -la projects/ngx-luplink/

# RUN cd projects/ngx-luplink/
RUN npm install --no-package-lock
# RUN cd ../..
#RUN npm install -g @angular/cli@11.2.5

#RUN npm audit fix

#RUN npm audit fix --force

# add app
#COPY . /app

RUN pwd
# RUN ls -al

#build library and then app
# RUN bash build_luplink.sh .

#=====
RUN ng build

# RUN npm install
RUN npm pack /app/dist/ngx-luplink
# RUN ls -la /app/dist/
# RUN ls -la /app/dist/ngx-luplink
# RUN ls -la /app/

RUN npm install /app/luplink-ngx-luplink-0.2.1.tgz

RUN ng build --project=luplink-app

RUN ls -la ./dist/
# RUN ls -la /usr/share/nginx/html/
# RUN cp -r ./dist/luplink-app/* /usr/share/nginx/html/
#=====
#CMD ng serve --host 0.0.0.0


# RUN ls -al /app/dist/

#serve image
FROM nginx:1.19.10-alpine

RUN ls -la /usr/share/nginx/html/

COPY --from=build /app/dist/luplink-app /usr/share/nginx/html/

RUN ls -la /usr/share/nginx/html/

COPY ./docker/conf/nginx.conf /etc/nginx/nginx.conf

VOLUME ["/var/cache/nginx", "/usr/share/nginx/html"]
EXPOSE 80 443

# RUN ls -al /usr/share/nginx/html/


CMD ["nginx", "-g", "daemon off;"]

# CMD ["/bin/bash"]
#cli@8.1.3


#check:
#cd ~/git/NSS/nanospace-tutorial/material/src-python
#python LinkBudgetAnalysisREST.py
#http://localhost:4200/


#docker build -t jsatorb-link-budget:dev .
#docker run -it --name jsatorb-link-budget-container -p 80:80 --rm jsatorb-link-budget:dev



#cf https://mherman.org/blog/dockerizing-an-angular-app/
#docker build -t gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/jsatorb-front .
#docker push gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/jsatorb-front .

#Don't forget you can debug the container using : docker exec -ti 376 /bin/sh
