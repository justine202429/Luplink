# -*- coding: utf-8 -*-
#author: https://gist.github.com/Natim/4509560

import json
import sys
from ConfigParser import (ConfigParser, MissingSectionHeaderError,
                          ParsingError, DEFAULTSECT)
import os

class StrictConfigParser(ConfigParser):

    def _read(self, fp, fpname):
        cursect = None                        # None, or a dictionary
        optname = None
        lineno = 0
        e = None                              # None, or an exception
        debug = False
        while True:
            line = fp.readline()
            if debug:print("line:"+str(line))
            if not line:
                break
            lineno = lineno + 1
            # comment or blank line?
            if line.strip() == '' or line[0] in '#;':
                continue
            if line.split(None, 1)[0].lower() == 'rem' and line[0] in "rR":
                # no leading whitespace
                continue
            # continuation line?
            if line[0].isspace() and cursect is not None and optname:
                value = line.strip()
                if debug:print("VAL:"+str(value))
                if value:
                    cursect[optname].append(value)
            # a section header or option header?
            else:
                # is it a section header?
                mo = self.SECTCRE.match(line)
                if debug:print("mo:"+str(mo))
                if mo:
                    sectname = mo.group('header')
                    if sectname in self._sections:
                        raise ValueError('Duplicate section %r' % sectname)
                    elif sectname == DEFAULTSECT:
                        cursect = self._defaults
                    else:
                        cursect = self._dict()
                        cursect['__name__'] = sectname
                        self._sections[sectname] = cursect
                        if debug:print("cursect:"+str(cursect))
                    # So sections can't start with a continuation line
                    optname = None
                # no section header in the file?
                elif cursect is None:
                    raise MissingSectionHeaderError(fpname, lineno, line)
                # an option line?
                else:
                    try:
                        mo = self._optcre.match(line)   # 2.7
                    except AttributeError:
                        mo = self.OPTCRE.match(line)    # 2.6
                    if mo:
                        optname, vi, optval = mo.group('option', 'vi', 'value')
                        if debug:print("optname:"+str(optname))
                        #optname = self.optionxform(optname.rstrip())   #Commented to keep capitalization
                        optname = optname.replace(' ', '')##supprime le premier espace
                        
                        if debug:print("optname:"+str(optname))
                        # This check is fine because the OPTCRE cannot
                        # match if it would set optval to None
                        if optval is not None:
                            if vi in ('=', ':') and ';' in optval:
                                # ';' is a comment delimiter only if it follows
                                # a spacing character
                                pos = optval.find(';')
                                if pos != -1 and optval[pos - 1].isspace():
                                    optval = optval[:pos]
                            optval = optval.strip()
                            # allow empty values
                            if optval == '""':
                                optval = ''
                            cursect[optname] = [optval]
                        else:
                            # valueless option handling
                            cursect[optname] = optval
                    else:
                        # a non-fatal parsing error occurred.  set up the
                        # exception but keep going. the exception will be
                        # raised at the end of the file and will contain a
                        # list of all bogus lines
                        if not e:
                            e = ParsingError(fpname)
                        print("REPR"+repr(line))
                        e.append(lineno, repr(line))
        # if any parsing errors occurred, raise an exception
        if e:
            raise e

        # join the multi-line values collected while reading
        all_sections = [self._defaults]
        all_sections.extend(self._sections.values())
        for options in all_sections:
            for name, val in options.items():
                if isinstance(val, list):
                    options[name] = '\n'.join(val)

    def dget(self, section, option, default=None, type=str):
        if not self.has_option(section, option):
            return default
        if type is str:
            return self.get(section, option)
        elif type is int:
            return self.getint(section, option)
        elif type is bool:
            return self.getboolean(section, option)
        else:
            raise NotImplementedError()


if __name__ == "__main__":
    cfg = StrictConfigParser()
    if len(sys.argv) > 1:
        f = open(sys.argv[1])
    else:
        f = sys.stdin
    cfg.readfp(f)
    f.close()

    config = {}

    for section in cfg.sections():
        config[section] = {}
        for name, value in cfg.items(section):
            config[section][name] = [x.strip() for x in value.split() if x]
            if len(config[section][name]) == 1:
                config[section][name] = config[section][name][0]
            elif len(config[section][name]) == 0:
                config[section][name] = ''

    #print("=============")
    #print (config)
    #print("=============")
    with open("luplinkReference.json", "w") as f:
        f.write(json.dumps(config, indent=4))

    print (json.dumps(config))
