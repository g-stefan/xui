@echo off
rem Public domain
rem http://unlicense.org/
rem Created by Grigore Stefan <g_stefan@yahoo.com>

if not exist build\ mkdir build
if not exist release\css\ mkdir release\css
if not exist release\js\ mkdir release\js
if not exist release\img\ mkdir release\img

xcopy /E /H /K /Y /D vendor release\vendor\

php build.php
