@echo off
rem Public domain
rem http://unlicense.org/
rem Created by Grigore Stefan <g_stefan@yahoo.com>

if not exist object\ mkdir object
if not exist bin\css\ mkdir bin\css
if not exist bin\js\ mkdir bin\js
if not exist bin\img\ mkdir bin\img

xcopy /E /H /K /Y /D vendor bin\vendor\

php .\build\build.php
