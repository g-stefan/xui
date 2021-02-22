@echo off
rem Public domain
rem http://unlicense.org/
rem Created by Grigore Stefan <g_stefan@yahoo.com>

if not exist temp\ mkdir temp
if not exist output\css\ mkdir output\css
if not exist output\js\ mkdir output\js
if not exist output\img\ mkdir output\img

xcopy /E /H /K /Y /D vendor output\vendor\

php .\build\build.php
