@echo off
rem Public domain
rem http://unlicense.org/
rem Created by Grigore Stefan <g_stefan@yahoo.com>

call build.config.cmd

set ACTION=%1
if "%1" == "" set ACTION=make
echo -^> %ACTION% %PROJECT%

call build.%ACTION%.cmd
