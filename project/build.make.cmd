@echo off
rem Public domain
rem http://unlicense.org/
rem Created by Grigore Stefan <g_stefan@yahoo.com>

if not exist object\ mkdir object
if not exist build\css\ mkdir build\css
if not exist build\js\ mkdir build\js
if not exist build\img\ mkdir build\img

xcopy /E /H /K /Y /D vendor build\vendor\

php .\project\build.php
