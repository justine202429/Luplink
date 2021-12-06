# -*- coding: utf-8 -*-
import lib.bottle as bottle
from lib.bottle import request, response
import lib.LPStatic as LPStatic  # Personal wrapper for linkpredict calculation
import pprint
import logging
import time 

#For development, might break on Windows OS
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


class EnableCors(object):
    """Enabling Cors has been a bit tricky, this method is supposed to have a CORS response even if the python script crashes, however it doesn't seem to work"""

    name = "enable_cors"
    api = 2

    def apply(self, fn, context):
        def _enable_cors(*args, **kwargs):
            # set CORS headers
            response.headers["Access-Control-Allow-Origin"] = "*"
            response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
            response.headers[
                "Access-Control-Allow-Headers"
            ] = "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"

            if bottle.request.method != "OPTIONS":
                # actual request; reply with the actual response
                return fn(*args, **kwargs)

        return _enable_cors

app = bottle.default_app()
app.install(EnableCors())

@app.route("/linkBudget/static", method=["POST", "OPTIONS"])
def getStaticLinkBudget():
    print(bcolors.OKGREEN+"Static Link Budget"+bcolors.ENDC)
    
    # Watch out that request doesn't go beyond the request.MEMFILE_MAX (102.4 kilobytes)
    try:
        return getLinkBudget(request.json)
    except Exception as e:
        print(bcolors.FAIL)
        logging.exception("ERROR")
        print(bcolors.ENDC)
        return "Error %s"%e
    
def getLinkBudget(query):
    print("Received following JSON Data :\n")
    pprint.pprint(query)
    # dataJSON = json.loads(data) #data is already a dict, no need to loads
    #TODO: Should put the following in an object and just parse the query
    data = query["data"]
    options = query["options"]
    backendLib = options["calculation"]  # only linkpredict for now
    calculationType = options["type"]  # Static or dynamic
    
    #Addind a debug option that adds artificial delay and could be used for other things
    try:
        debug = bool(options["debug"])
        print(bcolors.WARNING)
        print("Request asked for debug mode (artificial delay added to the response)")
        print(bcolors.ENDC)
    except Exception as e:
        # traceback.print_exc()
        debug = False

    if debug: time.sleep(1) #TODO: Used while developping front-end, else the request is too fast
    try:
        func = backends[backendLib]#We use the library asked by the request
    except KeyError:
        # Not implemented yet, fallback to linkpredict
        notYetImplemented()  # TODO: Warn front-end
        func = calculateLinkPredict(data, LBType=calculationType)
    print(bcolors.OKCYAN)
    result = func(data, calculationType)  # Calling the appropriate function
    print(bcolors.ENDC)
    return result

def calculateLinkPredict(data, LBType):
    # TODO: implement dynamic
    return LPStatic.calculateLinkBudget(data, verbose=True)

def notYetImplemented():
    print("Unimplemented backend called\n")
    return "This backend has not been implemented yet."

backends = {"linkpredict": calculateLinkPredict, "luplink": notYetImplemented}

if __name__ == "__main__":
    #bottle.run(host="0.0.0.0", port=8001, debug=True)
    bottle.run(host="localhost", port=8001, debug=True)


