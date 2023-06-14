// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2023 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("make [" + Project.name + "]");

Shell.mkdirRecursivelyIfNotExists("output");
Shell.mkdirRecursivelyIfNotExists("temp");

Shell.mkdirRecursivelyIfNotExists("output/css");
Shell.mkdirRecursivelyIfNotExists("output/js");
Shell.mkdirRecursivelyIfNotExists("output/img");

exitIf(!Shell.copyDirRecursively("vendor", "output/vendor"));

Shell.system("quantum-script .\\fabricare\\build.js");
