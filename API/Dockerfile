FROM python:3.8-slim-buster


COPY requirements.txt requirements.txt
WORKDIR /app

COPY . .

RUN pwd
RUN ls -al 

#RUN apt install git -y

RUN apt-get update 
RUN apt-get install -y  git 

#--no-install-recommends

RUN pip3 install -r requirements.txt





#CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
CMD [ "python3", "LinkBudgetAnalysisREST.py" ]


#docker build -t jsatorb-api:dev .
#docker run -it --name jsatorb-api-container -p 8001:8001 --rm jsatorb-api:dev



